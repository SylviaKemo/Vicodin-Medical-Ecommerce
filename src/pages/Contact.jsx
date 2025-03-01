import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "300px",
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
          Contact Us
        </Typography>
      </Box>
      <Container
        maxWidth="sm"
        sx={{
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#0A9A73", fontWeight: "bold" }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
