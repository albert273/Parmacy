import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ position: "relative", top: "0" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
          <Toolbar variant="dense">
            <Link to="/">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Typography
                  sx={{
                    color: "#043caa",
                    fontWeight: "bolder",
                    fontSize: "1.5rem",
                  }}
                >
                  PharmaPro
                </Typography>
              </IconButton>
            </Link>
            <Box flexGrow={1}></Box>
            <Box>
              <Link to="/register">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#043caa", marginRight: "10px" }}
                >
                  Sign in
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outlined" sx={{ color: "#043caa" }}>
                  login
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
