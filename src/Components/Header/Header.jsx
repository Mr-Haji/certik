

// // import { AppBar, Stack } from '@mui/material'
// // import React from 'react'

// // const Header = () => {
// //     return (
// //         <Stack sx={{
// //             width: "100vw",
// //             bgcolor: 'black',
// //             // height: '10px'
// //             color: "white"
// //         }}>
// //             <Stack>
// //                 Logo+3 Drop Down
// //             </Stack>
// //             <Stack>
// //                 2 icons +Login Sign Up + request Demo Btn
// //             </Stack>
// //         </Stack>
// //     )
// // }

// // export default Header

// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
// import Logo from "../../assets/Logo.svg"
// import ResponseIcon from "../../assets/ResponseIcon.svg"
// import { ArrowDropDown, ArrowDropUp, LanguageOutlined, PinDrop } from '@mui/icons-material';

// // const Search = styled('div')(({ theme }) => ({
// //     position: 'relative',
// //     borderRadius: theme.shape.borderRadius,
// //     backgroundColor: alpha(theme.palette.common.white, 0.15),
// //     '&:hover': {
// //         backgroundColor: alpha(theme.palette.common.white, 0.25),
// //     },
// //     marginLeft: 0,
// //     width: '100%',
// //     [theme.breakpoints.up('sm')]: {
// //         marginLeft: theme.spacing(1),
// //         width: 'auto',
// //     },
// // }));

// // const SearchIconWrapper = styled('div')(({ theme }) => ({
// //     padding: theme.spacing(0, 2),
// //     height: '100%',
// //     position: 'absolute',
// //     pointerEvents: 'none',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// // }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     width: '100%',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         [theme.breakpoints.up('sm')]: {
//             width: '12ch',
//             '&:focus': {
//                 width: '20ch',
//             },
//         },
//     },
// }));

// export default function Header() {
//     return (
//         <Stack sx={{ bgcolor: 'black' }}>
//             <AppBar sx={{
//                 bgcolor: 'black'
//             }} position="static">
//                 <Toolbar>
//                     <Stack sx={{
//                         flexDirection: 'row',
//                         justifyContent: 'space-around',
//                         width: '100vw'

//                     }}>

//                         {/* ============================================================= */}
//                         <Stack sx={{
//                             flexDirection: 'row',
//                             gap: 2
//                         }}>
//                             <Stack sx={{ justifyContent: 'center' }}>

//                                 <img src={Logo} alt='Logo' style={{ width: '200px' }} />
//                             </Stack>

//                             <Stack sx={{ flexDirection: 'row', gap: 1, alignItems: 'center', }}>
//                                 <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Products <ArrowDropDown />
//                                     {/* <ArrowDropUp />  */}
//                                 </Typography>
//                                 <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Company <ArrowDropDown />
//                                     {/* <ArrowDropUp />  */}
//                                 </Typography>
//                             </Stack>
//                         </Stack>


//                         <Stack sx={{
//                             bgcolor: "#45474d",
//                             width: '350px',
//                             flexDirection: 'row',
//                             alignItems: 'center',
//                             borderRadius: '10px'

//                         }}>
//                             <SearchIcon sx={{ fontSize: "35px" }} />
//                             <TextField
//                                 sx={{ width: '400px', color: 'white', }}
//                                 placeholder="Search Project"
//                             />


//                         </Stack>

//                         {/* ================================================ */}
//                         <Stack sx={{
//                             flexDirection: 'row',
//                             gap: 2

//                         }}>
//                             <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
//                                 <LanguageOutlined sx={{ fontSize: '30px' }} />
//                                 <img src={ResponseIcon} alt='Response_24/7_Icon' style={{ width: '25px' }} />
//                             </Stack>
//                             <Stack sx={{
//                                 flexDirection: 'row',
//                                 alignItems: 'centre'
//                             }}>
//                                 <Button sx={{
//                                     color: 'white',
//                                     bgcolor: 'transparent',
//                                     fontSize: "18px"

//                                 }}>Log In</Button>
//                                 <Button sx={{
//                                     color: 'white',
//                                     bgcolor: 'transparent',
//                                     fontSize: "18px"

//                                 }}>Sign Up</Button>
//                             </Stack>
//                             <Stack sx={{
//                                 flexDirection: 'row'
//                             }}>
//                                 <Button sx={{
//                                     bgcolor: '#e5453d',
//                                     color: 'white',
//                                     px: 3,
//                                     fontWeight: 'bold',
//                                     borderRadius: '10px',
//                                     height: '80%',
//                                     margin: 'auto'


//                                 }}>request a demo</Button>
//                             </Stack>
//                         </Stack>
//                     </Stack>

//                     {/* =========================================== */}











//                 </Toolbar>
//             </AppBar>
//         </Stack>
//     );
// }

import React from 'react';
import { styled } from '@mui/material/styles';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Grid,
    Button,
    TextField
} from '@mui/material';
import { Search as SearchIcon, LanguageOutlined, ArrowDropDown } from '@mui/icons-material';
import Logo from "../../assets/Logo.svg";
import ResponseIcon from "../../assets/ResponseIcon.svg";

const StyledInputBase = styled(TextField)(({ theme }) => ({
    width: '100%',
    backgroundColor: '#45474d',
    borderRadius: '10px',
    '& .MuiInputBase-root': {
        padding: theme.spacing(1),
    },
    '& input': {
        color: 'white',
    }
}));

export default function Header() {
    return (
        <AppBar position="static" sx={{ bgcolor: 'black' }}>
            <Toolbar>
                <Grid container alignItems="center"  spacing={2} sx={{ width: '100%' }}>
                    {/* Logo and Dropdowns */}
                    <Grid item xs={12} sm={4} md={4} container alignItems="center">
                        <img src={Logo} alt="Logo" style={{ width: '150px', marginRight: '10px' }} />
                        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}>
                            Products <ArrowDropDown />
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}>
                            Company <ArrowDropDown />
                        </Typography>
                    </Grid>

                    {/* Search Bar */}
                    <Grid item xs={12} sm={4} md={4}>
                    <Box
    sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        bgcolor: '#45474d',
        borderRadius: '10px',
        px: 2,
        width: '100%',
        maxWidth: '600px',
        height: '40px', // Ensures consistent height
    }}
>
    <SearchIcon sx={{ fontSize: '30px', color: 'white' }} />
    <StyledInputBase
 placeholder="Search Project"
 sx={{
     flex: 1,
     color: 'white',
     fontSize: '16px',
     '& .MuiInputBase-input': {
         padding: 0,
         height: '100%',
     },
     '&:focus': {
         outline: 'none', // Removes the default focus outline
     },
 }}
 inputProps={{
     style: {
         outline: 'none', // Ensures no outline on focus
     },
 }}
    />
</Box>

                        
                        
                        {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,  }}>
                            <SearchIcon sx={{ fontSize: '30px', color: 'white' ,}} />
                            <StyledInputBase sx={{height:"40px"}}
                                placeholder="Search Project"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                        </Box> */}
                    </Grid>

                    {/* Actions */}
                    <Grid item xs={12} sm={4} md={4} container alignItems="center" justifyContent="flex-end" spacing={1}>
                        <Grid item>
                            <LanguageOutlined sx={{ fontSize: '30px', color: 'white' }} />
                            <img src={ResponseIcon} alt="Response Icon" style={{ width: '30px' }} />
                        </Grid>
                        <Grid item>
                            <Button sx={{ color: 'white' }}>Log In</Button>
                            <Button sx={{ color: 'white' }}>Sign Up</Button>
                        </Grid>
                        <Grid item>
                            <Button
                                sx={{
                                    display: 'inline',
                                    bgcolor: '#e5453d',
                                    color: 'white',
                                    px: 3,
                                    fontWeight: 'bold',
                                    borderRadius: '10px',
                                    height: '40px',
                                    textTransform: 'none',
                                }}
                            >
                                Request a Demo
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
