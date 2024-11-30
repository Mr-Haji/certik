import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import Section14 from "../../public/assets/Section14.svg"
import Section11 from "../../public/assets/Section11.svg"
import Section12 from "../../public/assets/Section12.svg"
import Section13 from "../../public/assets/Section13.svg"
import skynodeBanner from "../../public/assets/skynodeBanner.avif"
import skynode1 from "../../public/assets/skynode1.avif"
import skynode2 from "../../public/assets/skynode2.avif"
import skynode3 from "../../public/assets/skynode3.avif"
import skynode4 from "../../public/assets/skynode4.avif"
import skynode5 from "../../public/assets/skynode5.avif"
import skynode6 from "../../public/assets/skynode6.avif"
import xrpl from "../../public/assets/xrpl.svg"
import wemix from "../../public/assets/wemix.svg"
import keep from "../../public/assets/keep.svg"
import kaia from "../../public/assets/kaia.svg"
import exsat from "../../public/assets/exsat.svg"
import bnb from "../../public/assets/bnb.svg"
const SkyNode = () => {
    return (
        <>
           <Grid sx={{ width: '100%', justifyContent: 'center', display: 'flex', }}>
           <Grid container spacing={3} sx={{ width: '80%', mb: 2 }}>
                    {/* Section 1 */}

                    <Grid container size={12} sx={{ border: '1px solid black', bgcolor: '#171921' }}>
                        <Grid container size={{ xs: 12, md: 6 }} >

                            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                                CertiK SkyNode Service: Powering Blockchain Integrity
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                                CertiK is advancing its leadership in blockchain security by expanding into node services with its new CertiK SkyNode Service. By becoming validators across multiple public blockchain ecosystems, CertiK aims to enhance network reliability, security, and performance. This strategic initiative builds on our proven expertise in security auditing, ensuring that blockchain operations remain efficient, trustworthy, and secure.

                            </Typography>


                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={skynodeBanner} alt="Sky Nnode Banner" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 2 */}
                    <Grid container size={12}>
                        <Grid>
                            <Typography variant='h5' fontWeight={"bold"}>Why Choose CertiK SkyNode Service?

                            </Typography>
                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 12 }}>
                            <Grid size={{ xs: 12, md: 2 }} >
                                <img src={Section11} alt='Pic' style={{ width: '50%' }} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 10 }} >
                                <Grid>
                                    <Typography variant='h5' fontWeight={"bold"}>Unmatched Security Expertise
                                    </Typography>
                                </Grid>

                                <Grid>
                                    <Typography variant='h6'>
                                        With a proven track record in blockchain security audits and node service penetration testing, CertiK brings an unparalleled level of security to node operations. Our services are backed by cutting-edge technology and a dedicated team of experts committed to maintaining the highest standards of integrity and reliability.</Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 12 }}>
                            <Grid size={{ xs: 12, md: 2 }} >
                                <img src={Section12} alt='Pic' style={{ width: '50%' }} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 10 }} >
                                <Grid>
                                    <Typography variant='h5' fontWeight={"bold"}>Multi-Chain Support              </Typography>
                                </Grid>

                                <Grid>
                                    <Typography variant='h6'>
                                        CertiK SkyNode Service supports a wide range of public blockchain networks, offering flexibility and scalability for diverse ecosystem requirements. By integrating with multiple blockchains, we provide our clients with comprehensive solutions tailored to their specific needs.</Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 12 }}>
                            <Grid size={{ xs: 12, md: 2 }} >
                                <img src={Section13} alt='Pic' style={{ width: '50%' }} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 10 }} >
                                <Grid>
                                    <Typography variant='h5' fontWeight={"bold"}>Enhanced Network Performance          </Typography>
                                </Grid>

                                <Grid>
                                    <Typography variant='h6'>

                                        Our SkyNode Services are designed to optimize network performance, ensuring faster transaction processing and reduced latency. CertiK’s strategic infrastructure deployment guarantees high availability and resilience against potential threats and downtimes.</Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 12 }}>
                            <Grid size={{ xs: 12, md: 2 }} >
                                <img src={Section14} alt='Pic' style={{ width: '50%' }} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 10 }} >
                                <Grid>
                                    <Typography variant='h5' fontWeight={"bold"}>Commitment to Transparency              </Typography>
                                </Grid>

                                <Grid>
                                    <Typography variant='h6'>Transparency is at the core of our operations. CertiK provides real-time monitoring and reporting tools, enabling users to track node performance and security status. Our commitment to openness fosters trust and accountability in all of our services.</Typography>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>

                    {/* Secftion 3 */}
                    <Grid size={12}>

                        <Grid sx={{ textAlign: 'center' }} >
                            <Typography variant='h4' fontWeight={"bold"}>
                                Our Best Practices

                            </Typography>
                        </Grid>
                        <Grid container sx={{
                            flexDirection: { xs: "column", md: 'row' },
                        }}>

                            <Typography textAlign={"center"} variant='h6'>As of now, the SkyNode platform has been supporting validator or full nodes for more than 11 different chains, with these nodes successfully operating for durations ranging from 4 months to 5 years. The validator nodes hosted on the SkyNode platform have been securing tokens valued more than $12 million.

                                As part of the effort to contribute our technical capabilities in blockchain client source code, we have extensively customized the client code for at least 4 different chains to ensure high efficiency and secure on-chain data serving. With this customization, the latency for fetching historical token balances has been reduced to 5% of the original duration, while resource consumption has decreased by 90%.</Typography>
                        </Grid>



                    </Grid>
                     {/* Section 4 */}
                     <Grid size={12}>

<Grid sx={{ textAlign: 'center' }} >
    <Typography variant='h4' fontWeight={"bold"}>
    Selected Validator Nodes
    </Typography>
</Grid>
<Grid container  size={12} sx={{ display:'flex',justifyContent:'space-around', mt: 1 }} >
    <Grid size={{ xs: 12, md:1}}>
        <img src={bnb} alt='bnb' style={{width:'100%',height:'60px'}} />
    </Grid>
    <Grid size={{ xs: 12, md:1}}>
        <img src={exsat} alt='exsat' style={{width:'100%',height:'60px'}} />
    </Grid>
    <Grid size={{ xs: 12, md:1}}>
        <img src={kaia} alt='kaia' style={{width:'100%',height:'60px'}} />
    </Grid>
    <Grid size={{ xs: 12, md:1}}>
        <img src={keep} alt='keep' style={{width:'100%',height:'60px'}} />
    </Grid>
    <Grid size={{ xs: 12, md:1}}>
        <img src={wemix} alt='wemix' style={{width:'100%',height:'60px'}} />
    </Grid>
    <Grid size={{ xs: 12, md:1}}>
        <img src={xrpl} alt='xrpl' style={{width:'100%',height:'60px'}} />
    </Grid>
  
   
</Grid>


</Grid>


                    {/* Secftion 5 */}
                    <Grid size={12}>

                        <Grid sx={{ textAlign: 'center' }} >
                            <Typography variant='h4' fontWeight={"bold"}>
                                Key Features



                            </Typography>
                        </Grid>
                        <Grid sx={{
                            flexDirection: { xs: "column", md: 'row' },
                        }}>

                            <Typography textAlign={"center"} variant='h6'>Empowering Blockchain Operations with Security, Performance, and Scalability

                            </Typography>
                        </Grid>



                    </Grid>
                    {/* Section 6*/}
                    <Grid container size={12}>


                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Advanced Security Protocols              </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    We implement the latest security measures, including encryption and multi-layered defenses, vulnerability scans, and node penetration testing services, to protect against cyber threats.</Typography>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={skynode1} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 7 */}
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={skynode2} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>

                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>24/7 Monitoring and Support         </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    Round-the-clock surveillance and support ensure seamless node operations and rapid response to any relevant issues. Our crystal monitoring dashboard displays detailed, real time blockchain running information, such as transactions, active wallets, node connections, and secured RPCs.</Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                    {/* Section 8 */}
                    <Grid container size={12}>


                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Comprehensive Validator Performance and Staking Management Platform           </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    Our detailed validator management goes beyond monitoring CPU, memory, and disk usage. It includes tracking the validator’s performance, such as block validation details, commission rate, various income streams generated by the validator, and the earnings of staking participants. It also covers historical latency tracking, duration of any delays, and monitoring for validator upgrades. CertiK offers semi-automated or automated validator upgrades, and user-friendly staking and community governance features. By creating a comprehensive validator management platform, CertiK lays the foundation for managing its own validators with the potential to expand into validator hosting services for additional revenue streams.</Typography>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={skynode3} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                    {/* Section 9 */}
                    <Grid container size={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={skynode4} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Advanced Customizable API Data Services        </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>
                                    CertiK can build on its code auditing experience to optimize API code, ensuring data delivery with reduced CPU and memory usage, thereby lowering operational costs. This approach is especially effective for Ethereum-based services. CertiK's data management platform can also provide tailored data services, such as detailed token and native balance data per block.</Typography>
                            </Grid>

                        </Grid>


                    </Grid>
                    {/* Section 10 */}
                    <Grid container size={12}>
                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>                                Scalable Solutions          </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>

                                    Our node services can easily scale to accommodate increased network demand.</Typography>
                            </Grid>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={skynode5} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>



                    </Grid>
                    {/* Section 11 */}
                    <Grid container size={12}>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src={skynode6} alt='SkyNode' style={{ width: '100%' }} />

                        </Grid>
                        <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                            <Grid>
                                <Typography variant='h3' fontWeight={"bold"}>Global Infrastructure             </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant='h6'>

                                    A distributed network of nodes across multiple regions ensures reliability and geographic redundancy.</Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                    {/* Secftion 12 */}
                    <Grid size={12}>

                        <Grid sx={{ textAlign: 'center' }} >
                            <Typography variant='h4' fontWeight={"bold"}>
                            Conclusion




                            </Typography>
                        </Grid>
                        <Grid sx={{
                            flexDirection: { xs: "column", md: 'row' },
                        }}>

                            <Typography textAlign={"center"} variant='h6'>
By expanding into node operations, CertiK reinforces its commitment to fortifying the blockchain ecosystem. With an unwavering focus on security, performance, and transparency, we deliver node services designed to empower your blockchain operations with reliability and efficiency. Choose CertiK as your trusted partner to safeguard your network and lead the change toward a more decentralized and innovative future
                            </Typography>
                        </Grid>



                    </Grid>
                </Grid>
            </Grid >
        </>
    );
};


export default SkyNode