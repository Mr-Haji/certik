// import React from 'react';
// import { styled } from '@mui/material/styles';
// import {
//     AppBar,
//     Box,
//     Toolbar,
//     Typography,
//     IconButton,
//     Grid,
//     Button,
//     TextField
// } from '@mui/material';
// import { Search as SearchIcon, LanguageOutlined, ArrowDropDown } from '@mui/icons-material';
// import Logo from "../../assets/Logo.svg";
// import ResponseIcon from "../../assets/ResponseIcon.svg";

// const StyledInputBase = styled(TextField)(({ theme }) => ({
//     width: '100%',
//     backgroundColor: '#45474d',
//     borderRadius: '10px',
//     '& .MuiInputBase-root': {
//         padding: theme.spacing(1),
//     },
//     '& input': {
//         color: 'white',
//     }
// }));

// export default function Header() {
//     return (
//         <AppBar position="static" sx={{ bgcolor: 'black' }}>
//             <Toolbar>
//                 <Grid container alignItems="center" spacing={2} sx={{ width: '100%' }}>
//                     {/* Logo and Dropdowns */}
//                     <Grid item xs={6} sm={4} md={4} container alignItems="center">
//                         <img src={Logo} alt="Logo" style={{ width: '150px', marginRight: '10px' }} />
//                         <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}>
//                             Products <ArrowDropDown />
//                         </Typography>
//                         <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}>
//                             Company <ArrowDropDown />
//                         </Typography>
//                     </Grid>

//                     {/* Search Bar */}
//                     <Grid item sx={{ display: { xs: "none", md: 'block' } }} sm={4} md={4}>
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: 1,
//                                 bgcolor: '#45474d',
//                                 borderRadius: '10px',
//                                 px: 2,
//                                 width: '100%',
//                                 maxWidth: '600px',
//                                 height: '40px', // Ensures consistent height
//                             }}
//                         >
//                             <SearchIcon sx={{ fontSize: '30px', color: 'white' }} />
//                             <StyledInputBase
//                                 placeholder="Search Project"
//                                 sx={{
//                                     flex: 1,
//                                     color: 'white',
//                                     fontSize: '16px',
//                                     '& .MuiInputBase-input': {
//                                         padding: 0,
//                                         height: '100%',
//                                     },
//                                     '&:focus': {
//                                         outline: 'none', // Removes the default focus outline
//                                     },
//                                 }}
//                                 inputProps={{
//                                     style: {
//                                         outline: 'none', // Ensures no outline on focus
//                                     },
//                                 }}
//                             />
//                         </Box>



//                         {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,  }}>
//                             <SearchIcon sx={{ fontSize: '30px', color: 'white' ,}} />
//                             <StyledInputBase sx={{height:"40px"}}
//                                 placeholder="Search Project"
//                                 InputProps={{
//                                     disableUnderline: true,
//                                 }}
//                             />
//                         </Box> */}
//                     </Grid>

//                     {/* Actions */}
//                     <Grid item xs={5} sm={4} md={4} container alignItems="center" justifyContent="flex-end" spacing={1}>
//                         <Grid sx={{ display: { xs: "none",md:'block' } }} item>
//                             <LanguageOutlined sx={{ fontSize: '30px', color: 'white' }} />
//                             <img src={ResponseIcon} alt="Response Icon" style={{ width: '30px' }} />
//                         </Grid>
//                         <Grid sx={{ display: { xs: "none",md:'block' } }} item>
//                             <Button sx={{ color: 'white' }}>Log In</Button>
//                             <Button sx={{ color: 'white' }}>Sign Up</Button>
//                         </Grid>
//                         <Grid item>
//                             <Button
//                                 sx={{
//                                     display: 'inline',
//                                     bgcolor: '#e5453d',
//                                     color: 'white',
//                                     px: 3,
//                                     my: 1,

//                                     fontWeight: 'bold',
//                                     borderRadius: '10px',
//                                     // height: '40px',
//                                     textTransform: 'none',
//                                 }}
//                             >
//                                 Request a Demo
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Toolbar>
//         </AppBar>
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

// Styled Components
const StyledInputBase = styled(TextField)(({ theme }) => ({
    width: '100%',
    backgroundColor: '#45474d',
    borderRadius: '10px',
    '& .MuiInputBase-root': {
        padding: theme.spacing(1),
    },
    '& input': {
        color: 'white',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#e5453d',
    color: 'white',
    padding: theme.spacing(1, 3),
    fontWeight: 'bold',
    borderRadius: '10px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#d43c35',
    },
}));

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: 'black' }}>
            <Toolbar>
                <Grid container alignItems="center" spacing={2} sx={{ width: '100%' }}>
                    {/* Logo and Dropdowns */}
                    <Grid item xs={6} sm={4} md={4} container alignItems="center">
                        <img src={Logo} alt="Logo" style={{ width: '150px', marginRight: '10px' }} />
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                display: { xs: 'none', sm: 'block' },
                            }}
                        >
                            Products <ArrowDropDown />
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                display: { xs: 'none', sm: 'block' },
                                ml: 2,
                            }}
                        >
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
                                height: '40px',
                                width: { xs: '100%', md: '80%' },
                                mx: 'auto',
                            }}
                        >
                            <SearchIcon sx={{ fontSize: '24px', color: 'white' }} />
                            <StyledInputBase
                                placeholder="Search Project"
                                sx={{
                                    flex: 1,
                                    fontSize: '16px',
                                    '& .MuiInputBase-input': { padding: 0, height: '100%' },
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Box>
                    </Grid>

                    {/* Actions */}
                    <Grid item xs={6} sm={4} md={4} container alignItems="center" justifyContent="flex-end">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <LanguageOutlined sx={{ fontSize: '24px', color: 'white' }} />
                            <img src={ResponseIcon} alt="Response Icon" style={{ width: '24px' }} />
                        </Box>
                        <Box sx={{ ml: 2, display: { xs: 'none', sm: 'block' } }}>
                            <Button sx={{ color: 'white' }}>Log In</Button>
                            <Button sx={{ color: 'white' }}>Sign Up</Button>
                        </Box>
                        <StyledButton sx={{ ml: 2 }}>Request a Demo</StyledButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
