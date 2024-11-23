// import { Grid, Stack } from '@mui/material';
// import React from 'react';
// import Logo from "../../assets/Logo.svg";

// const Footer = () => {
//     return (


//         <Stack sx={{ flexDirection: 'row', bgcolor: '#171921', width: '100%', justifyContent: 'space-around', py: 2, color: 'white' }}>
//             <Stack sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
//                 <Stack>
//                     <img src={Logo} alt="Logo" style={{ width: '150px' }} />
//                 </Stack>
//                 <Stack><p>© 2024 by CertiK. All Rights Reserved.</p></Stack>
//             </Stack>
//             <Stack>   <h3 style={{ marginBottom: '10px', color: 'white' }}>Products & Technology</h3>
//                 <ul style={{ listStyleType: 'none', padding: 0, color: "#87878c" }}>
//                     <li style={{ marginBottom: "8px" }}>Smart Contract Audit</li>
//                     <li style={{ marginBottom: "8px" }}>Skynet</li>
//                     <li style={{ marginBottom: "8px" }}>Security Score</li>
//                     <li style={{ marginBottom: "8px" }}>   KYC</li>
//                     <li style={{ marginBottom: "8px" }}>   Penetration Testing</li>
//                     <li style={{ marginBottom: "8px" }}>   Bug Bounty</li>
//                     <li style={{ marginBottom: "8px" }}>   Formal Verification</li>
//                     <li style={{ marginBottom: "8px" }}>   Advisory Services</li>
//                     <li style={{ marginBottom: "8px" }}>   SkyHarbor</li>
//                     <li style={{ marginBottom: "8px" }}>   SkyInsights</li>
//                 </ul></Stack>
//             <Stack>
//                 <h3 style={{ marginBottom: '10px', color: 'white' }}>Company</h3>
//                 <ul style={{ listStyleType: 'none', padding: 0, color: "#87878c" }}>
//                     <li style={{ marginBottom: "8px" }}>About</li>
//                     <li style={{ marginBottom: "8px" }}>Ventures</li>
//                     <li style={{ marginBottom: "8px" }}>Blog</li>
//                     <li style={{ marginBottom: "8px" }}>Careers</li>
//                     <li style={{ marginBottom: "8px" }}> Disclaimer</li>
//                     <li style={{ marginBottom: "8px" }}>Privacy Policy</li>
//                     <li style={{ marginBottom: "8px" }}>Cookie Policy</li>
//                     <li style={{ marginBottom: "8px" }}>Terms and Conditions</li>
//                     <li style={{ marginBottom: "8px" }}>Trust and Security</li>
//                 </ul>
//             </Stack>
//             <Stack>   <h3 style={{ marginBottom: '10px', color: 'white' }}>Social Media</h3>
//                 <ul style={{ listStyleType: 'none', padding: 0, color: "#87878c" }}>
//                     <li style={{ marginBottom: "8px" }}>Social Media</li>
//                     <li style={{ marginBottom: "8px" }}>TwitterCertiK</li>
//                     <li style={{ marginBottom: "8px" }}>TwitterSecurity Leaderboard</li>
//                     <li style={{ marginBottom: "8px" }}>TwitterCertiK Alert</li>
//                     <li style={{ marginBottom: "8px" }}>TelegramTelegram</li>
//                     <li style={{ marginBottom: "8px" }}>YoutubeYoutube</li>
//                     <li style={{ marginBottom: "8px" }}>MediumMedium</li>
//                     <li style={{ marginBottom: "8px" }}>LinkedinLinkedin</li>
//                     <li style={{ marginBottom: "8px" }}>WeChatWechat</li>
//                     <li style={{ marginBottom: "8px" }}>DiscordDiscord</li>
//                 </ul></Stack>
//         </Stack>





















//     );
// };

// export default Footer;


import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from "../../assets/Logo.svg";

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
