import { Box, Grid, Container } from "@mui/material";

const Discounts = () => {
  return (
    <Box sx={{ py: 6, mt: 5 }}>
      <Container maxWidth={false} sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {[
            "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/23.jpg",
            "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/22.jpg",
            "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/21.jpg",
          ].map((src, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  height: { xs: "280px", md: "350px" }, // Bigger images
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`Discount ${index + 1}`}
                  sx={{
                    width: "100%",
                    
                    objectFit: "cover",
                    transition: "transform 1s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)", // Zoom-in effect
                    },
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Discounts;
