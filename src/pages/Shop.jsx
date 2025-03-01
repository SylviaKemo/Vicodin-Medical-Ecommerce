import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Pagination,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Modal
} from "@mui/material";
import products from "../data/product";
import "../styles/shop.css";

import { Snackbar, Alert } from "@mui/material";

const Shop = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // const navigate = useNavigate();
  const { addToCart } = useCart();

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Modal state
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Open modal with product details
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* Shop Header */}
      <Box
        sx={{
          width: "100%",
          height: "400px",
          backgroundImage: `url('https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/14.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "30px",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          },
        }}
      >
        <Typography variant="h3" sx={{ position: "relative", zIndex: 2 }}>
          Shop
        </Typography>
      </Box>

      <Container className="shop-container">
        <Grid container spacing={3} sx={{ mt: 3, width: "100%" }}>
          {/* Categories Sidebar */}
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            sx={{
              position: "sticky",
              top: 20,
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              Categories
            </Typography>
            <List>
              {categories.map((category) => (
                <ListItem
                  key={category}
                  button
                  onClick={() => handleCategoryClick(category)}
                  sx={{
                    backgroundColor:
                      selectedCategory === category ? "#fd7e14" : "transparent",
                    color: selectedCategory === category ? "white" : "black",
                    borderRadius: 1,
                    "&:hover": { backgroundColor: "#febf8a" },
                    marginBottom: 1,
                    cursor: "pointer",
                  }}
                >
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Product Grid */}
          <Grid item xs={12} sm={8} md={9}>
            <Grid container spacing={3}>
              {displayedProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      boxShadow: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={product.img}
                      alt={product.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography color="text.secondary">
                        Price: ksh{product.price}
                      </Typography>
                    </CardContent>

                    {/* Button Container */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        p: 2,
                        mt: "auto",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#0A9A73",
                          fontWeight: "600",
                        }}
                        sx={{ flex: 1, mr: 1 }}
                        onClick={() => {
                          addToCart(product);
                          setSnackbarMessage(
                            `${product.name} has been added to the cart!`
                          );
                          setSnackbarOpen(true);
                        }}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        sx={{ flex: 1 }}
                        onClick={() => handleOpenModal(product)}
                      >
                        View Product
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={() => setSnackbarOpen(false)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={() => setSnackbarOpen(false)}
                severity="success"
                sx={{ width: "100%" }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>

            {/* Pagination */}
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              className="pagination"
              color="primary"
              sx={{ mt: 3, display: "flex", justifyContent: "center" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Product Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="product-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
          }}
        >
          {selectedProduct && (
            <Grid container spacing={3} alignItems="center">
              {/* Left Column: Image */}
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={selectedProduct.img}
                  alt={selectedProduct.name}
                  sx={{ width: "100%", height: "100%", borderRadius: 2 }}
                />
              </Grid>

              {/* Right Column: Details */}
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                    {selectedProduct.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#0A9A73", fontWeight: "bold" }}
                  >
                    Price: Ksh {selectedProduct.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 2, color: "gray", lineHeight: 1.6 }}
                  >
                    {selectedProduct.description}
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
                      onClick={handleCloseModal}
                    >
                      Close
                    </Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Shop;
