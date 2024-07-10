import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Copyright} from "./Copyright";

interface FooterProps {
    description: string;
    title: string;
}

export default function Footer(props: FooterProps) {
    const {description, title} = props;

    return (
        <Box component="footer" sx={{bgcolor: '#E6DED5', py: 6, width: "100%"}}>
            <Container maxWidth="xl">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Copyright sx={{mt: 5}}/>
            </Container>
        </Box>
    );
}