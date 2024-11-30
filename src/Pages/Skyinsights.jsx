import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import SkynetScanCode from "../../public/assets//skynet-scan-code.svg"
import SkynetDetectRisk from "../../public/assets//skynet-detect-risk.svg"
import SkynetAccessData from "../../public/assets//skynet-access-data.svg"
import productTechnicalDueDiligence from "../../public/assets//productTechnicalDueDiligence.svg"
import productSecurityResearch from "../../public/assets//productSecurityResearch.svg"
import productWeb3Strategy from "../../public/assets//productWeb3Strategy.svg"
import skyinsightsHero from "../../public/assets//skyinsightsHero.avif"
import kya from "../../public/assets//kya.svg"
import kyt from "../../public/assets//kyt.svg"
import customizableCaseManagement from "../../public/assets//customizableCaseManagement.svg"
import transactionFlowAnalysis from "../../public/assets//transactionFlowAnalysis.avif"
import detailKeepAheadCurve from "../../public/assets//detailKeepAheadCurve.avif"
import detailEvidence from "../../public/assets//detailEvidence.avif"
import detailTxnMonitoring from "../../public/assets//detailTxnMonitoring.svg"
const Skyinsights = () => {
    return (
        <>
            <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
                <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>
                    {/* Section 1 */}
                    <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                        <Grid container size={{ xs: 12, md: 6 }} >

                            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                                SkyInsights: Crypto Compliance, AML & Risk Management
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                                SkyInsights provides real-time transaction monitoring, AML/CTF compliance solutions, and risk analytics to ensure VASPs meet their regulatory requirements.
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
                            <img src={skyinsightsHero} alt="Smart Contract Audit" style={{ width: '100%' }} />

                        </Grid>
                        <Grid size={12}>
                            <Typography sx={{ color: 'white' }}>
                                SkyInsights provides real-time transaction monitoring, AML/CTF compliance solutions, and risk analytics to ensure VASPs meet their regulatory requirements.
                            </Typography>
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

                                        Comprehensive technical evaluations of Web3 projects and digital assets ensure they meet the rigorous security standards required by institutional investors, hedge funds, venture capital firms, and more.
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
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: { xs: "column", md: 'row' },
                            p: 5
                        }}>
                        <Grid size={12}>
                            <Grid container>
                                <Grid size={2}  >
                                    <Typography variant="h5" fontWeight="bold" color='red'>1.2 Billion+</Typography>
                                    <Typography fontWeight="bold">Address labels


                                    </Typography>
                                </Grid>
                                <Grid size={2}  >
                                    <Typography variant="h5" fontWeight="bold" color='red'>1 Million+</Typography>
                                    <Typography fontWeight="bold">Tokens supported


                                    </Typography>
                                </Grid>
                                <Grid size={2}  >
                                    <Typography variant="h5" fontWeight="bold" color='red'>16+8</Typography>
                                    <Typography fontWeight="bold">16 chains with full and 8 with lite support

                                    </Typography>
                                </Grid>
                                <Grid size={2}  >

                                    <Typography variant="h5" fontWeight="bold" color='red'>4,000+</Typography>
                                    <Typography fontWeight="bold">Incidents detected since 2020



                                    </Typography>
                                </Grid>
                                <Grid size={2}  >
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
                            <Typography color='white' variant='h4' fontWeight={"bold"}>Start Your Free SkyInsights Trial Today
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
                        >Start Your Free Trail
                        </Button></Grid>
                    </Grid>
                    {/* Section 5*/}
                    <Grid size={12} container textAlign={'center'} >
                        <Grid size={12}>
                            <Typography variant='h3' fontWeight={"bold"}>The SkyInsights Platform

                            </ Typography>
                            <Typography variant='h5' fontWeight={"bold"}>
                                Enhance your crypto compliance, risk management, and AML strategy with SkyInsights, an all-in-one transaction monitoring software and blockchain intelligence platform
                            </ Typography>

                        </Grid>
                    </Grid>
                    {/* Section 6*/}
                    <Grid container size={12}>


                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Wallet and Address Screening
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    Screen all addresses - wallets, smart contracts, tokens, and more. SkyInsights' KYA/KYW includes:

                                    Multi-chain and cross-chain risk evaluations and scores.
                                    Comprehensive risk analysis, both on-chain and off-chain.
                                    Smart contract-level risk scores informed by code complexity, transaction history, security best practices, and industry standards for compliance.
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={kya} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 7 */}
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={kyt} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>

                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Real-Time Transaction Monitoring
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    Get to really Know Your Transaction (KYT) with:

                                    24/7 real-time and continuous transaction monitoring.
                                    Real-time updates to sanctions lists, exploits, hacks, and security incidents.
                                    Auto-wallet-import API for seamless integration with Web3 dApps.</Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                    {/* Section 8*/}
                    <Grid container size={12}>


                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Customizable Case Management
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>Rule-groups and customer-entity based case management features enable you and your team to:

                                    Prioritize critical cases and efficiently monitor multiple addresses.
                                    Streamline compliance and AML/CTF rules and rule-groups, reducing unnecessary alerts, decreasing workload, and saving cost.</Typography>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={customizableCaseManagement} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 9 */}
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={transactionFlowAnalysis} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>

                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Transaction Flow Analyzer
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>Take advantage of forensic investigation tools that allow:

                                    Detailed tracing of cryptocurrency transactions across chains, including bridges and mixers.
                                    Risk assessments by counterparty and exposure type.
                                    Easy data exports to enhance reports for compliance and investigation teams.</Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                    {/* Section 10*/}
                    <Grid size={12} container textAlign={'center'} >
                        <Grid size={12}>
                            <Typography variant='h3' fontWeight={"bold"}>The SkyInsights API


                            </ Typography>
                            <Typography variant='h5' fontWeight={"bold"}>Seamlessly access and integrate SkyInsights data into existing systems

                            </ Typography>

                        </Grid>
                    </Grid>
                    {/* Section 11*/}
                    <Grid container size={12}>


                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>SkyInsights REST API
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>The SkyInsights REST API enables the easy integration of blockchain risk analysis into your compliance processes.

                                    Know Your Address (KYA) API: Rapidly assesses the risk of blockchain addresses.
                                    Know Your Transaction (KYT) API: Analyze transaction details in real-time, ensuring compliance and mitigating risk.</Typography>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={detailKeepAheadCurve} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 12*/}
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={detailEvidence} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>

                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Powerful Risk Analysis
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    SkyInsights delivers tailored risk assessment tools for VASPs and Web3 dApps, combining flexibility with comprehensive security insights.

                                    Customizable reports to fit varied investigative needs, offering different levels of analysis detail.
                                    Enables the in-depth examination of events and exposures associated with blockchain addresses or cryptocurrency transactions.
                                    Utilizes evidence-based scoring to communicate risks effectively to decision-makers and stakeholders.</Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                    {/* Section 13*/}
                    <Grid container size={12}>


                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Transaction Risk Monitoring
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    SkyInsights ensures your transactions are safe and compliant with real-time wallet screening and transaction monitoring.

                                    Provides instant identification of potentially risky transactions.
                                    Delivers essential data for anti-money laundering and counter-terrorist financing (AML/CFT) compliance and Know Your Transaction (KYT) investigative requirements.</Typography>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={detailTxnMonitoring} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 14 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Get Compliant With SkyInsights Today
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
                            Start Your Free Trail
                        </Button></Grid>
                    </Grid>
                    {/* Section 15*/}
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


export default Skyinsights