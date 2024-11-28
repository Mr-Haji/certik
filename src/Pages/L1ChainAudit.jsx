import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import HeaderPic from "../assets/pics/smartContractAudit.webp"
import AccurateFindings from "../assets/pics/accurate-findings.svg"
import UnparalleledFlexibility from "../assets/pics/unparalleled-flexibility.svg"
import ActionableInsights from "../assets/pics/actionable-insights.svg"
import advantagesEn from "../assets/pics/advantagesEn.webp"
import processEn from "../assets/pics/processEn.webp"
import stepsEn from "../assets/pics/stepsEn.webp"
import auditReport from "../assets/pics/auditReport.webp"
import experience from "../assets/pics/experience.png"
const L1ChainAudit = () => {
    return (
        <>
            <Grid sx={{ border: '1px solid black', bgcolor: 'pink', width: '100%', justifyContent: 'center', display: 'flex' }}>
                <Grid container spacing={3} sx={{ border: '1px solid black', width: '80%' }}>

                    {/* Section 1 */}

                    <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                        <Grid container size={{ xs: 12, md: 6 }} >

                            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                                L1 Chain Audit
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                                An L1 chain audit provides a comprehensive security assessment of a Layer 1 blockchain to identify vulnerabilities and recommend ways to fix them.
                            </Typography>
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
                                    Request A Certik Audit
                                </Button>
                            </Grid>


                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={HeaderPic} alt="Smart Contract Audit" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 2 */}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h3" fontWeight="bold">
                                    Fast and Accurate L1 Chain Security Audits
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    Chain Security Audits
                                    Our industry-leading L1 chain auditing process combines expert manual review of smart contract code with advanced AI and mathematical techniques to ensure blockchain protocols work as intended.
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }} size={12}>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center', }}>

                                <Grid size={12}>
                                    <img src={AccurateFindings} alt='Accurate_Findings' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Accurate Findings              </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Effective findings culminated through performing thousands of audits and a cross-check against a large internal database of security vulnerabilities.

                                    </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={ActionableInsights} alt='Accurate_Findings' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Vulnerability & Remediation             </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Clients receive rich reports on their smart contract code, complete with comprehensive vulnerability analyses and recommended remediations.</Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={UnparalleledFlexibility} alt='Accurate_Findings' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Experience & Flexibility
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        CertiK audits all of Web3, from decentralized applications to the blockchains they’re built on. We work closely with clients to deliver tailor-made security solutions.
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
                                Interested in undergoing a security audit with CertiK?
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
                            Schedule an L1 Chain Audit
                        </Button></Grid>
                    </Grid>



                    {/* Section 4 */}
                    <Grid container size={12}>


                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Why Choose CertiK?                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>CertiK has audited more projects and secured more value than any other auditing firm. Our team of security experts is trusted by top cryptocurrency exchanges like Binance, OKEx, and Huobi as the leading auditor.

                                    We audit all components of Web3 platforms, from projects built on blockchains like Ethereum, BNB Chain, and Polygon, to these Layer 1 blockchains themselves.

                                    CertiK is also a pioneer in the application of advanced Formal Verification techniques to L1 chain audits. This process goes a step beyond manual review to provide mathematical guarantees about the functionality of smart contract platforms and L1 blockchains.</Typography>
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
                                    Schedule an Audit
                                </Button></Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={advantagesEn} alt="Advantages En" style={{ width: '100%' }} />

                        </Grid>

                    </Grid>
                    {/* Sextion 5 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Interested in undergoing a security audit with CertiK?
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
                            Schedule an L1 Chain Audit
                        </Button></Grid>
                    </Grid>

                    {/* Section 7*/}

                    <Grid size={12} container textAlign={'center'} >
                        <Grid size={12}>
                            <Typography variant='h3' fontWeight={"bold"}>L1 Chain Audit Process                            </ Typography>

                        </Grid>
                        <Grid size={{ xs: 12, md: 10 }} m='auto'>
                            <img src={processEn} alt='Process En' style={{ width: '100%' }} />
                        </Grid>
                    </Grid>

                    {/* Section 8 */}
                    <Grid size={12}>
                        <Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>How Does an L1 Chain Audit Work?
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h6'>Every audit involves comprehensive manual review by our team of experienced security experts. Formal verification certifies L1 chain code behavior with respect to custom function specifications, helping developers get a handle on the entire scope of their platform. The process of auditing an L1 is the same as for auditing a smart contract. The five-step process is as follows:
                                </Typography>

                            </Grid>
                        </Grid>
                        <Grid>
                            <img src={stepsEn} alt="Steps En" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>

                    {/* Section 9 */}
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={auditReport} alt="Audit Report" style={{ width: '100%' }} />

                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>

                                    What’s in a L1 Chain Audit Report?
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>

                                    Audit reports are comprehensive and fully transparent records that contain the details of all identified vulnerabilities. These are classified by severity from Critical to Informational. Each vulnerability is accompanied by suggested remediations from our team of smart contract security experts.

                                    Vulnerabilities that are addressed before launch are marked as resolved. Issues that are acknowledged but unresolved are accompanied by a description of their possible effects and the project team’s justification.

                                    Projects that undergo a completed audit earn a spot on the Web3 Security Leaderboard. This gives the entire Web3 community a powerful demonstration of a project’s commitment to security.

                                    As part of our commitment to transparency and an open-source Web3 world, L1 chain audit reports are freely available to the public.
                                </Typography>
                            </Grid>
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
                                    Schedule an L1 Chain Audit
                                </Button></Grid>
                        </Grid>



                    </Grid >
                    {/* Section 10 */}
                    <Grid size={12}>
                        <Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>Our Experience

                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h6'>
                                    CertiK has audited nearly a dozen L1s, along with projects written in all major programming languages, thousands of Web3 projects, and tens of thousands lines of code. As a pioneer in the blockchain security industry, CertiK brings expertise that can only be gained from years of experience with thousands of projects to each and every L1 chain audit.
                                </Typography>

                            </Grid>
                        </Grid>
                        <Grid>
                            <img src={experience} alt="Experience" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 11 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Get in touch to secure your L1 Chain today!
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
                            Schedule an L1 Chain Audit
                        </Button></Grid>
                    </Grid>
                    {/* Section 12 */}
                    <Grid size={12}>
                        <Grid>
                            <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>

                                Learn More From Our Resources
                            </Typography>
                        </Grid>
                        <Grid>
                            <img src={experience} alt="Experience" style={{ width: '100%' }} />
                            {/* Slider lgna hy */}
                        </Grid>
                    </Grid>
                </Grid>







            </Grid >
        </>
    );
};


export default L1ChainAudit