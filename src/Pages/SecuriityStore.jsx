import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import okxIntegration from "../../public/assets/okxIntegration.webp"
import SkynetScanCode from "../../public/assets/skynet-scan-code.svg"
import projects from "../../public/assets/projects.svg"
import integrity from "../../public/assets/integrity.svg"
import scope from "../../public/assets/scope.svg"
import wallets1 from "../../public/assets/wallets1.svg"
import exChanges from "../../public/assets/exChanges.svg"
import PreLlaunchProjects from "../../public/assets/PreLlaunchProjects.svg"
import securityEvaluation from "../../public/assets/securityEvaluation.svg"
import SkynetDetectRisk from "../../public/assets/skynet-detect-risk.svg"
import SkynetAccessData from "../../public/assets/skynet-access-data.svg"
import integration from "../../public/assets/integration.webp"
import header from "../../public/assets/header.webp"
import methodology from "../../public/assets/methodology.png"
import bitrueIntegration from "../../public/assets/bitrueIntegration.png"
import coinmarketcapIntegration from "../../public/assets/coinmarketcapIntegration.png"
import coingeckoIntegration from "../../public/assets/coingeckoIntegration.png"
const SecurityStore = () => {
    return (
        <>
 <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
 <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>
                    {/* Section 1 */}

                    <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                        <Grid container size={{ xs: 12, md: 6 }} >

                            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                                CertiK Security Score

                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                                CertiK's Security Score is a real-time assessment system that evaluates the security of Web3 projects, exchanges, and wallets independently and objectively.
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
                                    Activate Skynet Today
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
                                    Visit Skynet Portal
                                </Button>
                            </Grid>


                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={header} alt="Smart Contract Audit" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 2 */}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h3" fontWeight="bold">
                                    Enhancing Trust in Web3 Projects And Exchanges
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    CertiK's security scoring system is your foundation in the Web3 landscape. We provide extensive coverage of Web3 projects, including those on CoinMarketCap and major exchanges.     </Typography>
                            </Grid>

                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }} size={12}>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center', }}>

                                <Grid size={12}>
                                    <img src={securityEvaluation} alt='Security Evaluation' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Unbiased Security Evaluation

                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Our methodology uses a weighted average to conduct a thorough security assessment. Importantly, our revaluation remains unbiased, unaffected by project affiliations.

                                    </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={scope} alt='Scope' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Expanding Score Scope
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        In addition to projects, we have extended our Security Score to cryptocurrency exchanges and wallets, recognizing their pivotal role in the crypto ecosystem.
                                    </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={integrity} alt='Integrity' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Trust Through Integrity
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Our commitment to objectivity and integrity ensures trust among project owners, exchange operators, wallet users and their stakeholders.

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
                                Enable community access to your project's security score and on-chain data analytics.
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

                    {/* Section 4*/}

                    <Grid size={12} container textAlign={'center'} >
                        <Grid size={12}>
                            <Typography variant='h3' fontWeight={"bold"}>Security Score For Web3 Projects
                            </ Typography>
                            <Typography variant='h5' fontWeight={"bold"}>Our comprehensive methodology incorporates 15+ signals across six key security categories
                            </ Typography>

                        </Grid>
                        <Grid container size={{ xs: 12, md: 10 }} m='auto'>

                            <img src={methodology} alt="Methodology" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>

                    {/* Section 5 */}
                    <Grid size={12}>
                        <Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>Our Security Score Coverage

                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h6'>Whether you are a Web3 retail or professional community member, or Web3 project owner, Skynet has you covered.



                                </Typography>

                            </Grid>
                        </Grid>
                        <Grid spacing={1} container size={12}>
                            <Grid size={{ xs: 12, md: 3 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={projects} alt='Projects' style={{ width: '20%' }} />
                                <Typography>Web3 Projects                                </Typography>
                                <Typography>Web3 projects encompass a wide range of cryptocurrency ventures that issue tokens. These projects are evaluated by CertiK's Security Score to ensure the safety and trustworthiness of their digital assets.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={PreLlaunchProjects} alt='Pre Llaunch Projects' style={{ width: '20%' }} />
                                <Typography fontWeight={"bold"}>Pre-Launch Projects</Typography>
                                <Typography>
                                    Pre-Launch projects, often without a token and in early development stages, CertiK evaluates their security based on relevant metrics, providing a crucial layer of protection before the official launch.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={exChanges} alt='Ex Changes' style={{ width: '20%' }} />
                                <Typography fontWeight={"bold"}>Exchanges</Typography>
                                <Typography>
                                    Exchanges represent major cryptocurrency trading platforms like Binance and Coinbase. CertiK's Security Score extends to exchanges, offering a comprehensive assessment of their security practices.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={wallets1} alt='Wallets' style={{ width: '20%' }} />
                                <Typography fontWeight={"bold"}>Wallets
                                </Typography>
                                <Typography>Wallets are essential tools for managing cryptocurrencies. CertiK's Security Score ensures the security of these digital asset storage solutions, assuring users that their personal data and funds are safeguarded.

                                </Typography>
                            </Grid>


                        </Grid>
                    </Grid>
                    {/* Section 6 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Interested in activating Skynet for your Web3 project?                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 3 }}>
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
                                Visit Skynet Portal
                            </Button>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
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
                                Get A Quote
                            </Button>
                        </Grid>
                    </Grid>
                    {/* Section 7 */}
                    <Grid container size={12}>

                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Integrating Our Security Score                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    Our in-depth evaluations of Web3 projects, exchanges, and wallets promote transparency and reliability in the industry. Discover how integrating CertiK's Security Score API can enhance the security and trustworthiness of your exchange or data services.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 5 }}>
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
                                    Integrate The Score API
                                </Button></Grid>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={integration} alt="Integration" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 8 */}
                    <Grid size={12}>

                        <Grid spacing={1} p={1} container size={12}>
                            <Grid size={{ xs: 12, md: 3 }} >
                                <img src={okxIntegration} alt='okx Integration' style={{ height: '450px', width: '100%', border: '1px solid grey', borderRadius: '10px' }} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }} >
                                <img src={coingeckoIntegration} alt='Coingecko Integration' style={{ height: '450px', width: '100%', border: '1px solid grey', borderRadius: '10px' }} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }} >
                                <img src={coinmarketcapIntegration} alt='Coinmarketcap Integration' style={{ height: '450px', width: '100%', border: '1px solid grey', borderRadius: '10px' }} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }} >
                                <img src={bitrueIntegration} alt='Bitrue Integration' style={{ height: '450px', width: '100%', border: '1px solid grey', borderRadius: '10px' }} />
                            </Grid>



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


export default SecurityStore