import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataDisplay } from "@/components/common/DataDisplay";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { ProductGrid } from "@/components/common/ProductGrid";

export default function MiddlewareHybridMobilePage() {
  return (
    <>
      <Header />
      <Box component="main">
        {/* モバイル版専用のヒーローセクション */}
        <Box
          sx={{
            minHeight: "60vh",
            background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            position: "relative",
            padding: 2,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.5rem" },
                fontWeight: "bold",
                marginBottom: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Mobile First Experience
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
                marginBottom: 3,
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              Lightweight, touch-optimized interface designed for on-the-go usage
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                width: "100%",
                maxWidth: "300px",
                margin: "0 auto",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  borderRadius: "25px",
                  padding: "12px 32px",
                  fontSize: "1.1rem",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                Quick Access
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "25px",
                  padding: "12px 32px",
                  fontSize: "1.1rem",
                  width: "100%",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Touch Interface
              </Button>
            </Box>
          </Box>
        </Box>

        {/* モバイル版に最適化されたコンテンツ */}
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, textAlign: "center" }}>
            Mobile-Optimized Features
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                backgroundColor: "primary.light",
                color: "primary.contrastText",
                padding: 2,
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Swipe Navigation</Typography>
              <Typography variant="body2">Optimized for touch interactions</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "secondary.light",
                color: "secondary.contrastText",
                padding: 2,
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Lightweight Content</Typography>
              <Typography variant="body2">Reduced data usage and fast loading</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "info.light",
                color: "info.contrastText",
                padding: 2,
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Thumb-Friendly UI</Typography>
              <Typography variant="body2">Designed for one-handed usage</Typography>
            </Box>
          </Box>
        </Box>

        <ProductGrid />
        <DataDisplay />

        {/* デバイス情報を表示 */}
        <Box
          sx={{
            p: 2,
            backgroundColor: "warning.light",
            color: "warning.contrastText",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Middleware-Hybrid: Mobile Version (Static Generated)</Typography>
          <Typography variant="body1">
            This page was statically generated and served via Middleware rewrite based on User-Agent
            detection
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
