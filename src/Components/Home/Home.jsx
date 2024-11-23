import { TextFieldsOutlined } from '@mui/icons-material';
import { Button, Grid, Typography, TextField, Grid2 } from '@mui/material';
import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import smartContractAudit from '../../assets/smart-contracts-graphic.webp';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Grid2 container spacing={4} sx={{ px: 2, py: 4 }} alignItems="center" justifyContent={"center"}>
        {/* Left Section */}
        <Grid2 xs={12} md={6} sx={{ width: '50%', p: 2 }}>
          <Typography variant="h5" fontWeight="bold">
            Provable Trust For All.
          </Typography>
          <Typography variant="h3" fontWeight="bold" sx={{ my: 2 }}>
            Elevating Your Entire Web3 Journey.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            CertiK is Web3's leading smart contract auditor and provides a comprehensive suite of tools to secure the industry at scale.
          </Typography>
          <Grid2 container spacing={2} alignItems="center">
            <Grid2 xs={12} sm={8}>
              <Grid2 container alignItems="center" spacing={1} sx={{ border: '1px solid #000', borderRadius: '10px', p: 1 }}>
                <Grid2>
                  <SearchIcon fontSize="large" />
                </Grid2>
                <Grid2 xs>
                  <TextField fullWidth placeholder="Search Project By Name/Token.." variant="standard" />
                </Grid2>
              </Grid2>
            </Grid2>
            <Grid2 xs={12} sm={4}>
              <Button
                fullWidth
                sx={{
                  bgcolor: '#e5453d',
                  color: 'white',
                  px: 3,
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#c43833' },
                }}
              >
                Talk To Expert
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>

        {/* Right Section (Image Placeholder) */}
        <Grid2 xs={12} md={6} width={"45%"}>
          <img src={smartContractAudit} alt="Smart Contract Audit" style={{ width: '100%' }} />
        </Grid2>
      </Grid2>

      {/* Code Security Audits Section */}
      <Grid2
        container
        spacing={1}
        sx={{ px: 2, py: 4, display: 'flex', flexDirection: 'row', justifyContent: 'center', }}
      >
        {/* Left Section */}
        <Grid2
          xs={12}
          md={4}
          sm={4}
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
          <Grid2 container spacing={2}>
            {['Smart Contract Audit', 'Blockchain L1/L2 Audit', 'Wallet Audit'].map((item, index) => (
              <Grid2
                key={index}
                xs={4}
                textAlign="center"
                sx={{
                  height: '120px', // Adjust height for uniformity
                }}
              >
                <img src={smartContractAudit} alt={item} style={{ width: '80px', height: '80px' }} />
                <Typography>{item}</Typography>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>

        {/* Right Section 1 */}
        <Grid2
          xs={12}
          md={4}
          sm={4}
          container
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: '25%',

          }}
        >
          {[1, 2, 3].map((item, index) => (
            <Grid2
              key={index}
              xs={12}
              sm={6}
              sx={{
                bgcolor: 'white',
                borderRadius: '10px',
                boxShadow: '2px 2px 10px grey',
                p: 2,
                height: '120px', // Fixed height for uniform design
                width: '100%' // Full width within its column
              }}
            >
              <Grid2 container alignItems="center">
                <Grid2>
                  <img src={smartContractAudit} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid2>
                <Grid2 xs sx={{ pl: 2 }}>
                  <Typography fontWeight="bold">Name</Typography>
                  <Typography variant="body2">Instruction</Typography>
                </Grid2>
              </Grid2>
            </Grid2>
          ))}
        </Grid2>

        {/* Right Section 2 */}
        <Grid2
          xs={12}
          md={4}
          sm={4}
          container
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: '25%',
          }}
        >
          {[1, 2, 3].map((item, index) => (
            <Grid2
              key={index}
              xs={12}
              sm={6}
              sx={{
                bgcolor: 'white',
                borderRadius: '10px',
                boxShadow: '2px 2px 10px grey',
                p: 2,
                height: '120px', // Fixed height for uniform design
                width: '100%' // Full width within its column
              }}
            >
              <Grid2 container alignItems="center">
                <Grid2>
                  <img src={smartContractAudit} alt="icon" style={{ width: '30px', height: '30px' }} />
                </Grid2>
                <Grid2 xs sx={{ pl: 2 }}>
                  <Typography fontWeight="bold">Name</Typography>
                  <Typography variant="body2">Instruction</Typography>
                </Grid2>
              </Grid2>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>


      {/* ============================ */}

      {/* Qualification Section */}

      <Grid2
        container
        spacing={4}
        sx={{
          px: 2,
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center the content horizontally
        }}
      >
        {/* Title Section */}
        <Grid2 xs={12} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Qualification
          </Typography>
        </Grid2>

        {/* Grid items for each qualification */}
        <Grid2 sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 2,
          width: '95%'
        }}>

          {[1, 2, 3].map((item, index) => (
            <Grid2
              key={index}
              xs={12}
              sm={4}
              md={4}
              sx={{
                width: '100%',
                height: '300px',
                bgcolor: 'white',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: '10px',
                boxShadow: '2px 2px 10px grey',
                p: 2,
                mb: 2, // Add bottom margin for spacing between items
                alignItems: 'center', // Ensure items are aligned in the center
                justifyContent: 'flex-start', // Align items to the left for better layout
              }}
            >
              <Grid2>
                <img src={smartContractAudit} alt="icon" style={{ width: '30px', height: '30px' }} />
              </Grid2>
              <Grid2 xs sx={{ pl: 2 }}>
                <Typography fontWeight="bold">Name</Typography>
                <Typography variant="body2">Instruction</Typography>
              </Grid2>
            </Grid2>
          ))}
        </Grid2>

      </Grid2>

      {/* Carosel */}

      <Grid2
        container
        spacing={4}
        sx={{
          px: 2,
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center the content horizontally
        }}
      >
        {/* Title Section */}
        <Grid2 xs={12} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Slider
          </Typography>
        </Grid2>

        {/* Grid items for each qualification */}
        <Grid2 sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 2,
          width: '95%'
        }}>

          <Grid2
            xs={12}
            sm={4}
            md={4}
            sx={{
              width: '100%',
              height: '300px',
              bgcolor: 'white',
              display: 'flex',
              flexDirection: 'row',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              p: 2,
              mb: 2, // Add bottom margin for spacing between items
              alignItems: 'center', // Ensure items are aligned in the center
              justifyContent: 'flex-start', // Align items to the left for better layout
            }}
          >
            <Grid2>
              <img src={smartContractAudit} alt="icon" style={{ width: '30px', height: '30px' }} />
            </Grid2>
            <Grid2 xs sx={{ pl: 2 }}>
              <Typography fontWeight="bold">Name</Typography>
              <Typography variant="body2">Instruction</Typography>
            </Grid2>
          </Grid2>
        </Grid2>

      </Grid2>

      {/* Explore Section */}
      <Grid2
        container
        spacing={4}
        sx={{
          px: 2,
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center the content horizontally
        }}
      >
        <Grid2 xs={12} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Explore the CertiK Skynet
          </Typography>
        </Grid2>
        <Grid2
          container
          spacing={1}
          sx={{ px: 2, py: 4, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
        >
          {/* Left Section */}
          <Grid2
            xs={12}
            md={4}
            sm={4}
            sx={{
              p: 2,
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '2px 2px 10px grey',
              width: '60%',

              height: 'auto' // Let height adjust based on content
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Code Security Audits
            </Typography>
            <Grid2 container spacing={2}>
              {['Smart Contract Audit', 'Blockchain L1/L2 Audit', 'Wallet Audit'].map((item, index) => (
                <Grid2
                  key={index}
                  xs={4}
                  textAlign="center"
                  sx={{
                    height: '120px', // Adjust height for uniformity
                  }}
                >
                  <img src={smartContractAudit} alt={item} style={{ width: '80px', height: '80px' }} />
                  <Typography>{item}</Typography>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>

          {/* Right Section 1 */}
          <Grid2
            xs={12}
            md={4}
            sm={4}
            container
            spacing={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: 'auto',
              width: '35%',

            }}
          >
            {[1, 2, 3].map((item, index) => (
              <Grid2
                key={index}
                xs={12}
                sm={6}
                sx={{
                  bgcolor: 'white',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 10px grey',
                  p: 2,
                  height: '120px', // Fixed height for uniform design
                  width: '100%' // Full width within its column
                }}
              >
                <Grid2 container alignItems="center">
                  <Grid2>
                    <img src={smartContractAudit} alt="icon" style={{ width: '30px', height: '30px' }} />
                  </Grid2>
                  <Grid2 xs sx={{ pl: 2 }}>
                    <Typography fontWeight="bold">Name</Typography>
                    <Typography variant="body2">Instruction</Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            ))}
          </Grid2>

        </Grid2>


      </Grid2>
      {/* Banner Section */}
      <Grid2 container  sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid2
          xs={12}
          sm={4}
          md={4}
          sx={{
            width: '90%',
            height: '300px',
            bgcolor: 'white',
            borderRadius: '10px',
            boxShadow: '2px 2px 10px grey',
            p: 2,
            mb: 2, // Add bottom margin for spacing between items
            alignItems: 'center', // Ensure items are aligned in the center
            justifyContent: 'center', // Align items to the left for better layout
          }}
        >
          <Grid2>
            <img src={smartContractAudit} alt="icon" style={{ width: '30px', height: '30px' }} />
          </Grid2>
          <Grid2 xs sx={{ pl: 2 }}>
            <Typography fontWeight="bold">Name</Typography>
            <Typography variant="body2">Instruction</Typography>
          </Grid2>
        </Grid2></Grid2>
    </>
  );
};

export default Home;


