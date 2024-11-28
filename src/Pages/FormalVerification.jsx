import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import HeaderPic from "../assets/smartContractAudit.webp"
import okxIntegration from "../assets/okxIntegration.webp"
import AccurateFindings from "../assets/accurate-findings.svg"
import UnparalleledFlexibility from "../assets/unparalleled-flexibility.svg"
import SkynetScanCode from "../assets/skynet-scan-code.svg"
import projects from "../assets/projects.svg"
import integrity from "../assets/integrity.svg"
import scope from "../assets/scope.svg"
import wallets1 from "../assets/wallets1.svg"
import exChanges from "../assets/exChanges.svg"
import PreLlaunchProjects from "../assets/PreLlaunchProjects.svg"
import coverage from "../assets/coverage.svg"
import precision from "../assets/precision.svg"
import scale from "../assets/scale.svg"
import securityEvaluation from "../assets/securityEvaluation.svg"
import SkynetDetectRisk from "../assets/skynet-detect-risk.svg"
import SkynetAccessData from "../assets/skynet-access-data.svg"
import productTechnicalDueDiligence from "../assets/productTechnicalDueDiligence.svg"
import productSecurityResearch from "../assets/productSecurityResearch.svg"
import productWeb3Strategy from "../assets/productWeb3Strategy.svg"
import ActionableInsights from "../assets/actionable-insights.svg"
import advantagesEn from "../assets/advantagesEn.webp"
import integration from "../assets/integration.webp"
import smartContractAudit2 from "../assets/smartContractAudit2.webp"
import header2 from "../assets/header2.webp"
import header from "../assets/header.webp"
import processEn from "../assets/processEn.webp"
import stepsEn from "../assets/stepsEn.webp"
import auditReport from "../assets/auditReport.webp"
import methodology from "../assets/methodology.png"
import bitrueIntegration from "../assets/bitrueIntegration.png"
import coinmarketcapIntegration from "../assets/coinmarketcapIntegration.png"
import coingeckoIntegration from "../assets/coingeckoIntegration.png"
import experience from "../assets/experience.png"
import SkynetScreenshot from "../assets/SkynetScreenshot.avif"
import cryptoDueDiligenceFrameworks from "../assets/cryptoDueDiligenceFrameworks.svg"
import ProductSkynetLeaderboardScreenshot from "../assets/ProductSkynetLeaderboardScreenshot.avif"
import ProductSkynetSecurityDataTools from "../assets/ProductSkynetSecurityDataTools.avif"
import productCryptoDueDiligence from "../assets/productCryptoDueDiligence.avif"
import whyCertik from "../assets/whyCertik.svg"
import cosmos from "../assets/cosmos.png"
import antGroup from "../assets/antGroup.png"
import A100 from "../assets/100.svg"
import A95 from "../assets/95.svg"
import A90 from "../assets/90.svg"
import ton from "../assets/ton.png"
import delphinusLab from "../assets/delphinusLab.png"
// import SkynetScreenshot from "../assets/SkynetScreenshot.png"
const FormalVerification = () => (
    <>
        <Grid sx={{ border: '1px solid black', bgcolor: 'pink', width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Grid container spacing={3} sx={{ border: '1px solid black', width: '80%' }}>

                {/* Section 1 */}

                <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                    <Grid container size={{ xs: 12, md: 6 }}>

                        <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>

                            Formal Verification for Web3 Security
                        </Typography>
                        <Typography sx={{ color: 'white' }}>
                            Mathematically prove your smart contract and blockchain protocol works as intended. No more best effort reviews, leaving undiscovered vulnerabilities. CertiK’s pioneering technique of using formal verification as part of its smart contract audits helps uncover all possible vulnerabilities in your code.
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
                            >Request A Quote
                            </Button>
                        </Grid>


                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <img src={header2} alt="Smart Contract Audit" style={{ width: '100%' }} />

                    </Grid>
                </Grid>

                {/* s */}
                <Grid size={12}>
                    <Grid container>
                        <Grid size={{ xs: 12, md: 9 }}>
                            <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>Advanced Formal Verification Spotlights


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
                        >Intrested In An Audit
                        </Button></Grid>
                    </Grid>
                    <Grid spacing={1} container size={12}>
                        <Grid size={{ xs: 12, md: 3 }} sx={{ border: "1px solid grey", borderRadius: '10px', p: 2, textAlign: 'center' }}>
                            <img src={delphinusLab} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />
                            <Typography textAlign={"start"}>zkWasm developed by DelphiusLab is the world’s first general-purpose zero-knowledge proof virtual machine that has been formally verified. CertiK discovered two critical bugs during the work.a dedicated program manager.</Typography>

                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} sx={{ border: "1px solid grey", borderRadius: '10px', p: 2, textAlign: 'center' }}>
                            <img src={ton} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />
                            <Typography textAlign={"start"}>  The Open Network (TON) has its Masterchain contract, the top layer of its chain consensus, formally verified by CertiK. Two subtle bugs were discovered during the work.</Typography>

                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} sx={{ border: "1px solid grey", borderRadius: '10px', p: 2, textAlign: 'center' }}>
                            <img src={antGroup} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />

                            <Typography textAlign={"start"}>
                                HyperEnclave by Ant Group is a cross-platform trusted execution environment. Its core components have been formally verified by CertiK. The work has been accepted by ASPLOS'24 conference.</Typography>

                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} sx={{ border: "1px solid grey", borderRadius: '10px', p: 2, textAlign: 'center' }}>
                            <img src={cosmos} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />

                            <Typography textAlign={"start"}>Cosmos SDK is the world's most popular framework for building application-specific blockchains. CertiK formally verified its standard Bank module, a first for L1 modular frameworks.</Typography>

                        </Grid>


                    </Grid>
                </Grid>

                {/* Section 2 */}
                <Grid container size={12}>
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h3" fontWeight="bold">Better security for blockchains and smart contracts
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h6" fontWeight="bold">
                                Mathematically proven, effective auditing process for smart contracts and blockchain protocols, delivering more vulnerabilities than what the human eye can find. </Typography>
                        </Grid>

                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }} size={12}>
                        <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center', }}>

                            <Grid size={12}>
                                <img src={scale} alt='Security Evaluation' style={{ width: '100%', height: '150px' }} />
                            </Grid>
                            <Grid size={12}>
                                <Typography variant="h4" fontWeight="bold">
                                    Scale </Typography>
                            </Grid>
                            <Grid size={12}>
                                <Typography fontWeight="bold">

                                    Common Security Properties for popular smart contracts such as ERC-20 and ERC-721 have been automatically verified for hundreds of projects during their auditing.</Typography>
                            </Grid>




                        </Grid>
                        <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                            <Grid size={12}>
                                <img src={precision} alt='Scope' style={{ width: '100%', height: '150px' }} />
                            </Grid>
                            <Grid size={12}>
                                <Typography variant="h4" fontWeight="bold">
                                    Precision</Typography>
                            </Grid>
                            <Grid size={12}>
                                <Typography fontWeight="bold">

                                    Advanced custom security and correctness properties, such as the increase-K property of AMM, have been specified and proved precisely for complex smart contracts in addition to their regular auditing.
                                </Typography>
                            </Grid>




                        </Grid>
                        <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                            <Grid size={12}>
                                <img src={coverage} alt='Integrity' style={{ width: '100%', height: '150px' }} />
                            </Grid>
                            <Grid size={12}>
                                <Typography variant="h4" fontWeight="bold">
                                    Coverage                                    </Typography>
                            </Grid>
                            <Grid size={12}>
                                <Typography fontWeight="bold">

                                    In addition, CertiK also formally verifies other blockchain building blocks such as consensus protocol, etc. Basic systems infrastructure, such as Enclave Hypervisor, can also been formally verified.
                                </Typography>
                            </Grid>




                        </Grid>
                    </Grid>
                </Grid>
                {/* Section 4 */}
                <Grid size={12}
                    sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography color='white' variant='h4' fontWeight={"bold"}>Want to Know More about Custom Formal Verification as Part Of Code Auditing?                      </Typography>
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
                {/* Section 5 */}

                <Grid size={12} container textAlign={'center'}>
                    <Grid size={12}>
                        <Typography variant='h3' fontWeight={"bold"}>All Audit Processes Are Not Created Equal

                        </Typography>

                    </Grid>
                    <Grid size={12}>
                        <Typography variant='h6' >Depending on the methodology, and experience, smart contract and blockchain protocol audits and process involved can yield different results. Having completed thousands of audits using highly accurate formal verification processes, it's no wonder CertiK is a leader in the industry.

                        </Typography>

                    </Grid>
                </Grid>


                {/* s */}
                <Grid size={12}>
                    <Grid spacing={1} container size={12}>
                        <Grid size={{ xs: 12, md: 4 }} sx={{ boxShadow:"0px 5px 9px white", borderRadius: '10px', p: 2, textAlign: 'center' }}>
                            <Typography fontWeight={"bold"}>Manual Code Review

</Typography>
                            <img src={A90} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />
                            <Typography fontWeight={"bold"}>Most Vendors and CertiK
                            </Typography>
                            <Typography textAlign={"start"}>A human review to try to spot errors. This is very flexible, but it’s best-effort, as you can never be sure you found all errors.</Typography>

                        </Grid>
                    
                        <Grid size={{ xs: 12, md: 4 }} sx={{ boxShadow:"0px 5px 9px white", borderRadius: '10px', p: 2, textAlign: 'center' }}>
                            <Typography fontWeight={"bold"}>Automatic Verification



</Typography>
                            <img src={A95} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />
                            <Typography fontWeight={"bold"}>Few Vendors and CertiK                            </Typography>
                            <Typography textAlign={"start"}>
                            Automatic verification of certain properties and issues e.g., reentrancy, or properties of ERC20 contracts.</Typography>

                        </Grid>
                    
                        <Grid size={{ xs: 12, md: 4 }} sx={{ boxShadow:"0px 5px 9px white", borderRadius: '10px', p: 2, textAlign: 'center' }}>
                            <Typography fontWeight={"bold"}>Custom Formal Verification

</Typography>
                            <img src={A100} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />
                            <Typography fontWeight={"bold"}>CertiK


                            </Typography>
                            <Typography textAlign={"start"}>
                            Security specialists create machine-readable specification that are mathematically verified by CertiK’s Custom Formal Verification system.</Typography>

                        </Grid>
                    

                    </Grid>
                </Grid>

                {/* Section 6*/}
                <Grid container size={12}>


                    <Grid size={{ xs: 12, md: 6 }}>
                        <img src={whyCertik} alt='SkyNode' style={{ width: '100%' }} />

                    </Grid>
                    <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                        <Grid>
                            <Typography variant='h3' fontWeight={"bold"}>Why CertiK?
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography variant='h6'>Our in-depth evaluations of Web3 projects, exchanges, and wallets promote transparency and reliability in the industry. Discover how integrating CertiK's Security Score API can enhance the security and trustworthiness of your exchange or data services.</Typography>
                        </Grid>

                    </Grid>
                </Grid>


                {/* Section 6*/}

                <Grid size={12} container textAlign={'center'}>
                    <Grid size={12}>
                        <Typography variant='h3' fontWeight={"bold"}>Benefits of CertiK Custom Formal Verification
                        </Typography>

                    </Grid>
                    <Grid container size={{ xs: 12, md: 10 }} m='auto'>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Button sx={{ bgcolor: 'red', color: 'white' }}>
                                Tailored to the native languages running in your project                                </Button>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Button sx={{ bgcolor: 'red', color: 'white' }}>
                                Highly customized for the features of your project, protocol, or virtual machine
                            </Button>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Button sx={{ bgcolor: 'red', color: 'white' }}>
                                Developed by a world-class team of academics, researchers, and engineers
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Section 7 */}
                <Grid size={12}
                    sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography color='white' variant='h4' fontWeight={"bold"}>Interested to Know More About How Custom Formal Verification Helps in Effective Auditing?           </Typography>
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

            </Grid>







        </Grid>
    </>
);


export default FormalVerification