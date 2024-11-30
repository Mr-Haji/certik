import { Box, Typography, List, ListItem, ListItemText, Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import web3SecurityAudit from "../../assets/web3SecurityAudit.svg";
import l1ChainAudit2 from "../../assets/l1ChainAudit2.svg";
import smartContractAudit2 from "../../assets/smartContractAudit2.svg";
import One from "../../assets/One.svg";
import Two from "../../assets/Two.svg";
import Three from "../../assets/Three.svg";
import Four from "../../assets/Four.svg";
import Five from "../../assets/Five.svg";
import six from "../../assets/six.svg";
import seven from "../../assets/seven.svg";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";
const ProductsDropdown = ({ ProductName }) => {
    const navigate = useNavigate()
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    let dropdownContent = null;  // Variable to store the dropdown content

    // If ProductName is "Products", show one dropdown structure
    if (ProductName === "Products") {
        dropdownContent = (
            <Grid container
                sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "500px",
                    bgcolor: "white",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    zIndex: 10,
                    padding: 2,
                    display: "flex",
                    gap: 2,
                }}
            >
                <Grid size={12}>
                    <Typography color="grey" fontSize={"15px"} fontWeight={"bold"}>Product</Typography>
                </Grid>
                <Grid spacing={2} container>
                    {/* Left Column: Product Suite */}
                    <Grid spacing={2} size={6} color={"black"}>
                        <Grid spacing={2} container >
                            <Grid container size={12}>
                                <Grid size={2}>
                                    <img src={web3SecurityAudit} alt="" style={{ width: "100%" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography fontSize={"18px"} fontWeight={"bold"}>Web3  Security  Audit</Typography>
                                </Grid>
                            </Grid>
                            <Grid ml={3} onClick={() => navigate('/Smart-Audit-Contract')} container size={12}>
                                <Grid size={2}>
                                    <img src={smartContractAudit2} alt="" style={{ width: "100%" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography fontWeight={"bold"} fontSize={"12px"}>Samrt Contract Audit</Typography>
                                    <Typography fontSize={"9px"}>Samrt Contract Audit Security Assesment</Typography>
                                </Grid>




                            </Grid>

                            <Grid ml={3} onClick={() => navigate('/L1-Chain-Audit')} container size={12}>
                                <Grid size={2}>
                                    <img src={l1ChainAudit2} alt="" style={{ width: "100%" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography fontWeight={"bold"} fontSize={"12px"}>L1 Chain Audit</Typography>
                                    <Typography fontSize={"9px"}>L1 Chain Audit Security Assesment</Typography>
                                </Grid>




                            </Grid>

                        </Grid>


                        <Grid spacing={2} container >
                            <Grid container size={12}>
                                <Grid size={2}>
                                    <img src={web3SecurityAudit} alt="" style={{ width: "100%" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography fontSize={"18px"} fontWeight={"bold"}>Web3  Security  Audit</Typography>
                                </Grid>




                            </Grid>
                            <Grid ml={3} onClick={() => navigate('/sky-net')} container size={12}>
                                <Grid size={2}>
                                    <img src={smartContractAudit2} alt="" style={{ width: "100%" }} />
                                </Grid>
                                <Grid onClick={() => navigate('/sky-net')} size={10}>
                                    <Typography fontWeight={"bold"} fontSize={"12px"}>SkyNet</Typography>
                                    <Typography fontSize={"9px"}>Samrt Contract Audit Security Assesment</Typography>
                                </Grid>
                            </Grid>
                            <Grid ml={3} container onClick={() => navigate('/Security-Store')} size={12}>
                                <Grid size={2}>
                                    <img src={l1ChainAudit2} alt="" style={{ width: "100%" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography fontWeight={"bold"} fontSize={"12px"}>Security Score </Typography>
                                    <Typography fontSize={"9px"}>L1 Chain Audit Security Assesment</Typography>
                                </Grid>




                            </Grid>
                        </Grid>
                        <Grid spacing={2} container >
                            <Grid container onClick={() => navigate('/Pen-test')} size={12}>
                                <Grid size={2}>
                                    <img src={web3SecurityAudit} alt="" style={{ width: "100%" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography fontSize={"18px"} fontWeight={"bold"}>                                Penetration Text </Typography>
                                </Grid>




                            </Grid>
                        </Grid>


                    </Grid>

                    {/* Right Column: Featured Ecosystems */}
                    <Grid container spacing={2} size={6} color={"black"}>
                        <Grid spacing={2} container >
                            <Grid container onClick={() => navigate('/sky-node')} size={12}>
                                <Grid size={2}>
                                    <img src={One} alt="" style={{ width: "30px" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography ml={2} fontSize={"18px"} fontWeight={"bold"}>Sky Node</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid spacing={2} onClick={() => navigate('/skyinsights')} container >
                            <Grid container spacing={4} size={12}>
                                <Grid size={2}>
                                    <img src={Two} alt="" style={{ width: "30px" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography ml={1} fontSize={"18px"} fontWeight={"bold"}>Sky Insights </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid spacing={2} onClick={() => navigate('/Kyc')} container >
                            <Grid container size={12}>
                                <Grid size={2}>
                                    <img src={Three} alt="" style={{ width: "30px" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography ml={3} fontSize={"18px"} fontWeight={"bold"}>KYC </Typography>
                                </Grid>




                            </Grid>
                        </Grid>
                        <Grid spacing={2} onClick={() => navigate('/bug-bounty')} container >
                            <Grid container size={12}>
                                <Grid size={2}>
                                    <img src={Four} alt="" style={{ width: "30px" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography ml={2} fontSize={"18px"} fontWeight={"bold"}>                                Bug Bounty</Typography>
                                </Grid>




                            </Grid>
                        </Grid>
                        <Grid spacing={2} onClick={() => navigate('/Incident-Response')} container >
                            <Grid container spacing={4} size={12}>
                                <Grid size={2}>
                                    <img src={Five} alt="" style={{ width: "30px" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography fontSize={"18px"} fontWeight={"bold"}>                                Incident Respone </Typography>
                                </Grid>




                            </Grid>
                        </Grid>
                        <Grid spacing={2} onClick={() => navigate('/advisory')} container >
                            <Grid spacing={4} container size={12}>
                                <Grid size={2}>
                                    <img src={six} alt="" style={{ width: "30px" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography fontSize={"18px"} fontWeight={"bold"}>                                Advisory Service </Typography>
                                </Grid>




                            </Grid>
                        </Grid>
                        <Grid spacing={2} onClick={() => navigate('/formal-verification')} container >
                            <Grid spacing={4} container size={12}>
                                <Grid size={2}>
                                    <img src={seven} alt="" style={{ width: "30px" }} />
                                </Grid>
                                <Grid size={10}>
                                    <Typography fontSize={"18px"} fontWeight={"bold"}>                                formal verification </Typography>
                                </Grid>




                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        );
    } else {
        // Else block for when ProductName is not "Products"
        dropdownContent = (
            <Box
                sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "500px",
                    bgcolor: "white",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    zIndex: 10,
                    padding: 2,
                    display: "flex",
                    gap: 2,
                }}
            >
                {/* Left Column: Other Content */}
                <Grid container direction="column" xs={12} sm={6} color="black">
                    <Typography sx={{ fontWeight: "bold" }}>
                        Other Content Suite
                    </Typography>
                    <List sx={{ padding: 0 }}>
                        <ListItem button>
                            <ListItemText primary="Example Item 1" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Example Item 2" />
                        </ListItem>
                    </List>
                </Grid>

                {/* Right Column: Featured Ecosystems */}
                <Grid container direction="column" xs={12} sm={6} color="black">
                    <Typography sx={{ fontWeight: "bold" }}>
                        Featured Ecosystems
                    </Typography>
                    <List sx={{ padding: 0 }}>
                        <ListItem button>
                            <ListItemText primary="BNB Chain" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Ethereum" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Bitcoin" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Solana" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="TON" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Cosmos" />
                        </ListItem>
                    </List>
                </Grid>
            </Box>
        );
    }

    return (
        <Box
            sx={{ position: "relative", display: "inline-block" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Trigger */}
            <Typography
                variant="h6"
                sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: { xs: "none", sm: "block" },
                }}
            >
                {ProductName}
                {isHovering ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Typography>

            {/* Dropdown Content */}
            {isHovering && dropdownContent}
        </Box>
    );
};

export default ProductsDropdown;
