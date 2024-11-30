import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import SkynetScanCode from "../../public/assets/skynet-scan-code.svg"
import SkynetDetectRisk from "../../public/assets/skynet-detect-risk.svg"
import SkynetAccessData from "../../public/assets/skynet-access-data.svg"
import productKyc from "../../public/assets/productKyc.avif"
import producBuildTransparency from "../../public/assets/producBuildTransparency.svg"
import productEstablishCredibility from "../../public/assets/productEstablishCredibility.svg"
import productLeverageKYC from "../../public/assets/productLeverageKYC.svg"
import CertiKKYCProcess from "../../public/assets/CertiKKYCProcess.png"
import productTrustedProvider from "../../public/assets/productTrustedProvider.svg"
import productExperiencedInvestigators from "../../public/assets/productExperiencedInvestigators.svg"
import productSecureProcess from "../../public/assets/productSecureProcess.svg"
import productKYCBadgeCompletion from "../../public/assets/productKYCBadgeCompletion.svg"
import productProveIdentity from "../../public/assets/productProveIdentity.svg"
import KYC1080p from "../../public/assets/KYC1080p.mp4"
const Kyc = () => {
    return (
        <>
            <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
                <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>
                    {/* Section 1 */}
                    <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                        <Grid container size={{ xs: 12, md: 6 }} >

                            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                                CertiK KYC


                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                                CertiK KYC is the leading identity verification and due diligence service in Web3, giving you the credibility you need to be trusted by your community.
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
                                    Request A Certik KYC                                </Button>
                            </Grid>


                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={productKyc} alt="Smart Contract Audit" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 2 */}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h3" fontWeight="bold">
                                    KYC for Project Teams is more important than ever                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    CertiK KYC provides private identity verification for project teams through a rigorous vetting process while maintaining the highest standards of data protection.

                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }} size={12}>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center', }}>

                                <Grid size={12}>
                                    <img src={producBuildTransparency} alt='Security Evaluation' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Build Transparency & Trust With Your Community

                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Voluntarily engaging in KYC establishes trust and transparency with your user base and legitimizes your team.
                                    </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={productEstablishCredibility} alt='Scope' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Establish Credibility Of Your Team</Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">

                                        Maintain anonymity while verifying the identity of your team.</Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={productLeverageKYC} alt='Integrity' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Leverage KYC for Leading Platforms

                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Many leading exchanges and launchpads now require KYC for project teams. These platforms unlock access to a larger investor base.
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
                                Ready to get started?
                            </Typography>
                            <Typography color='white'>
                                Get a price quote, and have your project team KYC verified today!
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
                            Request A Certik KYC
                        </Button></Grid>
                    </Grid>
                    {/* Section 5 */}
                    <Grid size={12}>
                        <Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>Partner with the industry-leading KYC provider


                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid spacing={1} container size={12}>
                            <Grid size={{ xs: 12, md: 3 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={productProveIdentity} alt='Projects' style={{ width: '20%' }} />
                                <Typography>Prove Your Identity                                </Typography>
                                <Typography>
                                    CertiK KYC enables project teams to maintain their public anonymity while privately verifying their identity with our team.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={productSecureProcess} alt='Pre Llaunch Projects' style={{ width: '20%' }} />
                                <Typography fontWeight={"bold"}>Secure Process</Typography>
                                <Typography>
                                    Project teams can safely de-anonymize with CertiK's KYC process. We maintain the highest standards of data protection and privacy.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={productExperiencedInvestigators} alt='Ex Changes' style={{ width: '20%' }} />
                                <Typography fontWeight={"bold"}>
                                    Experienced Investigators</Typography>
                                <Typography>
                                    Our team is comprised of experienced investigators with the resources, capacity, and expertise to facilitate your KYC process.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={productTrustedProvider} alt='Wallets' style={{ width: '20%' }} />
                                <Typography fontWeight={"bold"}>Trusted Provider Of KYC</Typography>
                                <Typography>
                                    CertiK is recognized as a market-leading provider of KYC and end-to-end security solutions for project teams.
                                </Typography>
                            </Grid>


                        </Grid>
                    </Grid>
                    {/* Section 4*/}
                    <Grid size={12} container textAlign={'center'} >
                        <Grid size={12}>
                            <Typography variant='h3' fontWeight={"bold"}>The CertiK KYC Process

                            </ Typography>
                            <Typography variant='h5' fontWeight={"bold"}>Our process is designed to verify your team's identity while protecting your privacy and confidential information.

                            </ Typography>

                        </Grid>
                        <Grid container size={{ xs: 12, md: 10 }} m='auto'>

                            <img src={CertiKKYCProcess} alt="Methodology" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    {/* Section 7 */}
                    <Grid container size={12}>

                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>The CertiK KYC Badge            </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    Upon successful completion of the KYC process, your project is issued the CertiK KYC Badge. This is displayed on your project's Security Leaderboard profile and serves as verifiable proof that all verification standards have been met. A CertiK KYC Badge increases trust and transparency between your project and its community.

                                    Additionally, our badges can be displayed directly on your project website through our feature, Emblem.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 8 }}>
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
                                    Learn More About Emblem
                                </Button></Grid>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={productKYCBadgeCompletion} alt="Integration" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section */}
                    <Grid container textAlign={"center"} size={12}>
                        <Grid size={12}>
                            <Typography fontWeight={"bold"}>
                                Learn more about KYC
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }} m='auto'>
                            <video type="video/mp4" style={{ width: '100%', borderRadius: '10px' }}            >
                                <source src={KYC1080p} type="video/mp4"></source>
                                Your browser does not support the video
                            </video>
                        </Grid>
                    </Grid>
                    {/* Section 9*/}
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


export default Kyc