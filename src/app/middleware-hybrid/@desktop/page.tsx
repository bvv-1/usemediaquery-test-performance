import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataDisplay } from "@/components/common/DataDisplay";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { ProductGrid } from "@/components/common/ProductGrid";

export default function MiddlewareHybridDesktopPage() {
  return (
    <>
      <Header />
      <Box component="main">
        {/* デスクトップ版専用のヒーローセクション */}
        <Box
          sx={{
            minHeight: "70vh",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            position: "relative",
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
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                fontWeight: "bold",
                marginBottom: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Desktop Optimized Experience
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                marginBottom: 4,
                maxWidth: "800px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              Full-featured desktop interface with rich interactions and comprehensive data
              visualization
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography variant="h6" component="div">
                  Advanced Analytics
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography variant="h6" component="div">
                  Multi-Panel View
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography variant="h6" component="div">
                  Rich Interactions
                </Typography>
              </Box>
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
          <Typography variant="h6">
            Middleware-Hybrid: Desktop Version (Static Generated)
          </Typography>
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
