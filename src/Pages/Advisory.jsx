import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import SkynetScanCode from "../../public/assets/skynet-scan-code.svg"
import SkynetDetectRisk from "../../public/assets/skynet-detect-risk.svg"
import SkynetAccessData from "../../public/assets/skynet-access-data.svg"
import productTechnicalDueDiligence from "../../public/assets/productTechnicalDueDiligence.svg"
import productSecurityResearch from "../../public/assets/productSecurityResearch.svg"
import productWeb3Strategy from "../../public/assets/productWeb3Strategy.svg"
import cryptoDueDiligenceFrameworks from "../../public/assets/cryptoDueDiligenceFrameworks.svg"
import productCryptoDueDiligence from "../../public/assets/productCryptoDueDiligence.avif"
const Advisory = () => {
    return (
        <>
 <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
 <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>
                    {/* Section 1 */}

                    <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                        <Grid container size={{ xs: 12, md: 6 }} >

                            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                                Crypto Due Diligence
                            </Typography>
                            <Typography sx={{ color: 'white' }}>

                                Get the most out of Web3 by partnering with CertiK Advisory. Our team of seasoned analysts deliver a comprehensive range of services, including technical evaluations, proprietary research, and strategy recommendations.
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
                                >Contact Us
                                </Button>
                            </Grid>


                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={productCryptoDueDiligence} alt="Smart Contract Audit" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 2 */}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h3" fontWeight="bold">Navigate the Web3 World in Safety with CertiK's Crypto Due Diligence
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    ur unparalleled expertise in Web3 security and risk management ensures that clients make informed decisions about their investments. </Typography>
                            </Grid>

                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }} size={12}>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center', }}>

                                <Grid size={12}>
                                    <img src={productTechnicalDueDiligence} alt='Security Evaluation' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Technical Due Diligence
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">

                                        Comprehensive technical evaluations of Web3 projects and digital ensure they meet the rigorous security standards required by institutional investors, hedge funds, venture capital firms, and more.
                                    </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={productSecurityResearch} alt='Scope' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Security Research
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        We offer bespoke research and analysis services, providing actionable insights into the highly technical and security-conscious world of blockchain.
                                    </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={productWeb3Strategy} alt='Integrity' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Web3 Strategy                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">

                                        Empower your Web3 organization with strategic product roadmaps, create an identifiable Web3 brand, engage users, and thrive in the complex ecosystem.
                                    </Typography>
                                </Grid>




                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Section 3 */}
                    <Grid size={12}
                        sx={{
                            border: '1px solid grey',
                            borderRadius: '10px',
                            m: 'auto',
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: { xs: "column", md: 'row' },
                            p: 5
                        }}>
                        <Grid size={12}>


                            <Grid>
                                <Typography variant="h5" fontWeight="bold">Smart Contract Audit Statistics</Typography>
                            </Grid>




                            <Grid container>
                                <Grid size={4} px={8} sx={{ borderRight: { md: '1px solid grey' } }}>
                                    <Typography variant="h5" fontWeight="bold" color='red'>200+</Typography>
                                    <Typography fontWeight="bold">Blockchain Engineers

                                    </Typography>
                                </Grid>
                                <Grid size={4} px={8} sx={{ borderRight: { md: '1px solid grey' } }}>
                                    <Typography variant="h5" fontWeight="bold" color='red'>3700+</Typography>
                                    <Typography fontWeight="bold">Clients

                                    </Typography>
                                </Grid>
                                <Grid size={4} px={8} >
                                    <Typography variant="h5" fontWeight="bold" color='red'>5+</Typography>
                                    <Typography fontWeight="bold">Years in the industry

                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>




                    </Grid>
                    {/* Section 4 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Get your crypto due diligence handled by the best in the business.                            </Typography>
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
                        >Contact Us
                        </Button></Grid>
                    </Grid>

                    {/* Section 5*/}

                    <Grid size={12} container textAlign={'center'} >
                        <Grid size={12}>
                            <Typography variant='h3' fontWeight={"bold"}>Proven Risk Evaluation and Crypto Due Diligence Frameworks

                            </ Typography>
                            <Typography variant='h5' fontWeight={"bold"}>As the leading Web3 security auditor, CertiK's crypto due diligence process has been honed through the evaluation of thousands of projects across dozens of blockchain ecosystems.

                            </ Typography>

                        </Grid>
                        <Grid container size={{ xs: 12, md: 10 }} m='auto'>

                            <img src={cryptoDueDiligenceFrameworks} alt="Methodology" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    {/* Section 6 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Partner with CertiK for expertise you can trust.                            </Typography>
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
                        >Contact Us
                        </Button></Grid>
                    </Grid>

                    {/* Section 7*/}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={12}>
                                <Typography variant="h3" fontWeight="bold">
                                    Our Latest Insights

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


export default Advisory