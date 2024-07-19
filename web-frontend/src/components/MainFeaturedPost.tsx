import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface MainFeaturedPostProps {
    post: {
        description: string;
        image: string;
        imageText: string;
        linkText: string;
        title: string;
    };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
    const { post } = props;

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${post.image})`
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}

            <Box component='div'
                sx={{
                    position: 'relative',
                    p: { xs: 3, md: 25 },
                    pr: { md: 5 },
                    alignItems: 'right',
                    color: 'black'
                }}
            >

            </Box>

        </Paper>
    );
}