"use client";

import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import type React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: "$29.99",
    description: "High-quality product with excellent features",
    image: "/placeholder1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$39.99",
    description: "Premium product for professional use",
    image: "/placeholder2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$49.99",
    description: "Advanced product with cutting-edge technology",
    image: "/placeholder3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$59.99",
    description: "Innovative solution for modern needs",
    image: "/placeholder4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$69.99",
    description: "Professional-grade product for experts",
    image: "/placeholder5.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: "$79.99",
    description: "Ultimate product with premium features",
    image: "/placeholder6.jpg",
  },
];

export const ProductGrid: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
        Our Products
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign="center" paragraph sx={{ mb: 6 }}>
        Discover our range of high-quality products
      </Typography>

      {/* Desktop: 3 columns, Mobile: 1 column */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {products.map((product) => (
          <Card key={product.id} sx={{ height: "100%" }}>
            <Box
              sx={{
                height: 200,
                backgroundColor: "grey.100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Product Image
              </Typography>
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                {product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {product.description}
              </Typography>
              <Button variant="contained" size="small" sx={{ mt: 2 }}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};
