import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
  Container,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e7f5f1",
        color: "#000",
        py: 6,
        mt: 5,
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* About Us */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              We provide high-quality products at the best prices. Shop with us
              today and experience the best service.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 1, gap: 3 }}>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8, py: 0.5 }}
              >
                Home
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8, py: 0.5 }}
              >
                Shop
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8, py: 0.5 }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              Email: vicodin@yahoo.com
            </Typography>
            <Typography variant="body2" sx={{ mt:2, opacity: 0.8 }}>
              Phone: +254 700 123 456
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" sx={{ opacity: 0.8, mx: 0.5 }}>
                <Facebook />
              </IconButton>
              <IconButton color="inherit" sx={{ opacity: 0.8, mx: 0.5 }}>
                <Twitter />
              </IconButton>
              <IconButton color="inherit" sx={{ opacity: 0.8, mx: 0.5 }}>
                <Instagram />
              </IconButton>
              <IconButton color="inherit" sx={{ opacity: 0.8, mx: 0.5 }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider for Separation */}
        <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.2)" }} />

        {/* Copyright */}
        <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} sylviakemo. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
