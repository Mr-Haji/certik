import { Search as SearchIcon, LanguageOutlined, ArrowDropDown } from '@mui/icons-material';
import Logo from "../../../public/assets/Logo.svg";
import ResponseIcon from "../../../public/assets/ResponseIcon.svg";
import React from "react";
import { AppBar, Toolbar, Grid, Box, Button } from "@mui/material";
import ProductsDropdown from '../ProductsDropdown';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate=useNavigate()
    return (
        <AppBar position="static" sx={{ bgcolor: "#171921" }}>
            <Toolbar>
                <Grid container alignItems="center" spacing={2} sx={{ width: "100%" }}>
                    {/* Logo and Dropdowns */}
                    <Grid item xs={6} sm={4} md={4} sp container alignItems="center">
                        <img onClick={() => navigate('/')} src={Logo} alt="Logo" style={{ width: "150px", marginRight: "10px" }} />
                        {/* Products Dropdown */}
                        <ProductsDropdown ProductName={"Products"} />
                        <ProductsDropdown ProductName={"Company"} />
                    </Grid>

                    {/* Search Bar */}
                    <Grid item xs={12} sm={4} md={4}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                bgcolor: "#45474d",
                                borderRadius: "10px",
                                px: 2,
                                height: "40px",
                                width: { xs: "100%", md: "80%" },
                                mx: "auto",
                            }}
                        >
                            <SearchIcon sx={{ fontSize: "24px", color: "white" }} />
                            <Box
                                component="input"
                                placeholder="Search Project"
                                sx={{
                                    flex: 1,
                                    background: "none",
                                    border: "none",
                                    outline: "none",
                                    color: "white",
                                    fontSize: "16px",
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Actions */}
                    <Grid item xs={6} sm={4} md={4} container alignItems="center" justifyContent="flex-end">
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <LanguageOutlined sx={{ fontSize: "24px", color: "white" }} />
                            <img src={ResponseIcon} alt="Response Icon" style={{ width: "24px" }} />
                        </Box>
                        <Box sx={{ ml: 2, display: { xs: "none", sm: "block" } }}>
                            <Button sx={{ color: "white" }}>Log In</Button>
                            <Button sx={{ color: "white" }}>Sign Up</Button>
                        </Box>
                        <Button
                            sx={{
                                ml: 2,
                                backgroundColor: "#e5453d",
                                color: "white",
                                padding: "8px 24px",
                                fontWeight: "bold",
                                borderRadius: "10px",
                                textTransform: "none",
                                "&:hover": { backgroundColor: "#d43c35" },
                            }}
                        >
                            Request a Demo
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
