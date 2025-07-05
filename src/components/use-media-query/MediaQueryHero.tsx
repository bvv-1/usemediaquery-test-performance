"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const MediaQueryHero = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (isDesktop) {
    // デスクトップ専用UI
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              🖥️ デスクトップ向けUI
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              useMediaQueryでデスクトップ専用コンテンツを表示しています
            </Typography>
            <Box sx={{ backgroundColor: "success.light", p: 3, borderRadius: 2, mt: 3 }}>
              <Typography variant="body1" paragraph>
                このセクションはデスクトップデバイスでのみ表示されます。
                クライアントサイドでメディアクエリを使用して判定しています。
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Button variant="contained" size="large">
                  プロ版を試す
                </Button>
                <Button variant="outlined" size="large">
                  機能を比較
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
  }

  // モバイル専用UI
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          📱 モバイル向けUI
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          useMediaQueryでモバイル専用コンテンツを表示しています
        </Typography>
        <Box sx={{ backgroundColor: "warning.light", p: 3, borderRadius: 2, mt: 3 }}>
          <Typography variant="body1" paragraph>
            このセクションはモバイルデバイスでのみ表示されます。
            クライアントサイドでメディアクエリを使用して判定しています。
          </Typography>
          <Button variant="contained" fullWidth size="large">
            モバイルアプリをダウンロード
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
