// import { Grid, Stack } from '@mui/material';
// import React from 'react';
// import Logo from "../../assets/Logo.svg";

// const Footer = () => {
//     return (
//         <Grid
//             container
//             alignItems="center"
//             spacing={2}
//             sx={{ width: '100%', bgcolor: '#171921', color: 'white', padding: 3 }}
//         >
//             {/* Section 1 */}
//             <Grid item sx={{ display: { xs: "none", md: 'block' } }} md={3}>

//                 <img src={Logo} alt="Logo" style={{ width: '150px', }} />

//             </Grid>

//             {/* Section 2 */}
//             <Grid item xs={6} md={3}>
//                 <h3 style={{ marginBottom: '10px' }}>Products & Technology</h3>
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
//                 </ul>
//             </Grid>
//             {/* Section 2 */}
//             <Grid item xs={6} md={3}>
//                 <h3 style={{ marginBottom: '10px' }}>Company</h3>
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
//             </Grid>
//             <Grid item xs={12} md={3}>
//                 <h3 style={{ marginBottom: '10px' }}>Social Media</h3>
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
//                 </ul>
//             </Grid>
//             {/* Section 3 */}
//             <Grid item xs={12} md={4}>
//                 <p>© 2024 by CertiK. All Rights Reserved.</p>
//             </Grid>
//         </Grid>
//     );
// };

// export default Footer;
import { Grid, Stack } from '@mui/material';
import React from 'react';
import Logo from "../../assets/Logo.svg";

const Footer = () => {
    return (


        <Stack sx={{ flexDirection: 'row', bgcolor: '#171921', width: '100vw', justifyContent: 'space-around', py: 2, color: 'white' }}>
            <Stack sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack>
                    <img src={Logo} alt="Logo" style={{ width: '150px' }} />
                </Stack>
                <Stack><p>© 2024 by CertiK. All Rights Reserved.</p></Stack>
            </Stack>
            <Stack>   <h3 style={{ marginBottom: '10px', color: 'white' }}>Products & Technology</h3>
                <ul style={{ listStyleType: 'none', padding: 0, color: "#87878c" }}>
                    <li style={{ marginBottom: "8px" }}>Smart Contract Audit</li>
                    <li style={{ marginBottom: "8px" }}>Skynet</li>
                    <li style={{ marginBottom: "8px" }}>Security Score</li>
                    <li style={{ marginBottom: "8px" }}>   KYC</li>
                    <li style={{ marginBottom: "8px" }}>   Penetration Testing</li>
                    <li style={{ marginBottom: "8px" }}>   Bug Bounty</li>
                    <li style={{ marginBottom: "8px" }}>   Formal Verification</li>
                    <li style={{ marginBottom: "8px" }}>   Advisory Services</li>
                    <li style={{ marginBottom: "8px" }}>   SkyHarbor</li>
                    <li style={{ marginBottom: "8px" }}>   SkyInsights</li>
                </ul></Stack>
            <Stack>
                <h3 style={{ marginBottom: '10px', color: 'white' }}>Company</h3>
                <ul style={{ listStyleType: 'none', padding: 0, color: "#87878c" }}>
                    <li style={{ marginBottom: "8px" }}>About</li>
                    <li style={{ marginBottom: "8px" }}>Ventures</li>
                    <li style={{ marginBottom: "8px" }}>Blog</li>
                    <li style={{ marginBottom: "8px" }}>Careers</li>
                    <li style={{ marginBottom: "8px" }}> Disclaimer</li>
                    <li style={{ marginBottom: "8px" }}>Privacy Policy</li>
                    <li style={{ marginBottom: "8px" }}>Cookie Policy</li>
                    <li style={{ marginBottom: "8px" }}>Terms and Conditions</li>
                    <li style={{ marginBottom: "8px" }}>Trust and Security</li>
                </ul>
            </Stack>
            <Stack>   <h3 style={{ marginBottom: '10px', color: 'white' }}>Social Media</h3>
                <ul style={{ listStyleType: 'none', padding: 0, color: "#87878c" }}>
                    <li style={{ marginBottom: "8px" }}>Social Media</li>
                    <li style={{ marginBottom: "8px" }}>TwitterCertiK</li>
                    <li style={{ marginBottom: "8px" }}>TwitterSecurity Leaderboard</li>
                    <li style={{ marginBottom: "8px" }}>TwitterCertiK Alert</li>
                    <li style={{ marginBottom: "8px" }}>TelegramTelegram</li>
                    <li style={{ marginBottom: "8px" }}>YoutubeYoutube</li>
                    <li style={{ marginBottom: "8px" }}>MediumMedium</li>
                    <li style={{ marginBottom: "8px" }}>LinkedinLinkedin</li>
                    <li style={{ marginBottom: "8px" }}>WeChatWechat</li>
                    <li style={{ marginBottom: "8px" }}>DiscordDiscord</li>
                </ul></Stack>
        </Stack>


























        // <Grid
        //     container
        //     alignItems="center"
        //     spacing={2}
        //     sx={{ width: '100%', bgcolor: '#171921', color: 'white', padding: 3 }}
        // >
        //     {/* Section 1
        //     <Grid item sx={{ display: { xs: "none", md: 'block' } }} md={3}>

        //         <img src={Logo} alt="Logo" style={{ width: '150px', }} />

        //     </Grid>

        //     {/* Section 2 */}
        //     <Grid item xs={6} md={3}>
        //         <h3 style={{ marginBottom: '10px' }}>Products & Technology</h3>
        //         <ul style={{ listStyleType: 'none', padding: 0, color: "#87878c" }}>
        //             <li style={{ marginBottom: "8px" }}>Smart Contract Audit</li>
        //             <li style={{ marginBottom: "8px" }}>Skynet</li>
        //             <li style={{ marginBottom: "8px" }}>Security Score</li>
        //             <li style={{ marginBottom: "8px" }}>   KYC</li>
        //             <li style={{ marginBottom: "8px" }}>   Penetration Testing</li>
        //             <li style={{ marginBottom: "8px" }}>   Bug Bounty</li>
        //             <li style={{ marginBottom: "8px" }}>   Formal Verification</li>
        //             <li style={{ marginBottom: "8px" }}>   Advisory Services</li>
        //             <li style={{ marginBottom: "8px" }}>   SkyHarbor</li>
        //             <li style={{ marginBottom: "8px" }}>   SkyInsights</li>
        //         </ul>
        //     </Grid> */}
        //     {/* Section 2 */}
        //     <Grid item xs={6} md={3}>
        //         <h3 style={{ marginBottom: '10px' }}>Company</h3>
        //         <ul style={{ listStyleType: 'none', padding: 0, color: "#87878c" }}>
        //             <li style={{ marginBottom: "8px" }}>About</li>
        //             <li style={{ marginBottom: "8px" }}>Ventures</li>
        //             <li style={{ marginBottom: "8px" }}>Blog</li>
        //             <li style={{ marginBottom: "8px" }}>Careers</li>
        //             <li style={{ marginBottom: "8px" }}> Disclaimer</li>
        //             <li style={{ marginBottom: "8px" }}>Privacy Policy</li>
        //             <li style={{ marginBottom: "8px" }}>Cookie Policy</li>
        //             <li style={{ marginBottom: "8px" }}>Terms and Conditions</li>
        //             <li style={{ marginBottom: "8px" }}>Trust and Security</li>
        //         </ul>
        //     </Grid>
        //     <Grid item xs={12} md={3}>
        //         <h3 style={{ marginBottom: '10px' }}>Social Media</h3>
        //         <ul style={{ listStyleType: 'none', padding: 0, color: "#87878c" }}>
        //             <li style={{ marginBottom: "8px" }}>Social Media</li>
        //             <li style={{ marginBottom: "8px" }}>TwitterCertiK</li>
        //             <li style={{ marginBottom: "8px" }}>TwitterSecurity Leaderboard</li>
        //             <li style={{ marginBottom: "8px" }}>TwitterCertiK Alert</li>
        //             <li style={{ marginBottom: "8px" }}>TelegramTelegram</li>
        //             <li style={{ marginBottom: "8px" }}>YoutubeYoutube</li>
        //             <li style={{ marginBottom: "8px" }}>MediumMedium</li>
        //             <li style={{ marginBottom: "8px" }}>LinkedinLinkedin</li>
        //             <li style={{ marginBottom: "8px" }}>WeChatWechat</li>
        //             <li style={{ marginBottom: "8px" }}>DiscordDiscord</li>
        //         </ul>
        //     </Grid>
        //     {/* Section 3 */}
        //     <Grid item xs={12} md={4}>
        //         <p>© 2024 by CertiK. All Rights Reserved.</p>
        //     </Grid>
        // </Grid>
    );
};

export default Footer;
