
import { useCart } from "../context/CartContext";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {
  const { cart, setCart, removeFromCart } = useCart();

  // Function to update quantity
  const updateQuantity = (id, type) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
           Cart
         </Typography>
       </Box>
       <Container sx={{ mt: 4 }} className="card">
         {cart.length === 0 ? (
           <Typography variant="h6">Your cart is empty.</Typography>
         ) : (
           <>
             {cart.map((item) => (
               <Card
                 key={item.id}
                 sx={{
                   display: "flex",
                   gap: 3,
                   alignItems: "center",
                   mb: 2,
                   p: 2,
                   boxShadow: 3,
                 }}
               >
                 {/* Product Image (Left) */}
                 <CardMedia
                   component="img"
                   sx={{
                     width: 100,
                     height: 100,
                     objectFit: "cover",
                     borderRadius: 2,
                     mr: 2,
                   }}
                   image={item.img}
                   alt={item.name}
                 />

                 {/* Product Details (Right) */}
                 <CardContent className="card-content">
                   <Typography variant="h6" style={{ alignSelf: "end" }}>
                     {item.name}
                   </Typography>
                   <Typography
                     color="text.secondary"
                     style={{ alignSelf: "end" }}
                   >
                     ksh{item.price}
                   </Typography>

                   {/* Quantity Controls */}
                   <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                     <Button
                       variant="contained"
                       style={{ backgroundColor: "#0A9A73" }}
                       size="small"
                       onClick={() => updateQuantity(item.id, "decrease")}
                       sx={{ minWidth: 32 }}
                     >
                       -
                     </Button>
                     <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                     <Button
                       variant="contained"
                       style={{ backgroundColor: "#0A9A73" }}
                       size="small"
                       onClick={() => updateQuantity(item.id, "increase")}
                       sx={{ minWidth: 32 }}
                     >
                       +
                     </Button>
                   </Box>

                   {/* Total for this item */}
                   <Typography sx={{ mt: 1 }} style={{ alignSelf: "end" }}>
                     ksh{item.price * item.quantity}
                   </Typography>

                   {/* Remove Button */}
                   <Button
                     variant="contained"
                     style={{ backgroundColor: "#fd7e14" }}
                     color="error"
                     onClick={() => removeFromCart(item.id)}
                     sx={{ mt: 1 }}
                   >
                     <ClearIcon />
                   </Button>
                 </CardContent>
               </Card>
             ))}

             {/* Grand Total */}
             <Typography
               variant="h5"
               sx={{
                 mt: 3,
                 textAlign: "right",
                 fontWeight: "bold",
                 color: "#0A9A73", // Highlighting with a green shade
                 backgroundColor: "#f5f5f5", // Light background
                 padding: "10px 20px",
                 borderRadius: "8px",
                 display: "inline-block", // Keeps it compact
                 boxShadow: 1, // Slight elevation
               }}
             >
               Total: ksh{totalPrice.toFixed(2)}
             </Typography>
           </>
         )}
       </Container>
     </div>
   );
};

export default Cart;
