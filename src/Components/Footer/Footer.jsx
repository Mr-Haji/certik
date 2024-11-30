import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from "../../assets/pics/Logo.svg";

const Footer = () => {
    const products = [
        "Smart Contract Audit",
        "Skynet",
        "Security Score",
        "KYC",
        "Penetration Testing",
        "Bug Bounty",
        "Formal Verification",
        "Advisory Services",
        "SkyHarbor",
        "SkyInsights",
    ];

    const companyLinks = [
        "About",
        "Ventures",
        "Blog",
        "Careers",
        "Disclaimer",
        "Privacy Policy",
        "Cookie Policy",
        "Terms and Conditions",
        "Trust and Security",
    ];

    const socialLinks = [
        "TwitterCertiK",
        "TwitterSecurity Leaderboard",
        "TwitterCertiK Alert",
        "Telegram",
        "YouTube",
        "Medium",
        "LinkedIn",
        "WeChat",
        "Discord",
    ];

    return (
        <Stack sx={{ bgcolor: '#171921', color: 'white', py: 4, px: 2 }}>
            <Grid container spacing={4} justifyContent="space-around">
                {/* Logo and Copyright */}
                <Grid item xs={12} md={3} textAlign="center">
                    <img src={Logo} alt="Logo" style={{ width: '150px' }} />
                    <Typography variant="body2" sx={{ mt: 2, color: '#87878c' }}>
                        © 2024 by CertiK. All Rights Reserved.
                    </Typography>
                </Grid>

                {/* Products & Technology */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
                        Products & Technology
                    </Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, color: '#87878c' }}>
                        {products.map((product, index) => (
                            <li key={index} style={{ marginBottom: '8px' }}>
                                {product}
                            </li>
                        ))}
                    </ul>
                </Grid>

                {/* Company */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
                        Company
                    </Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, color: '#87878c' }}>
                        {companyLinks.map((link, index) => (
                            <li key={index} style={{ marginBottom: '8px' }}>
                                {link}
                            </li>
                        ))}
                    </ul>
                </Grid>

                {/* Social Media */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
                        Social Media
                    </Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, color: '#87878c' }}>
                        {socialLinks.map((social, index) => (
                            <li key={index} style={{ marginBottom: '8px' }}>
                                {social}
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Footer;
