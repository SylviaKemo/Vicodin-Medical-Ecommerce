import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();


  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Contact Us", path: "/contact" },
    { label: "Cart", path: "/cart" },
  ];

  return (
    <div style={{position: "sticky", top: 0, zIndex: 1000,backgroundColor:"#fff"}}>
      <div className="container">
        <div className="navbar__1">
          <div>
            <img
              src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/logo.png"
              alt="logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search here..." />
            <SearchOutlinedIcon />
          </div>
          <div className="navbar__1_cart">
            <IconButton color="inherit" onClick={() => navigate("/cart")}>
              {/* <ShoppingCartIcon /> */}
              <ShoppingCartOutlinedIcon />
              {cart.length > 0 && (
                <span style={{ marginLeft: 5 }}>{cart.length}</span>
              )}
            </IconButton>
          <div>
            <span>YOUR CART</span>
            <span>Ksh 488</span>
          </div>
          </div>
        </div>
      </div>
      <div>
        <AppBar position="static" sx={{ backgroundColor: "#0A9A73" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
              {navItems.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    
                  }}
                >
                  {label}
                </Link>
              ))}
            </Box>

            {/* Mobile Menu Icon (Visible on Small Screens) */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
          <List>
            {navItems.map(({ label, path }) => (
              <ListItem key={label} onClick={handleDrawerToggle}>
                <Link
                  to={path}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                    padding: "8px 16px",
                    display: "block",
                  }}
                >
                  <ListItemText primary={label} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
