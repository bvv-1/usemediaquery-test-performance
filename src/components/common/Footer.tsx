"use client";

import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Link,
  Typography,
} from "@mui/material";
import type React from "react";

interface FooterSection {
  title: string;
  links: string[];
}

const footerData: FooterSection[] = [
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "News"],
  },
  {
    title: "Products",
    links: ["All Products", "New Arrivals", "Best Sellers", "Sale"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "FAQs", "Returns"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  },
];

export const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "grey.900", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        {/* Desktop: 4 columns */}
        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between" }}>
          {footerData.map((section) => (
            <Box key={section.title} sx={{ flex: 1, mx: 2 }}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {section.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    color="inherit"
                    underline="hover"
                    sx={{ opacity: 0.8 }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Mobile: Accordion */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {footerData.map((section) => (
            <Accordion key={section.title} sx={{ bgcolor: "grey.800", color: "white" }}>
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "white" }} />}
                aria-controls={`panel${section.title}-content`}
                id={`panel${section.title}-header`}
              >
                <Typography variant="h6">{section.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {section.links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ opacity: 0.8 }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Copyright */}
        <Box sx={{ borderTop: 1, borderColor: "grey.700", mt: 4, pt: 4, textAlign: "center" }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © 2024 useMediaQuery Test. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}; 