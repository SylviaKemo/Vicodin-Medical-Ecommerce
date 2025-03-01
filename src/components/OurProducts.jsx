import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/product";

const OurProducts = () => {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Box sx={{ py: 6, textAlign: "center", mt: 9 }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "1.8rem", sm: "2rem" },
            }}
          >
            Explore Our Products
          </Typography>

          <Grid container spacing={4} justifyContent="center" mt={6}>
            {featuredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: product.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="ourProducts-card"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: 400,
                      // height: "100%",
                      boxShadow: 2,
                      padding: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: { xs: 200, sm: 250, md: 300 },
                        objectFit: "cover",
                      }}
                      image={product.img}
                      alt={product.name}
                    />
                    <CardContent
                      sx={{
                        textAlign: "center",
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        px: { xs: 1, sm: 2 },
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        style={{ color: "#0A9A73", fontWeight: "bold" }}
                        sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                      >
                        Ksh {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Button to View More Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box sx={{ mt: 10 }}>
              <Typography
                component="button"
                sx={{
                  backgroundColor: "#0A9A73",
                  color: "white",
                  fontWeight: "bold",
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  borderRadius: 2,
                  border: "none",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#087856",
                  },
                }}
                onClick={() => navigate("/shop")}
              >
                View More Products
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default OurProducts;
