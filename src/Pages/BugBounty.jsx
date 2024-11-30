import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import HeaderPic from "../assets/pics/smartContractAudit.webp"
import AccurateFindings from "../assets/pics/accurate-findings.svg"
import UnparalleledFlexibility from "../assets/pics/unparalleled-flexibility.svg"
import ActionableInsights from "../assets/pics/actionable-insights.svg"
import advantagesEn from "../assets/pics/advantagesEn.webp"
import smartContractAudit2 from "../assets/pics/smartContractAudit2.webp"
import processEn from "../assets/pics/processEn.webp"
import stepsEn from "../assets/pics/stepsEn.webp"
import auditReport from "../assets/pics/auditReport.webp"
import experience from "../assets/pics/experience.png"
import productBugBounty from "../assets/pics/productBugBounty.avif"
import productBugBountyNoFee from "../assets/pics/productBugBountyNoFee.svg"
import productBugBountyHackers from "../assets/pics/productBugBountyHackers.svg"
import productBugBountySubmissionScreening from "../assets/pics/productBugBountySubmissionScreening.svg"
import productBugBountyTheProject from "../assets/pics/productBugBountyTheProject.svg"
import productBugBountyTheLeaderboardUser from "../assets/pics/productBugBountyTheLeaderboardUser.svg"
import productBugBountyTheEthicalHacker from "../assets/pics/productBugBountyTheEthicalHacker.svg"
import productBugBountyIntegration from "../assets/pics/productBugBountyIntegration.svg"
import productBugBountyCrowdSourcedSecurity from "../assets/pics/productBugBountyCrowdSourcedSecurity.svg"
import productBugBountyExpeditedSubmissionScreening from "../assets/pics/productBugBountyExpeditedSubmissionScreening.svg"
import productBugBountyProactiveDefense from "../assets/pics/productBugBountyProactiveDefense.svg"
import productBugBountyWorkingTogether from "../assets/pics/productBugBountyWorkingTogether.avif"
const BugBounty = () => {
    return (
        <>
             <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
             <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>
                    {/* Section 1 */}

                    <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                        <Grid container size={{ xs: 12, md: 6 }} >

                            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                                Bug Bounty
                            </Typography>
                            <Typography sx={{ color: 'white' }}>

                                Crowdsourcing from a list of the world's top ethical hackers to provide you continuous assessment, for uncovering vulnerabilities before anyone else does.              </Typography>
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
                                    Start No
                                </Button>
                            </Grid>


                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={productBugBounty} alt="Product Bug Bounty" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 2 */}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h3" fontWeight="bold">
                                    The CertiK Bug Bounty Platform
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    Combining years of Web3 security experience with a well-established technical community, CertiK’s Bug Bounty is the only Web3 platform providing fully managed end-to-end support with 0% fee on bounty payouts.       </Typography>
                            </Grid>

                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }} size={12}>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center', }}>

                                <Grid size={12}>
                                    <img src={productBugBountySubmissionScreening} alt='Product Bug Bounty Submission Screening' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">

                                        Submission Screening and Triage Support          </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        CertiK’s expert security engineers will screen and qualify submissions and work with your team to implement the right fixes.       </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={productBugBountyHackers} alt='Product Bug Bounty Hackers' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Community-Focused Ethical Hackers
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Tap into our large technical community from the Security Leaderboard to attract leading ethical hackers to your project.</Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={productBugBountyNoFee} alt='Product Bug Bounty No Fee' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        0% Fee on Bounty Payout             </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Our 0% fee model reduces the payout pressure for projects and allows for white hat hackers receive the full bounty.   </Typography>
                                </Grid>




                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Sextion 3 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Ready to Get Started on a Bug Bounty?
                            </Typography>
                            <Typography color='white'>
                                Improve your project security with white hat hackers and CertiK security experts.                                                        </Typography>
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
                            Start Now
                        </Button></Grid>
                    </Grid>
                    {/* ss */}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h3" fontWeight="bold">
                                    Peace of Mind for your project and community                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    Setting up a bug bounty with CertiK allows projects to utilize the intelligence of ethical hackers to further derisk their code from additional vulnerabilities.      </Typography>
                            </Grid>

                            {/* sad */}
                            <Grid container spacing={2} size={12}>
                                <Grid size={{ xs: 12, md: 2 }} >
                                    <img src={productBugBountyProactiveDefense} alt='Product Bug Bounty Proactive Defense' style={{ width: '50%' }} />
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} >
                                    <Grid>
                                        <Typography variant='h5' fontWeight={"bold"}>Proactive Defense
                                        </Typography>
                                    </Grid>

                                    <Grid>
                                        <Typography variant='h6'>
                                            White hat ethical hackers who have intuitive knowledge of the latest attacks can realize threats before malicious actors have the opportunity to exploit them.</Typography>
                                    </Grid>

                                </Grid>
                                <Grid size={{ xs: 12, md: 2 }} >
                                    <img src={productBugBountyExpeditedSubmissionScreening} alt='Product Bug Bounty Expedited Submission Screening' style={{ width: '50%' }} />
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} >
                                    <Grid>
                                        <Typography variant='h5' fontWeight={"bold"}>
                                            Expedited Submission Screening and Triage
                                        </Typography>
                                    </Grid>

                                    <Grid>
                                        <Typography variant='h6'>

                                            Partner with CertiK security engineers who will rapidly review all your inbound bug submissions and help ensure the proper steps taken to fix any issues.</Typography>
                                    </Grid>

                                </Grid>

                            </Grid>
                            <Grid container spacing={2} size={12}>
                                <Grid size={{ xs: 12, md: 2 }} >
                                    <img src={productBugBountyCrowdSourcedSecurity} alt='Product Bug Bounty Crowd Sourced Security' style={{ width: '50%' }} />
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} >
                                    <Grid>
                                        <Typography variant='h5' fontWeight={"bold"}>
                                            Crowd Sourced Security
                                        </Typography>
                                    </Grid>

                                    <Grid>
                                        <Typography variant='h6'>
                                            Gain access to a highly-skilled community of ethical hackers that specialize in different areas of vulnerability detection.</Typography>
                                    </Grid>

                                </Grid>
                                <Grid size={{ xs: 12, md: 2 }} >
                                    <img src={productBugBountyIntegration} alt='Product Bug Bounty Integration' style={{ width: '50%' }} />
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} >
                                    <Grid>
                                        <Typography variant='h5' fontWeight={"bold"}>
                                            Integration with Skynet Trust Score
                                        </Typography>
                                    </Grid>

                                    <Grid>
                                        <Typography variant='h6'>
                                            Bug bounty remediation of findings is integrated with Skynet and will improve the overall trust score for your project.</Typography>
                                    </Grid>

                                </Grid>

                            </Grid>

                            {/* asd */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    Combining years of Web3 security experience with a well-established technical community, CertiK’s Bug Bounty is the only Web3 platform providing fully managed end-to-end support with 0% fee on bounty payouts.       </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h3" fontWeight="bold">
                                    The CertiK Bug Bounty Platform
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    Combining years of Web3 security experience with a well-established technical community, CertiK’s Bug Bounty is the only Web3 platform providing fully managed end-to-end support with 0% fee on bounty payouts.       </Typography>
                            </Grid>


                        </Grid>

                    </Grid>
                    {/* s */}
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
                            <Grid size={{ xs: 12, md: 4 }} sx={{ borderTop: '2px solid red', boxShadow: '0px 0px 9px white ', borderRadius: '10px', p: 2, textAlign: 'center' }}>
                                <img src={productBugBountyTheProject} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />
                                <Typography variant='h5' fontWeight={"bold"}>The Project                                </Typography>
                                <Typography textAlign={"start"}>1. Get onboarded with a dedicated program manager.</Typography>

                                <Typography textAlign={"start"}>  2. Launch your program and activate your bounty badge on certik.com.</Typography>

                                <Typography textAlign={"start"}>  3. Receive submissions and pay bounties directly if qualified.</Typography>

                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} sx={{ borderTop: '2px solid red', boxShadow: '0px 0px 9px white ', borderRadius: '10px', p: 2, textAlign: 'center' }}>
                                <img src={productBugBountyTheLeaderboardUser} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />
                                <Typography variant='h5' fontWeight={"bold"}>The Leaderboard User


                                </Typography>
                                <Typography textAlign={"start"}>1. Add projects with active bounty badges to your watchlist.
                                </Typography>

                                <Typography textAlign={"start"}>
                                    2. Strengthen your technical due diligence capabilities.</Typography>

                                <Typography textAlign={"start"}>  3. Evaluate projects with additional security measures.</Typography>

                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} sx={{ borderTop: '2px solid red', boxShadow: '0px 0px 9px white ', borderRadius: '10px', p: 2, textAlign: 'center' }}>
                                <img src={productBugBountyTheEthicalHacker} alt='Product Bug Bounty The Project' style={{ width: '50%' }} />
                                <Typography variant='h5' fontWeight={"bold"}>The Ethical Hacker

                                </Typography>
                                <Typography textAlign={"start"}>1. Sign up to the platform and browse bounties.
                                </Typography>

                                <Typography textAlign={"start"}>2. Review in-scope assets and submit reports.
                                </Typography>

                                <Typography textAlign={"start"}>
                                    3. Get paid directly and gain your Web3 white hat reputation.</Typography>

                            </Grid>


                        </Grid>
                    </Grid>
                    {/* Section 4 */}
                    <Grid container size={12}>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={productBugBountyWorkingTogether} alt="Product Bug Bounty Working Together" style={{ width: '100%' }} />

                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Working Together to Create a Safer Web3 Ecosystem
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>Web3, as well as associated Web2 elements of projects are increasingly under attack by malicious actors who seek to take advantage of security vulnerabilities in project code. These adversaries are always "one-step-ahead" of whatever security controls are in place to protect these projects - constantly running reconnaissance and coming up with new attack vectors inside the project’s threat landscape.</Typography>
                            </Grid>
                        </Grid>


                    </Grid >
                    {/* Sextion 5 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Ready to Get Started on a Bug Bounty?
                            </Typography>
                            <Typography color='white'>
                                Improve your project security with white hat hackers and CertiK security experts.                                                        </Typography>
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
                            Start Now
                        </Button></Grid>
                    </Grid>
                </Grid>







            </Grid >
        </>
    );
};


export default BugBounty