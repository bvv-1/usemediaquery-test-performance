const fs = require('fs');

// 本番環境レポートファイルを読み込み
const reports = {
  'パターン1（CSSファースト）': JSON.parse(fs.readFileSync('lighthouse-css-first-prod.json', 'utf8')),
  'パターン2（動的レンダリング）': JSON.parse(fs.readFileSync('lighthouse-dynamic-rendering-prod.json', 'utf8')),
  'パターン4（useMediaQueryフック）': JSON.parse(fs.readFileSync('lighthouse-use-media-query-prod.json', 'utf8'))
};

// 主要な指標を抽出する関数
function extractMetrics(report) {
  const audits = report.audits;
  
  return {
    'First Contentful Paint (FCP)': {
      value: audits['first-contentful-paint']?.numericValue,
      displayValue: audits['first-contentful-paint']?.displayValue,
      score: audits['first-contentful-paint']?.score
    },
    'Largest Contentful Paint (LCP)': {
      value: audits['largest-contentful-paint']?.numericValue,
      displayValue: audits['largest-contentful-paint']?.displayValue,
      score: audits['largest-contentful-paint']?.score
    },
    'Speed Index': {
      value: audits['speed-index']?.numericValue,
      displayValue: audits['speed-index']?.displayValue,
      score: audits['speed-index']?.score
    },
    'Time to Interactive (TTI)': {
      value: audits['interactive']?.numericValue,
      displayValue: audits['interactive']?.displayValue,
      score: audits['interactive']?.score
    },
    'Total Blocking Time (TBT)': {
      value: audits['total-blocking-time']?.numericValue,
      displayValue: audits['total-blocking-time']?.displayValue,
      score: audits['total-blocking-time']?.score
    },
    'Cumulative Layout Shift (CLS)': {
      value: audits['cumulative-layout-shift']?.numericValue,
      displayValue: audits['cumulative-layout-shift']?.displayValue,
      score: audits['cumulative-layout-shift']?.score
    }
  };
}

// 各パターンの指標を取得
const metrics = {};
for (const [name, report] of Object.entries(reports)) {
  metrics[name] = extractMetrics(report);
}

// 結果を整理・表示
console.log('================================================================================');
console.log('モバイルとPCの出し分けパターン本番環境測定結果比較');
console.log('================================================================================');

const metricNames = Object.keys(metrics[Object.keys(metrics)[0]]);

metricNames.forEach(metricName => {
  console.log(`\n${metricName}`);
  console.log('------------------------------------------------------------');
  console.log('パターン'.padEnd(35) + 'スコア'.padEnd(10) + '値'.padEnd(12) + '表示値');
  console.log('------------------------------------------------------------');
  
  Object.entries(metrics).forEach(([pattern, patternMetrics]) => {
    const metric = patternMetrics[metricName];
    const score = metric.score !== null ? `${Math.round(metric.score * 100)}` : 'N/A';
    const value = metric.value !== null ? Math.round(metric.value) : 'N/A';
    const displayValue = metric.displayValue || 'N/A';
    
    console.log(`${pattern.padEnd(35)} ${score.padEnd(10)} ${value.toString().padEnd(12)} ${displayValue}`);
  });
});

// 総合評価の計算
console.log('\n\n総合評価（平均スコア）');
console.log('------------------------------------------------------------');

Object.entries(metrics).forEach(([pattern, patternMetrics]) => {
  const scores = Object.values(patternMetrics)
    .map(metric => metric.score)
    .filter(score => score !== null);
  
  const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  console.log(`${pattern}: ${(averageScore * 100).toFixed(1)}点`);
});

console.log('\n\n開発環境との差異分析');
console.log('------------------------------------------------------------');

// 開発環境のデータと比較（もしファイルが存在する場合）
const devReports = {};
try {
  devReports['パターン1（CSSファースト）'] = JSON.parse(fs.readFileSync('lighthouse-css-first.json', 'utf8'));
  devReports['パターン2（動的レンダリング）'] = JSON.parse(fs.readFileSync('lighthouse-dynamic-rendering.json', 'utf8'));
  devReports['パターン4（useMediaQueryフック）'] = JSON.parse(fs.readFileSync('lighthouse-use-media-query.json', 'utf8'));
  
  console.log('開発環境と本番環境の比較:');
  Object.keys(reports).forEach(pattern => {
    const prodMetrics = extractMetrics(reports[pattern]);
    const devMetrics = extractMetrics(devReports[pattern]);
    
    console.log(`\n${pattern}:`);
    console.log('  指標'.padEnd(30) + '開発環境'.padEnd(15) + '本番環境'.padEnd(15) + '改善');
    console.log('  ' + '-'.repeat(60));
    
    ['First Contentful Paint (FCP)', 'Largest Contentful Paint (LCP)', 'Speed Index'].forEach(metric => {
      const prodValue = prodMetrics[metric].value;
      const devValue = devMetrics[metric].value;
      const improvement = prodValue && devValue ? ((devValue - prodValue) / devValue * 100).toFixed(1) + '%' : 'N/A';
      
      console.log(`  ${metric.padEnd(30)} ${(devValue || 'N/A').toString().padEnd(15)} ${(prodValue || 'N/A').toString().padEnd(15)} ${improvement}`);
    });
  });
} catch (error) {
  console.log('開発環境のデータが見つかりません');
}

console.log('\n\n推奨事項');
console.log('------------------------------------------------------------');
console.log('✅ 本番環境では静的ファイルが配信されるため、より正確なパフォーマンス指標が取得できました');
console.log('✅ 各パターンの特性がより明確に表れています');
console.log('✅ 実際のユーザー体験に近い測定結果を基に判断してください'); 