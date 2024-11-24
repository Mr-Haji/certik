import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import HeaderPic from "../assets/smartContractAudit.webp"
import AccurateFindings from "../assets/accurate-findings.svg"
import UnparalleledFlexibility from "../assets/unparalleled-flexibility.svg"
import ActionableInsights from "../assets/actionable-insights.svg"
const SmartAuditContract = () => {
  return (
    <>
      <Grid sx={{ border: '1px solid black', bgcolor: 'pink', width: '100%', justifyContent: 'center', display: 'flex' }}>
        {/* <Grid container sx={{ border: '1px solid black', bgcolor: 'red' ,width:'80%'}}>


        <Grid container size={{xs:12,sm:4,md:6}} sx={{ border: '1px solid black', bgcolor: 'yellow',display:'flex',flexDirection:'row',justifyContent:'center'
         }}>
        <Grid  size={{xs:12,sm:4,md:6}} sx={{ border: '1px solid black', bgcolor: 'white', }}>
          asd
        </Grid>
        <Grid  size={{xs:12,sm:4,md:6}} sx={{ border: '1px solid black', bgcolor: 'white', }}>
          asd
        </Grid>
        <Grid  size={{xs:12,sm:4,md:6}} sx={{ border: '1px solid black', bgcolor: 'white', }}>
          asd
        </Grid>
        <Grid  size={{xs:12,sm:4,md:6}} sx={{ border: '1px solid black', bgcolor: 'white', }}>
          asd
        </Grid>
        </Grid>



        <Grid size={{xs:12,sm:4,md:6}} sx={{ border: '1px solid black', bgcolor: 'green' }}>
          asd
        </Grid>


        <Grid size={{xs:12,sm:4,md:6}} sx={{ border: '1px solid black', bgcolor: 'blue' }}>
          asd
        </Grid>


        <Grid size={{xs:12,sm:4,md:6}} sx={{ border: '1px solid black', bgcolor: 'red' }}>
          asd
        </Grid>
      </Grid> */}

        <Grid container spacing={3} sx={{ border: '1px solid black', width: '80%' }}>

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
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            3
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            4
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            5
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            6
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            7
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            8
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            9
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            10
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            11
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            12
          </Grid>
          <Grid size={12} sx={{ border: '1px solid black', bgcolor: 'red' }}>
            13
          </Grid>
        </Grid>







      </Grid>
    </>
  );
};


export default SmartAuditContract