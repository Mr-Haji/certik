import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import HeaderPic from "../Pics/smartContractAudit.webp"
import AccurateFindings from "../Pics/accurate-findings.svg"
import UnparalleledFlexibility from "../Pics/unparalleled-flexibility.svg"
import ActionableInsights from "../Pics/actionable-insights.svg"
import advantagesEn from "../Pics/advantagesEn.webp"
import smartContractAudit2 from "../Pics/smartContractAudit2.webp"
import processEn from "../Pics/processEn.webp"
import stepsEn from "../Pics/stepsEn.webp"
import auditReport from "../Pics/auditReport.webp"
import experience from "../Pics/experience.png"
const SmartAuditContract = () => {
  return (
    <>
 <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
 <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>
          {/* Section 1 */}

          <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
            <Grid container size={{ xs: 12, md: 6 }} >

              <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                Smart Contract Audit
              </Typography>
              <Typography sx={{ color: 'white' }}>
                A comprehensive security assessment of your smart contract and blockchain code to identify vulnerabilities and recommend ways to fix them.              </Typography>
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
                  Fast and Accurate Smart Contract Security Audit
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" fontWeight="bold">
                  Our industry-leading audit methodology and tooling includes a review of your code’s logic, with a mathematical approach to ensure your program works as intended.              </Typography>
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
                    Have your code reviewed by CertiK’s team of seasoned security experts, who have audited 1000’s of projects             </Typography>
                </Grid>




              </Grid>
              <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                <Grid size={12}>
                  <img src={ActionableInsights} alt='Accurate_Findings' style={{ width: '100%', height: '150px' }} />
                </Grid>
                <Grid size={12}>
                  <Typography variant="h4" fontWeight="bold">
                    Actionable Insights              </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontWeight="bold">
                    Receive rich reporting, covering findings and recommendations on on how to remediate vulnerabilities.</Typography>
                </Grid>




              </Grid>
              <Grid container size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>

                <Grid size={12}>
                  <img src={UnparalleledFlexibility} alt='Accurate_Findings' style={{ width: '100%', height: '150px' }} />
                </Grid>
                <Grid size={12}>
                  <Typography variant="h4" fontWeight="bold">
                    Unparalleled Flexibility             </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontWeight="bold">
                    Providing the largest coverage on languages and ecosystem, as well as faster onboarding options, depending on project code size.             </Typography>
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
              p: 10
            }}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ borderRight: { md: '1px solid grey' }, borderBottom: { xs: '1px solid grey', md: "0px " } }}>


              <Grid>
                <Typography variant="h5" fontWeight="bold">Smart Contract Audit Statistics</Typography>
              </Grid>




              <Grid container>
                <Grid size={6} >
                  <Typography variant="h5" fontWeight="bold" color='red'>5,252+</Typography>
                  <Typography fontWeight="bold">Audited Projects</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography variant="h5" fontWeight="bold" color='red'>78,414+</Typography>
                  <Typography fontWeight="bold">Security Audit Findings</Typography>
                </Grid>
              </Grid>

            </Grid>
            {/* ========================== */}

            <Grid size={{ xs: 12, md: 6 }}>


              <Grid>
                <Typography variant="h5" fontWeight="bold">Formal Verification Statistics
                </Typography>
              </Grid>
              <Grid container >

                <Grid size={6}>
                  <Typography variant="h5" fontWeight="bold" color='red'>865+</Typography>
                  <Typography fontWeight="bold">Formally-Verified Projects</Typography>
                </Grid>

                <Grid size={6}>
                  <Typography color="red" variant="h5" fontWeight="bold">1,780+</Typography>
                  <Typography fontWeight="bold">Formally-Verified Contracts</Typography>
                </Grid>
              </Grid>

            </Grid>




          </Grid>
          {/* Secftion 4 */}
          <Grid size={12}>

            <Grid sx={{ textAlign: 'center' }} >
              <Typography variant='h4' fontWeight={"bold"}>
                Trusted By Market Leaders
              </Typography>
            </Grid>
            <Grid container sx={{
              border: '1px solid grey',
              borderRadius: '10px',
              m: 'auto',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: { xs: "column", md: 'row' },
              p: 10
            }}>


              <Grid size={{ xs: 12, md: 3 }} sx={{ borderRight: { md: '1px solid grey' }, borderBottom: { xs: '1px solid grey', md: "0px " } }}>


                <Grid>
                  <Typography variant="h5" fontWeight="bold">Sebastien Borge</Typography>
                </Grid>
                <Grid>
                  <Typography variant="h5" fontWeight="bold">Sebastien Borge</Typography>
                </Grid>




                <Grid container>
                  <Grid size={6} >
                    <Typography fontWeight="bold">COO & Co-founder</Typography>
                  </Grid>
                </Grid>

              </Grid>
              {/* ========================== */}

              <Grid size={{ xs: 12, md: 6 }}>
                <Grid>
                  <Typography fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur obcaecati, cumque ullam corrupti ad culpa soluta quis incidunt in velit voluptatem similique? Deserunt non, rem saepe eos voluptatibus natus corrupti.</Typography>

                </Grid>

              </Grid>
            </Grid>


            <Grid container spacing={1} size={12} sx={{ textAlign: 'center', mt: 1 }} >
              <Grid size={{ xs: 12, md: 2 }}>
                <Button sx={{ border: '1px solid black', borderRadius: '10px' }}>
                  Buttin A
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 2 }}>
                <Button sx={{ border: '1px solid black', borderRadius: '10px' }}>
                  Buttin A
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 2 }}>
                <Button sx={{ border: '1px solid black', borderRadius: '10px' }}>
                  Buttin A
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 2 }}>
                <Button sx={{ border: '1px solid black', borderRadius: '10px' }}>
                  Buttin A
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 2 }}>
                <Button sx={{ border: '1px solid black', borderRadius: '10px' }}>
                  Buttin A
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 2 }}>
                <Button sx={{ border: '1px solid black', borderRadius: '10px' }}>
                  Buttin A
                </Button>
              </Grid>
            </Grid>


          </Grid>
          {/* Section 5 */}
          <Grid container size={12}>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src={advantagesEn} alt="Advantages En" style={{ width: '100%' }} />

            </Grid>

            <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
              <Grid>
                <Typography variant='h3' fontWeight={"bold"}>Why Choose CertiK?                </Typography>
              </Grid>

              <Grid>
                <Typography variant='h6'>Our team of security experts has conducted thousands of audits across all major blockchain protocols. CertiK is trusted as the recommended blockchain and smart contract auditor by top exchanges like Binance , OKEx , and Huobi.

                  We audit all components of Web3 platforms. This includes projects built on blockchains like Ethereum , BNB Chain , and Polygon , to more than a dozen of these Layer 1 blockchains themselves.

                  CertiK is a pioneer in the application of advanced Formal Verification techniques to smart contract audits. This process goes a step beyond manual review to provide mathematical guarantees about the functionality of smart contract platforms.

                  Our collaborative approach to smart contract auditing ensures that your project is ready for a secure launch as soon as possible. We know that time is of the essence, and our large team of auditors can handle any job, no matter how big or small.</Typography>
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

          </Grid>
          {/* Sextion 6 */}
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
              Schedule an Audit
            </Button></Grid>
          </Grid>

          {/* Section 7 */}
          <Grid container size={12}>
            <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
              <Grid>
                <Typography variant='h3' fontWeight={"bold"}>Why Choose CertiK?                </Typography>
              </Grid>

              <Grid>
                <Typography variant='h6'>Our team of security experts has conducted thousands of audits across all major blockchain protocols. CertiK is trusted as the recommended blockchain and smart contract auditor by top exchanges like Binance , OKEx , and Huobi.

                  We audit all components of Web3 platforms. This includes projects built on blockchains like Ethereum , BNB Chain , and Polygon , to more than a dozen of these Layer 1 blockchains themselves.

                  CertiK is a pioneer in the application of advanced Formal Verification techniques to smart contract audits. This process goes a step beyond manual review to provide mathematical guarantees about the functionality of smart contract platforms.

                  Our collaborative approach to smart contract auditing ensures that your project is ready for a secure launch as soon as possible. We know that time is of the essence, and our large team of auditors can handle any job, no matter how big or small.</Typography>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src={smartContractAudit2} alt="Smart Contract Audit" style={{ width: '100%' }} />

            </Grid>


          </Grid >
          {/* Section 8*/}

          <Grid size={12} container textAlign={'center'} >
            <Grid size={12}>
              <Typography variant='h3' fontWeight={"bold"}>Smart Contract Audit Process
              </ Typography>

            </Grid>
            <Grid size={{ xs: 12, md: 10 }} m='auto'>
              <img src={processEn} alt='Process En' style={{ width: '100%' }} />
            </Grid>
          </Grid>

          {/* Section 9 */}
          <Grid size={12}>
            <Grid>
              <Grid>
                <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>How Does a Smart Contract Audit Work?
                </Typography>
              </Grid>
              <Grid>
                <Typography textAlign={"center"} variant='h6'>Every smart contract audit involves comprehensive manual review by our team of experienced security experts. Automated AI-powered review provides an additional layer of security. Formal verification is an optional further step that certifies smart contract behavior with respect to custom function specifications. This helps developers get a handle on the entire scope of their platform.
                </Typography>

              </Grid>
            </Grid>
            <Grid>
              <img src={stepsEn} alt="Steps En" style={{ width: '100%' }} />

            </Grid>
          </Grid>

          {/* Section 10 */}
          <Grid container size={12}>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src={auditReport} alt="Audit Report" style={{ width: '100%' }} />

            </Grid>
            <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
              <Grid>
                <Typography variant='h3' fontWeight={"bold"}>What’s in a Smart Contract Audit Report?                </Typography>
              </Grid>

              <Grid>
                <Typography variant='h6'>Audit reports are comprehensive and fully transparent records that contain the details of all identified vulnerabilities. These are classified by severity from Critical to Informational. Each vulnerability is accompanied by suggested remediations from our team of smart contract security experts.

                  Vulnerabilities that are addressed before launch are marked as resolved. Issues that are acknowledged but unresolved are accompanied by a description of their possible effects and the project team’s justification.

                  Projects that undergo a completed audit earn a spot on the Web3 Security Leaderboard . This gives the entire Web3 community a powerful demonstration of a project’s commitment to security.

                  Smart contract audit reports are freely available to the public. This is part of our commitment to transparency and an open-source Web3 world. An audit report is evidence that a project takes security seriously and prioritizes the safety of its users’ funds. Auditing helps Web3 projects secure their code and avoid costly errors.</Typography>
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



          </Grid >
          {/* Section 11 */}
          <Grid size={12}>
            <Grid>
              <Grid>
                <Typography textAlign={"center"} variant='h4' fontWeight={"bold"}>Our Experience

                </Typography>
              </Grid>
              <Grid>
                <Typography textAlign={"center"} variant='h6'>CertiK has audited thousands of Web3 projects and tens of thousands lines of code written in all major smart contract programming languages. We bring expertise that can only be gained from years of experience with thousands of projects to each and every audit.
                  When it comes to security, only the best will do.
                </Typography>

              </Grid>
            </Grid>
            <Grid>
              <img src={experience} alt="Experience" style={{ width: '100%' }} />

            </Grid>
          </Grid>
          {/* Section 12 */}
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


          {/* Section 13 */}
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


export default SmartAuditContract