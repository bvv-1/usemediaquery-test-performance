"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type React from "react";

interface DataItem {
  id: number;
  name: string;
  category: string;
  price: string;
  status: string;
  sales: number;
}

const data: DataItem[] = [
  { id: 1, name: "Product A", category: "Electronics", price: "$299", status: "Active", sales: 156 },
  { id: 2, name: "Product B", category: "Clothing", price: "$89", status: "Active", sales: 234 },
  { id: 3, name: "Product C", category: "Books", price: "$19", status: "Inactive", sales: 78 },
  { id: 4, name: "Product D", category: "Electronics", price: "$599", status: "Active", sales: 345 },
  { id: 5, name: "Product E", category: "Home", price: "$129", status: "Active", sales: 189 },
];

export const DataDisplay: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
        Sales Data
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign="center" paragraph sx={{ mb: 6 }}>
        Product performance and sales information
      </Typography>

      {/* Desktop: Table format */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell align="right">{item.sales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Mobile: Card format */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {data.map((item) => (
            <Card key={item.id}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Category:
                  </Typography>
                  <Typography variant="body2">{item.category}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Price:
                  </Typography>
                  <Typography variant="body2">{item.price}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Status:
                  </Typography>
                  <Typography variant="body2">{item.status}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">
                    Sales:
                  </Typography>
                  <Typography variant="body2">{item.sales}</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
}; 