import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const mainFeaturedPost = {
    title: 'Gift your loved once a Handcrafted piece from their heart.',
    description:
        "",
    image: 'https://img.freepik.com/premium-photo/yellow-background-with-baby-baby-s-toys_837518-2799.jpg',
    imageText: '',
    linkText: '',
};

const featuredPosts = [
    {
        title: 'Template',
        date: '',
        description:
            'Use some predefined templates from designers.',
        image: 'https://www.thesprucecrafts.com/thmb/PkwPGUHFW8KC4m9LDu51iyODcDU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/golden-envelopes-background-top-view-1249160660-8c62d60fb75b4127a0127adacb962363.jpg',
        imageLabel: '',
    },
    {
        title: 'Be creative',
        date: '',
        description:
            'Explore and design it your self.',
        image: 'https://www.cathyzielske.com/images/2022/07/BLOG_FloralStem2.jpg',
        imageLabel: '',
    },
];


const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'X', icon: XIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <CssBaseline />s
            <Container maxWidth="lg" sx={{
                padding: 4,
            }}>
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer
                title="Motivation"
                description="This Page is to help people gift their loved once a handcrafted piece from their heart!"
            />
        </ThemeProvider>
    );
}