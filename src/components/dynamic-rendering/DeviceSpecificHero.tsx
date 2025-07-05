import { Box, Button, Container, Typography } from "@mui/material";
import { headers } from "next/headers";
import type React from "react";

// Server Component - デバイス判定を行う
async function getDeviceType() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  
  // モバイルデバイスの簡単な判定
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
  return isMobile ? "mobile" : "desktop";
}

export const DeviceSpecificHero: React.FC = async () => {
  const deviceType = await getDeviceType();
  
  if (deviceType === "mobile") {
    // モバイル専用UI
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            📱 モバイル向けUI
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            動的レンダリングでモバイル専用コンテンツを表示しています
          </Typography>
          <Box sx={{ backgroundColor: "primary.light", p: 3, borderRadius: 2, mt: 3 }}>
            <Typography variant="body1" paragraph>
              このセクションはモバイルデバイスでのみ表示されます。
              サーバーサイドでUser-Agentを解析して判定しています。
            </Typography>
            <Button variant="contained" fullWidth size="large">
              モバイルアプリをダウンロード
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }
  
  // デスクトップ専用UI
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            🖥️ デスクトップ向けUI
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            動的レンダリングでデスクトップ専用コンテンツを表示しています
          </Typography>
          <Box sx={{ backgroundColor: "secondary.light", p: 3, borderRadius: 2, mt: 3 }}>
            <Typography variant="body1" paragraph>
              このセクションはデスクトップデバイスでのみ表示されます。
              より詳細な情報とリッチなインタラクションを提供します。
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button variant="contained" size="large">
                詳細を見る
              </Button>
              <Button variant="outlined" size="large">
                デモを試す
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              height: 400,
              backgroundColor: "grey.200",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" color="text.secondary">
              デスクトップ専用画像
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}; 