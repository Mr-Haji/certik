import { Grid2 as Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import LinkIcon from '@mui/icons-material/Link';
const CategoryCard = ({ CategoryName, CategoryImage, CategoryId, CategoryDes }) => {
    const navigate = useNavigate();

    const navigateToNextPage = () => {
        navigate('#');
    };

    return (
        <Grid
            container
            onClick={navigateToNextPage}//navigate to any particlar page
            sx={{
                border: '1px solid grey',
         height:'200px',
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
            }}
            spacing={2}
            alignItems="center"
        >
            {/* Image Section */}
            <Grid
                size={12}
            >
                <img src={CategoryImage} alt={CategoryImage} style={{ width: '50%', margin: "2px" }} />

            </Grid>

            {/* Content Section */}
            <Grid size={12} >
                {/* Description (Placeholder) */}
                <Typography variant="body2" color="text.secondary">
                    {CategoryDes || 'category'}.
                </Typography>
            </Grid>
            <Grid sx={{ color: "grey",fontSize:'15px' }} size={12} >
                <LinkIcon />
                <XIcon />
            </Grid>
        </Grid>
    );
};

export default CategoryCard;
