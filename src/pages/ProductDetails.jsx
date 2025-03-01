import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  Grid,
} from "@mui/material";
import products from "../data/product";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Container>
        <Typography variant="h5" color="error" sx={{ mt: 5 }}>
          Product not found!
        </Typography>
      </Container>
    );
  }

  return (
    <div>
      
      <Container>
        <Card sx={{ maxWidth: 900, mx: "auto", mt: 5, boxShadow: 3, p: 3 }}>
          <Grid container spacing={3} alignItems="center">
            {/* Left Column: Full Image */}
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={product.img}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Grid>

            {/* Right Column: Product Details */}
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                  {product.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#0A9A73", fontWeight: "bold" }}
                >
                  Price: ksh {product.price}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 2, color: "gray", lineHeight: 1.6 }}
                >
                  {product.description}
                </Typography>

                {/* Buttons */}
                <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0A9A73",
                      fontWeight: "600",
                      px: 3,
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ fontWeight: "600", px: 3 }}
                    onClick={() => navigate("/")}
                  >
                    Back to Shop
                  </Button>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
};

export default ProductDetails;
