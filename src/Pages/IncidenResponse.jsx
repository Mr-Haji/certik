import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import productIncidentResponse from "../Pics/productIncidentResponse.avif"
import productIncidentResponseCoverage from "../Pics/productIncidentResponseCoverage.svg"
import productIncidentResponseLeading from "../Pics/productIncidentResponseLeading.svg"
import incidentResponseNum1 from "../Pics/incidentResponseNum1.svg"
import incidentResponseNum2 from "../Pics/incidentResponseNum2.svg"
import incidentResponseNum3 from "../Pics/incidentResponseNum3.svg"
import productIncidentResponseCyber from "../Pics/productIncidentResponseCyber.svg"
import incidentResponseFeat3 from "../Pics/incidentResponseFeat3.avif"
import incidentResponseFeat2 from "../Pics/incidentResponseFeat2.avif"
import incidentResponseFeat1 from "../Pics/incidentResponseFeat1.avif"
const IncidentResponse = () => {
    return (
        <>
 <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
 <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>
                    {/* Section 1 */}

                    <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                        <Grid container size={{ xs: 12, md: 6 }} >

                            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                                24/7 Incident Response                            </Typography>
                            <Typography sx={{ color: 'white' }}>

                                Need immediate assistance for a possible security incident or breach? You’re in the right place.

                            </Typography>
                            <Typography sx={{ color: 'white' }}>


                                I'm Under Cyber Attack, And Need Help Now!
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
                                    Report Incident
                                </Button>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={productIncidentResponse} alt="Sky Nnode Banner" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 2 */}
                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h3" fontWeight="bold">Security Experts Are Here To Help
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6" fontWeight="bold">The CertiK team delivers urgent security services available to the largest enterprises, without the infrastructure headaches or drain on manpower and resources.              </Typography>
                            </Grid>

                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }} size={12}>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center', }}>

                                <Grid size={12}>
                                    <img src={productIncidentResponseCyber} alt='Accurate_Findings' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">

                                        Web2 & Web3 Cyber Incident Response     </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        From investigation to crisis management, CertiK incident response helps resolve all aspects of Web2 & Web3 security issues with industry-leading expertise. </Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={productIncidentResponseLeading} alt='Accurate_Findings' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">
                                        Industry-leading Cyber Threat Intelligence       </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        Years of threat intelligence experience at scale, is what gives CertiK the edge in helping understand attack techniques and procedures (TTPs) that attackers use..</Typography>
                                </Grid>




                            </Grid>
                            <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                                <Grid size={12}>
                                    <img src={productIncidentResponseCoverage} alt='Accurate_Findings' style={{ width: '100%', height: '150px' }} />
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="h4" fontWeight="bold">24/7 Incident Response Coverage           </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography fontWeight="bold">
                                        After-hours and always available coverage gives you peace of mind that you are seamlessly protected during investigation and remediation.          </Typography>
                                </Grid>




                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Sextion 3 */}
                    <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                                Need immediate assistance for a possible Security incident or breach?
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
                            Contact Us
                        </Button></Grid>
                    </Grid>


                    {/* Secftion 4 */}
                    <Grid size={12}>

                        <Grid sx={{ textAlign: 'center' }} >
                            <Typography variant='h4' fontWeight={"bold"}>
                                CertiK Incident Response Services features

                            </Typography>
                        </Grid>
                        <Grid container sx={{
                            flexDirection: { xs: "column", md: 'row' },
                        }}>

                            <Typography textAlign={"center"} variant='h6'>CertiK Incident Response is a full-featured service to help you immediately respond to a cyberattack.

                            </Typography>
                        </Grid>



                    </Grid>

                    {/* Section 5*/}
                    <Grid container size={12}>


                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Web2 and Web3 Cybersecurity expertise
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>                                CertiK has been on the frontlines of Web3, as well as Web2 cyber security and incident response since 2018. From our expertise in conducting smart-contract audits and penetration tests as well as alerting and incident response, CertiK can quickly identify on-chain and smart-contract issues, what was compromised, assess the attack flows and remediation steps.</Typography>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={incidentResponseFeat1} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 6 */}
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={incidentResponseFeat2} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>

                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>                                Rapid response
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    Speed of response and analysis is critical to containing an incident and minimizing damage. Whether you are a project with hundreds of members or a global blockchain with hundreds of thousands of users, CertiK can help.</Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                    {/* Section 7 */}
                    <Grid container size={12}>


                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Hands-on remediation support </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    CertiK support to help you and your team implement remediation recommendations, assuring thorough remediation to help you recover, redeploy, and restart your project as quick as possible.</Typography>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={incidentResponseFeat3} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                    </Grid>

                    {/* Section 8 */}
                    <Grid size={12}>
                        <Grid>
                            <Grid>
                                <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>Manage Incidents With CertiK in 3-Easy Steps

                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid spacing={1} container size={12}>
                            <Grid size={{ xs: 12, md: 4 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={incidentResponseNum1} alt='Projects' style={{ width: '20%' }} />
                                <Typography fontWeight={'bold'}>
                                    Gather Informations
                                </Typography>
                                <Typography>
                                    Gather as much attack information from your team. Include your assessment of the situation, including how it was discovered, and any actions you have already taken to mitigate the issue.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={incidentResponseNum2} alt='Pre Llaunch Projects' style={{ width: '20%' }} />
                                <Typography fontWeight={"bold"}>                                Contact Us!</Typography>
                                <Typography>

                                    Contact us using the methods provided, either through discord or telegram, or by filling out a form.

                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} sx={{ border: '1px solid grey', borderRadius: '10px', p: 2 }}>
                                <img src={incidentResponseNum3} alt='Ex Changes' style={{ width: '20%' }} />
                                <Typography fontWeight={"bold"}>
                                    Get Back On Track</Typography>
                                <Typography>
                                    We will investigate points of compromise, and work with your team to fully understand the attack, then provide you with recommendations on how to mitigate this issue to get you back on track.</Typography>
                            </Grid>


                        </Grid>
                    </Grid>

                    {/* Section 9 */}
                    <Grid size={12}>
                        <Grid container>
                        <Grid size={{xs:12,md:9}}>
                                <Typography  variant='h4' fontWeight={"bold"}>
                                    Interested in more CertiK Incident Response Offerings?

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
                            >Contact Us
                            </Button></Grid>
                        </Grid>
                        <Grid spacing={1} container size={12}>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                <Typography fontWeight={"bold"} variant='h6'>Emergency Incident Response</Typography>
                                <Typography>Get 24/7/365 incident coordination and command, technical contract and on-chain analysis, forensic investigation, expert guidance and response to any Web3 cybersecurity incident backed by our intelligence with comprehensive after-action reporting.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                <Typography fontWeight={"bold"} variant='h6'>Tabletop Exercises
                                </Typography>
                                <Typography>                                Practice custom-designed scenarios that allow different levels of the organization to better learn the variables of their role during an incident, ensuring the plan and playbooks are clearly understood and effective.</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                <Typography fontWeight={"bold"} variant='h6'>Incident Response Playbooks</Typography>
                                <Typography>
                                    Develop customized playbooks based on the threats most relevant to your organization. These playbooks are part of the overall triage and response process to specific threats.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                <Typography fontWeight={"bold"} variant='h6'>Incident Response Planning</Typography>
                                <Typography>
                                    Develop a tailored process to support coordinated response and communications during Web3 cybersecurity incidents or review an existing plan and provide recommendations for improvement.</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                <Typography fontWeight={"bold"} variant='h6'>Incident Response Readiness Assessment</Typography>
                                <Typography>
                                    An in-depth review of the existing incident response capabilities within the organization. The Incident Response Team will evaluate your organizational security foundations and understand the current ability to communicate during an incident. Be ready to detect, respond, and recover from a Web3 security incident.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                <Typography fontWeight={"bold"} variant='h6'>Compromise Assessment</Typography>
                                <Typography>
                                    Taking a broad view of the organization, this is a high-level assessment of the network and its systems to identify typical signs of compromise. Discover what is lurking below the surface and what approaches can be taken to further investigate any vulnerabilities.</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                <Typography fontWeight={"bold"} variant='h6'>Threat Hunting
                                </Typography>
                                <Typography>A review of specific areas of an organization’s network and its systems for indicators of potential compromise. Threat hunting is hypothesis-driven and backed by the most current threat intelligence available from CertiK.</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                <Typography fontWeight={"bold"} variant='h6'>Intel on Demand</Typography>
                                <Typography>
                                    Request the latest threat intelligence and newest custom research based on relevant Web3 contextual factors. This unique service is the only way to unlock direct access to CertiK Intelligence Analysts</Typography>
                            </Grid>



                        </Grid>
                    </Grid>


  {/* Section 10 */}
  <Grid size={12}
                        sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Typography color='white' variant='h4' fontWeight={"bold"}>
                            Want to hear about our incident Response Offerings?                            </Typography>
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
                            Contact Us
                        </Button></Grid>
                    </Grid>

                </Grid>
            </Grid >
        </>
    );
};


export default IncidentResponse