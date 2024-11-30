import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
// import HeaderPic from "../../public/assets/smartContractAudit.webp"
import SkynetScanCode from "../../public/assets/skynet-scan-code.svg"
import SkynetDetectRisk from "../../public/assets/skynet-detect-risk.svg"
import SkynetAccessData from "../../public/assets/skynet-access-data.svg"
import SkynetScreenshot from "../../public/assets/SkynetScreenshot.avif"
import ProductSkynetLeaderboardScreenshot from "../../public/assets/ProductSkynetLeaderboardScreenshot.avif"
import ProductSkynetSecurityDataTools from "../../public/assets/ProductSkynetSecurityDataTools.avif"

const Skynet = () => {
    return (
        <>
 <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
 <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>                    {/* Section 1 */}

                    <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                        <Grid container size={{ xs: 12, md: 6 }} >

                            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                                Skynet: Your Ultimate Web3 Security Analysis Platform
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                                Skynet provides a wealth of data-driven insights for Web3 projects and communities. End-to-end security tools combine with on-chain and off-chain data, resulting in an all-in-one Web3 security analysis platform.
                            </Typography>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Button
                                    fullWidth
                                    sx={{
                                        bgcolor: '#e5453d',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        px: 2,
                                        borderRadius: '4px',
                                        textTransform: 'none',
                                        '&:hover': { bgcolor: '#c43833' },
                                    }}
                                >
                                    Skynet For Web3 Projects
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Button
                                    fullWidth
                                    sx={{
                                        border: '1px solid #e5453d',
                                        color: '#e5453d',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        px: 2,
                                        borderRadius: '4px',
                                        textTransform: 'none',
                                        '&:hover': { bgcolor: '#000' },
                                    }}
                                >
                                    Skynet For Web3 Users
                                </Button>
                            </Grid>


                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={"assets/smartContractAudit.webp"} alt="Smart Contract Audit" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 2 */}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h3" fontWeight="bold">
                                    Comprehensive Web3 Security Analysis for Web3 Projects
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    Skynet’s Web3 security analysis tools actively monitor and visualize on-chain and off-chain data. The platform utilizes industry-leading technology developed by CertiK's expert security researchers.             </Typography>
                            </Grid>

                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }} size={12}>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center', }}>

                                <Grid size={12}>
                                    <img src={SkynetScanCode} alt='Skynet Scan Code' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Improve Your Security Score
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Skynet actively monitors on-chain and off-chain security parameters, identifying risks and providing timely alerts.

                                    </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={SkynetDetectRisk} alt='Skynet Detect Risk' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Build Trust
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Sign up to Skynet to demonstrate your commitment to the founding ideals of crypto: auditability and transparency.
                                    </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={SkynetAccessData} alt='Skynet Access Data' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Protect Your Brand             </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Take control of your platform’s security, keeping your finger on the pulse with Skynet’s social sentiment analysis tools.

                                    </Typography>
                                </Grid>




                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Section 3 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Web3’s Most Comprehensive Security Analysis Platform
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}><Button
                            fullWidth
                            sx={{
                                bgcolor: '#e5453d',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                px: 2,
                                borderRadius: '4px',
                                textTransform: 'none',
                                '&:hover': { bgcolor: '#c43833' },
                            }}
                        >
                            Activate Skynet Today
                        </Button></Grid>
                    </Grid>
                    {/* Section 4 */}
                    <Grid container size={12}>
                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>How to Conduct Web3 Security Analysis with Skynet                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    Skynet provides a website featuring non-downloadable software for providing security analysis for smart contracts and blockchain projects. Navigate the Web3 world with confidence, equipped with Skynet's rich, data-driven insights that let you unearth exciting new projects, execute due diligence with precision, and stay up-to-date with all recent happenings in the space.


                                    Dive deeper with the Security Score Leaderboard, which lists and ranks projects based on a wealth of on- and off-chain data. Evaluate and compare projects based on their Code Security, Fundamental Health, Operational Resilience, Community Trust, Market Stability, and Governance Strength.</Typography>
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={SkynetScreenshot} alt="Product Skynet Screenshot" style={{ width: '100%' }} />

                        </Grid>


                    </Grid >
                    {/* Section 5 */}
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={ProductSkynetLeaderboardScreenshot} alt="Product Skynet Leaderboard Screenshot" style={{ width: '100%' }} />

                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>


                            <Grid>
                                <Typography variant='h6'>
                                    CertiK’s suite of due diligence tools includes the Exchange Audit, Smart Money Wizard, and Skynet Alerts. Whether you're checking on-chain asset holdings of exchanges or staying updated with timely notifications of potential rugpulls, Skynet equips you with the tools you need.


                                    Learning how to use these tools is a continuous process that will ensure you stay at the front of the curve. Enhance your proficiency with Skynet 101, our educational resource center, packed with tutorials and guides that empower you to leverage the Skynet platform to its fullest potential.


                                    Navigate the Web3 world with trust and transparency. Choose Skynet for Community, your partner in advanced Web3 security analysis.
                                </Typography>
                            </Grid>
                        </Grid>



                    </Grid >
                    {/* Section 6*/}

                    <Grid size={12} container textAlign={'center'} >
                        <Grid size={12}>
                            <Typography variant='h3' fontWeight={"bold"}>Actionable Web3 Security Analysis Tools, Data, and Research
                            </ Typography>

                        </Grid>
                        <Grid container size={{ xs: 12, md: 10 }} m='auto'>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Button sx={{ bgcolor: 'red', color: 'white' }}>
                                    Security & Data Tool
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Button sx={{ bgcolor: 'red', color: 'white' }}>
                                    Curated Leaderboards
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Button sx={{ bgcolor: 'red', color: 'white' }}>
                                    Expert Insights
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Section 7 */}
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={ProductSkynetSecurityDataTools} alt="Product Skynet Security Data Tools" style={{ width: '100%' }} />

                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>


                            <Grid>
                                <Typography variant='h4' fontWeight={"bold"}>
                                    Security & Data Tools
                                </Typography>
                                <Typography variant='h5' fontWeight={"bold"}>
                                    Security Scores
                                </Typography>
                                <Typography variant='h6'>
                                    Quantify the security of any project using Skynet’s scoring algorithm
                                </Typography>
                                <Typography variant='h5' fontWeight={"bold"}>
                                    Skynet Alerts
                                </Typography>
                                <Typography variant='h6'>
                                    Be the first to know with real-time security alerts verified by CertiK's intelligence team
                                </Typography>
                                <Typography variant='h5' fontWeight={"bold"}>
                                    Smart Money Wizard
                                </Typography>
                                <Typography variant='h6'>
                                    Track where the smart money flows with Skynet’s wallet analyzer
                                </Typography>
                                <Typography variant='h5' fontWeight={"bold"}>
                                    Exchange Audit
                                </Typography>
                                <Typography variant='h6'>
                                    Analyze the on-chain holdings of centralized exchanges
                                </Typography>
                            </Grid>
                        </Grid>



                    </Grid >
                    {/* Section 8 */}
                    <Grid size={12}>
                        <Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>Security For All

                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h6'>Security is a two-way street, and Skynet makes Web3 security analysis simple for builders and community members


                                </Typography>

                            </Grid>
                        </Grid>
                        <Grid spacing={1} container size={12}>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <Typography>For Community</Typography>
                                <Typography>Skynet for Community</Typography>
                                <Typography>Always Free</Typography>
                                <Typography>Do better due diligence with Skynet, the most comprehensive crypto security platform</Typography>
                                <Typography>✔ Free access to curated Security Leaderboar </Typography>
                                <Typography>✔ More than 10,000 crypto projects ranked by Security Score </Typography>
                                <Typography>✔ Industry-leading social sentiment and on-chain analysis dashboards</Typography>

                                <Button sx={{ width: '100%', bgcolor: 'red' }}>Visit Skynet Portal</Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <Typography>For Web3 Projects</Typography>
                                <Typography>Skynet for Business</Typography>
                                <Typography>Annual Billing</Typography>
                                <Typography>Real-time on-chain & off-chain monitoring of projects: your own and your competitors</Typography>
                                <Typography>✔ A guaranteed spot on the Security Leaderboard</Typography>
                                <Typography>✔ Increased exposure to the Web3 community </Typography>
                                <Typography>✔ Competitive monitoring of select competitors with API access to maintain your advantage</Typography>

                                <Button sx={{ width: '100%', bgcolor: 'black' }}>Get A Quote</Button>
                            </Grid>

                        </Grid>
                    </Grid>
                    {/* Section 9 */}
                    <Grid size={12}>
                        <Grid>
                            <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>

                                Learn More About Skynet
                            </Typography>
                        </Grid>
                        <Grid>
                            {/* <img src={experience} alt="Experience" style={{ width: '100%' }} /> */}
                            Slider lgna hy
                        </Grid>
                    </Grid>
                    {/* Section 10 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Get in touch to secure your smart contracts today!
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}><Button
                            fullWidth
                            sx={{
                                bgcolor: '#e5453d',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                px: 2,
                                borderRadius: '4px',
                                textTransform: 'none',
                                '&:hover': { bgcolor: '#c43833' },
                            }}
                        >
                            Schedule an Audit
                        </Button></Grid>
                    </Grid>


                    {/* Section 11 */}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={12}>
                                <Typography variant="h3" fontWeight="bold">
                                    Related Content
                                </Typography>
                            </Grid>


                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }} size={12}>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center', }}>

                                <Grid size={12}>
                                    <img src={SkynetScanCode} alt='Skynet Scan Code' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Ape in with Ease with Skynet Liquidity Monitoring
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Trading on decentralized exchanges can be a daunting experience at times. The Liquidity Monitoring section of Skynet can help you make informed decisions and navigate the DeFi space more securely. Take advantage of Liquidity Monitoring by enabling Skynet today.
                                    </Typography>
                                    <p>

                                        12/10/2021
                                    </p>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={SkynetDetectRisk} alt='Skynet Detect Risk' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Skynet Datasheet
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">

                                        Powering on-chain security monitoring and data insights for Web3 Applications.


                                    </Typography>
                                    <p>
                                        5/12/2022
                                    </p>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={SkynetAccessData} alt='Skynet Access Data' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Introducing the Skynet Trust Score!
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">

                                        CertiK is excited to announce the release of a new Skynet Trust Score, Cohort Analysis Panel, and Highlights and Alerts section!


                                    </Typography>
                                    <p>
                                        6/10/2022
                                    </p>
                                </Grid>




                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>







            </Grid >
        </>
    );
};


export default Skynet