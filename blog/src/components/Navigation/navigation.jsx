import React, { useEffect, useContext, useState } from "react";
import { SeaContext } from "../Context";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navigation() {
  const { pageList, setPageList } = useContext(SeaContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    const getPageList = async () => {
      console.log("get pages list here");
      try {
        const response = await axios.get(`/pages/list`);

        console.log("Git list is", response);

        if (response.data.success) setPageList([...response.data.pages]);
      } catch (error) {
        console.log(error);
      }
    };

    getPageList();
  }, []);

  console.log("HELLO FROM NAVIGATION: ", pageList);

  /* Function to be removeed */
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /* END Function to be removeed */

  return (
    <AppBar position="static">
      <Container
        sx={{
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
          }}
          disableGutters
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pageList?.map((page) => (
                <MenuItem key={page._id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pageList?.map((page) => (
              <Link to={`/page/${page?._id}`} key={page._id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page?.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
