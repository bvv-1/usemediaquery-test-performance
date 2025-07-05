"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { DataDisplay } from "@/components/common/DataDisplay";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { ProductGrid } from "@/components/common/ProductGrid";
import { MediaQueryHero } from "@/components/use-media-query/MediaQueryHero";

export default function UseMediaQueryPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // ハイドレーションエラー対策
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // サーバーサイドレンダリング時は初期状態で表示
    return (
      <>
        <Header />
        <Box component="main">
          <MediaQueryHero />
          <ProductGrid />
          <DataDisplay />
        </Box>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box component="main">
        <MediaQueryHero />
        <ProductGrid />
        <DataDisplay />
        {/* デバイス情報を表示 */}
        <Box
          sx={{
            p: 2,
            backgroundColor: "success.light",
            color: "success.contrastText",
            textAlign: "center",
          }}
        >
          useMediaQueryで検出したデバイスタイプ: {isDesktop ? "desktop" : "mobile"}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
