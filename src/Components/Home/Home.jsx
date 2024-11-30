import { ArrowRightAlt, TextFieldsOutlined } from '@mui/icons-material';
import { Button, Typography, TextField, Grid2 as Grid } from '@mui/material';
import React from 'react';
import HomeTabel from '../../../public/assets/HomeTabel.png';
import xrpl from '../../../public/assets/xrpl.svg';
import wemix from '../../../public/assets/wemix.svg';
import keep from '../../../public/assets/keep.svg';
import kaia from '../../../public/assets/kaia.svg';
import walletsGraphic from '../../../public/assets/walletsGraphic.webp';
import blockchainsGraphic from '../../../public/assets/blockchainsGraphic.webp';
import exsat from '../../../public/assets/exsat.svg';
import bnb from '../../../public/assets/bnb.svg';
import ventures8 from '../../../public/assets/ventures8.svg';
import formalVerification7 from '../../../public/assets/formalVerification7.svg';
import penTest6 from '../../../public/assets/penTest6.svg';
import menuSkynode5 from '../../../public/assets/menuSkynode5.svg';
import skyInsights4 from '../../../public/assets/skyInsights4.svg';
import bugBounty3 from '../../../public/assets/bugBounty3.svg';
import kyc2 from '../../../public/assets/kyc2.svg';
import skynet1 from '../../../public/assets/skynet1.svg';
import { useNavigate } from 'react-router-dom';
import CarouselComponent from '../Common/Carousel';

const Home = () => {




  return (
    <>
      <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
        <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>

          {/* Section 1 */}

          <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
            <Grid container size={{ xs: 12, md: 6 }} >

              <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                Provable Trust For All.

              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                Elevating Your Entire Web3 Journey

              </Typography>
              <Typography sx={{ color: 'white' }}>
                CertiK is Web3's leading smart contract auditor and provides a comprehensive suite of tools to secure the industry at scale.

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
                  Search bhi lgy ga  Request A Certik Audit
                </Button>
              </Grid>


            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src={HomeTabel} alt="Smart Contract Audit" style={{ width: '100%' }} />

            </Grid>
          </Grid>

          {/* Section 2 */}
          {/* Left Section */}
          <Grid size={{ xs: 12, md: 6 }}

            sx={{
              p: 2,
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              width: '45%',

              height: 'auto' // Let height adjust based on content
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Code Security Audits
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}
                textAlign="center"

              >
                <Typography fontWeight={'bold'} >Smart Contract Audit</Typography>
                <img src={"assets/smartContractsGraphic.webp"} style={{ width: '100%' }} />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}
                textAlign="center"

              >
                <Typography fontWeight={'bold'} >Blockchain L1/L2 Audit</Typography>
                <img src={blockchainsGraphic} style={{ width: '100%' }} />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}
                textAlign="center"

              >
                <Typography fontWeight={'bold'}  >Wallet Audit</Typography>
                <img src={walletsGraphic} style={{ width: '100%' }} />
              </Grid>
            </Grid>
          </Grid>

          {/* Right Section 1 */}
          <Grid size={{ xs: 12, md: 3 }}
            container
            spacing={2}
          >
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 1
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={skynet1} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid sx={{ pl: 1 }}>

                  <Typography fontWeight="bold">Skynet</Typography>
                </Grid>
                <Grid sx={{ pl: 1 }}>

                  <Typography variant="body2">Security Score & Ranking</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 1,
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={kyc2} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography fontWeight="bold">KYC</Typography>
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography variant="body2">Team Identification Verification</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 1,
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={bugBounty3} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography fontWeight="bold">Bug Bounty</Typography>
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography variant="body2">Open Source Bug Detection</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 1,
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={skyInsights4} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography fontWeight="bold">Sky Insights</Typography>
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography variant="body2">Compliance,AML and Risk Managment </Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
          {/* //   Right Section 2 */}
          <Grid size={{ xs: 12, md: 3 }}
            container
            spacing={2}
          >
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 1,
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={menuSkynode5} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography fontWeight="bold">SkyNode</Typography>
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography variant="body2">Powering Blockchain Integrity</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 1,
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={penTest6} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography fontWeight="bold">PenTesting</Typography>
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography variant="body2">In-Depth Attack Simulation </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 1,
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={formalVerification7} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography fontWeight="bold">Formal Verification</Typography>
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography variant="body2">Web3 Mathematical Gurantees</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 1,
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={ventures8} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography fontWeight="bold">CertiK Ventures</Typography>
                </Grid>
                <Grid sx={{ pl: 1 }}>
                  <Typography variant="body2">Investment & Support For Growth with builders  </Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>


          <Grid size={12}>
            <CarouselComponent />
          </Grid>
          {/* Section 4 */}

          <Grid size={12}
            container
          >
            {/* Title Section */}
            <Grid size={12}>
              <Typography variant="h4" fontWeight="bold" textAlign={"center"}>
                Qualification
              </Typography>
            </Grid>

            {/* Grid items for each qualification */}
            <Grid container size={12}>
              <Grid container
                size={{ xs: 12, md: 4 }}
                sx={{
                  bgcolor: 'white',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 10px grey',
                  p: 2,
                }}
              >
                <Grid>
                  <img src={"assets/smart-contracts-graphic.webp"} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid xs sx={{ pl: 2 }}>
                  <Typography fontWeight="bold">Name</Typography>
                  <Typography variant="body2">Instruction</Typography>
                </Grid>
              </Grid>

              <Grid container
                size={{ xs: 12, md: 4 }}
                sx={{
                  bgcolor: 'white',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 10px grey',
                  p: 2,
                }}
              >
                <Grid>
                  <img src={"assets/smart-contracts-graphic.webp"} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid xs sx={{ pl: 2 }}>
                  <Typography fontWeight="bold">Name</Typography>
                  <Typography variant="body2">Instruction</Typography>
                </Grid>
              </Grid>

              <Grid container
                size={{ xs: 12, md: 4 }}
                sx={{
                  bgcolor: 'white',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 10px grey',
                  p: 2,
                }}
              >
                <Grid>
                  <img src={"assets/smart-contracts-graphic.webp"} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid xs sx={{ pl: 2 }}>
                  <Typography fontWeight="bold">Name</Typography>
                  <Typography variant="body2">Instruction</Typography>
                </Grid>
              </Grid>

            </Grid>

          </Grid>
          {/* section 5 */}
          <Grid container size={12}>
            <Grid size={{ xs: 12, md: 8 }} >
              <Typography color='black' variant='h4' fontWeight={"bold"}>
                Explore the CertiK Skynet
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}><Button
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
              Get A Free Quote
            </Button></Grid>
            <Grid size={{ xs: 12, md: 2 }}><Button
              fullWidth
              sx={{
                border: '1px solid black',
                color: 'black',
                // fontWeight: 'bold',
                fontSize: '18px',
                borderRadius: '4px',
                textTransform: 'none',
                '&:hover': { bgcolor: '#c43833' },
              }}
            >
              Visit Skynet <ArrowRightAlt />
            </Button></Grid>
          </Grid>
          {/* Left Section */}
          <Grid size={{ xs: 12, md: 8 }}

            sx={{
              p: 2,
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              width: '45%',

              height: 'auto' // Let height adjust based on content
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Code Security Audits
            </Typography>
            <Grid container spacing={2}>
              {['Smart Contract Audit', 'Blockchain L1/L2 Audit', 'Wallet Audit'].map((item, index) => (
                <Grid
                  key={index}
                  xs={4}
                  textAlign="center"
                  sx={{
                    height: '120px', // Adjust height for uniformity
                  }}
                >
                  {/* <img src={"assets/smart-contracts-graphic.webp"}  style={{ width: '80px', height: '80px' }} /> */}
                  <Typography>{item}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Section 1 */}
          <Grid size={{ xs: 12, md: 4 }}
            container
            spacing={2}
          >
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 2,
              height: '120px', // Fixed height for uniform design
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={"assets/smart-contracts-graphic.webp"} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid xs sx={{ pl: 2 }}>
                  <Typography fontWeight="bold">Name</Typography>
                  <Typography variant="body2">Instruction</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 2,
              height: '120px', // Fixed height for uniform design
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={"assets/smart-contracts-graphic.webp"} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid xs sx={{ pl: 2 }}>
                  <Typography fontWeight="bold">Name</Typography>
                  <Typography variant="body2">Instruction</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12} sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 2,
              height: '120px', // Fixed height for uniform design
            }}>

              <Grid container alignItems="center">
                <Grid>
                  <img src={"assets/smart-contracts-graphic.webp"} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid>
                <Grid xs sx={{ pl: 2 }}>
                  <Typography fontWeight="bold">Name</Typography>
                  <Typography variant="body2">Instruction</Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

          {/* Section 6 */}
          <Grid size={12}
            container
          >
            {/* Title Section */}
            <Grid container size={12}>
              <Grid size={{ xs: 12, md: 9 }} >
                <Typography color='black' variant='h4' fontWeight={"bold"}>
                  Selected validator nodes supported by SkyNode
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}><Button
                fullWidth
                sx={{
                  border: '2px solid black',
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  px: 2,
                  borderRadius: '6px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#c43833' },
                }}
              >
                Visit SkyNode     </Button></Grid>

            </Grid>
            {/* Grid items for each qualification */}
            <Grid container size={12}>
              <Grid size={{ xs: 12, md: 2 }} >
                <img src={bnb} alt="icon" style={{ width: '100%' }} />
              </Grid>
              <Grid size={{ xs: 12, md: 2 }} >
                <img src={exsat} alt="icon" style={{ width: '100%' }} />
              </Grid>
              <Grid size={{ xs: 12, md: 2 }} >
                <img src={kaia} alt="icon" style={{ width: '100%' }} />
              </Grid>
              <Grid size={{ xs: 12, md: 2 }} >
                <img src={keep} alt="icon" style={{ width: '100%' }} />
              </Grid>
              <Grid size={{ xs: 12, md: 2 }} >
                <img src={wemix} alt="icon" style={{ width: '100%' }} />
              </Grid>
              <Grid size={{ xs: 12, md: 2 }} >
                <img src={xrpl} alt="icon" style={{ width: '100%' }} />
              </Grid>

            </Grid>

          </Grid>

          {/* Section 3 */}
          <Grid size={12}
            sx={{ p: 2, bgcolor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
            <Grid size={{ xs: 12, md: 6 }} >
              <Typography color='white' variant='h4' fontWeight={"bold"}>
                SkyInsights: Compliance, AML/KYT and Risk Management</Typography>
              <Button
                fullWidth
                sx={{
                  width: '50%',
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
                Learn More
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }} >
              <img src={"assets/skyInsightsBanner.webp"} alt="icon" style={{ width: '100%' }} />
            </Grid>
          </Grid>







        </Grid>







      </Grid >
    </>

  );
};

export default Home;
