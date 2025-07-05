import { Box } from "@mui/material";
import { headers } from "next/headers";
import { Header } from "@/components/common/Header";
import { ProductGrid } from "@/components/common/ProductGrid";
import { DataDisplay } from "@/components/common/DataDisplay";
import { Footer } from "@/components/common/Footer";
import { DeviceSpecificHero } from "@/components/dynamic-rendering/DeviceSpecificHero";

// Server Component - デバイス判定を行う
async function getDeviceType() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  
  // モバイルデバイスの簡単な判定
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
  return isMobile ? "mobile" : "desktop";
}

export default async function DynamicRenderingPage() {
  const deviceType = await getDeviceType();
  
  return (
    <>
      <Header />
      <Box component="main">
        <DeviceSpecificHero />
        <ProductGrid />
        <DataDisplay />
        {/* デバイス情報を表示 */}
        <Box sx={{ p: 2, backgroundColor: "info.light", color: "info.contrastText", textAlign: "center" }}>
          サーバーサイドで検出したデバイスタイプ: {deviceType}
        </Box>
      </Box>
      <Footer />
    </>
  );
} 