"use client";

import { Box } from "@mui/material";
import { DataDisplay } from "@/components/common/DataDisplay";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { Hero } from "@/components/common/Hero";
import { ProductGrid } from "@/components/common/ProductGrid";

export default function Home() {
  return (
    <>
      <Header />
      <Box component="main">
        <Hero />
        <ProductGrid />
        <DataDisplay />
      </Box>
      <Footer />
    </>
  );
}
