import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@mui/material";
import { Grid2 as Grid } from "@mui/material"; // For responsive Grid
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CategoryCard from "./CategoryCard.jsx"; // Ensure this component is implemented correctly
import { useNavigate } from "react-router-dom"; // Used for navigation (if needed)

// Importing images
import LogoAntGroup from "../../Pics/LogoAntGroup.png";
import LogoLine from "../../Pics/LogoLine.png";
import LogoOkx from "../../Pics/LogoOkx.png";
import LogoDelphinusLab from "../../Pics/LogoDelphinusLab.png";
import LogoApple from "../../Pics/LogoApple.png";
import LogoSui from "../../Pics/LogoSui.png";
import LogoTon from "../../Pics/LogoTon.png";
import LogoSei from "../../Pics/LogoSei.png";
import LogoSamsung from "../../Pics/LogoSamsung.png";
import LogoRipple from "../../Pics/LogoRipple.png";

// Slider Data
const SlidesData = [
    {
        code: "LogoApple",
        image: LogoApple,
        id: "1",  
        CategoryDes: "CertiK was recognized five times by Apple for identifying critical vulnerabilities in iOS, iPadOS, macOS, and watchOS.",
    },
    {
        code: "LogoDelphinusLab",
        image: LogoDelphinusLab,
        id: "2",
        CategoryDes: "Delphinus Lab and CertiK partnered to enhance zkWasm security. CertiK completed the first formal proof of a zero-knowledge proof VM circuit.",
    },
    {
        code: "LogoOkx",
        image: LogoOkx,
        id: "3",
        CategoryDes: "CertiK and OKX partner to enhance security across OKX's ecosystem, boosting trust and setting new security standards.",
    },
    {
        code: "LogoLine",
        image: LogoLine,
        id: "4",
        CategoryDes: "CertiK and OKX partner to enhance security across OKX's ecosystem, boosting trust and setting new security standards.",
    },
    {
        code: "LogoAntGroup",
        image: LogoAntGroup,
        id: "5",
        CategoryDes: "CertiK has successfully completed the formal verification of HyperEnclave’s core components, and the paper was accepted by ASPLOS'24.",
    },
    {
        code: "LogoRipple",
        image: LogoRipple,
        id: "6",
        CategoryDes: "CertiK has successfully completed a comprehensive security audit for XLS-30d, an innovative AMM built on the XRP Ledger (XRPL).",
    },
    {
        code: "LogoSamsung",
        image: LogoSamsung,
        id: "7",
        CategoryDes: "Samsung has acknowledged CertiK's contributions to significantly enhancing the security of its mobile blockchain solutions.",
    },
    {
        code: "LogoTon",
        image: LogoTon,
        id: "8",
        CategoryDes: "CertiK's audits significantly enhanced TON's security, including formal verification of its consensus module, ensuring functionality and robustness.",
    },
    {
        code: "LogoSei",
        image: LogoSei,
        id: "9",
        CategoryDes: "CertiK’s comprehensive audit of the SEI Protocol identified and resolved critical issues, safeguarding the network before its mainnet launch.",
    },
    {
        code: "LogoSui",
        image: LogoSui,
        id: "10",
        CategoryDes: "CertiK earned Sui's top bug bounty of $600k for uncovering a critical vulnerability that had the potential to shut down the network.",
    },
];

const CarouselComponent = () => {
    const navigate = useNavigate();

    // Custom Arrows
    const NextArrow = ({ onClick }) => (
        <IconButton
            onClick={onClick}
            sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                color: "black",
                zIndex: 1,
            }}
        >
            <ArrowForwardIosIcon />
        </IconButton>
    );

    const PrevArrow = ({ onClick }) => (
        <IconButton
            onClick={onClick}
            sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                color: "black",
                zIndex: 1,
            }}
        >
            <ArrowBackIosIcon />
        </IconButton>
    );

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "40px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "20px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px",
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {SlidesData.map((slide) => (
                <Grid key={slide.id} sx={{ padding: "10px" }}>
                    <CategoryCard
                        CategoryName={slide.code}
                        CategoryImage={slide.image}
                        CategoryId={slide.id}
                        CategoryDes={slide.CategoryDes}
                    />
                </Grid>
            ))}
        </Slider>
    );
};

export default CarouselComponent;
