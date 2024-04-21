import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {SideNav} from "../components/SideNav";

// @ts-ignore
import mainBg from '../resources/mainBg.jpg';

const mainFeaturedPost = {
    title: '',
    description:
        "",
    image: `${mainBg}`,
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
        'Are you creative and have a lot of ideas, but too lazy to implement your ideas. Or are you not at all into arts and craft but still want to give someone you love something "Artsy" because they love that. Or are you someone who just want to give someone something out of your heart but have no idea how to do that. Then you have come to the right place! ',
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
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
    return (
        <ThemeProvider theme={defaultTheme} >
            <SideNav></SideNav>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container maxWidth="lg" sx={{
                padding: 2,
                paddingTop: 10,
                position: 'relative'
            }}>

                <main>
                    <MainFeaturedPost post={mainFeaturedPost}   />
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
                description="This Page is to help people gift their loved ones a handcrafted piece from their heart!"
            />
        </ThemeProvider>
    );
}