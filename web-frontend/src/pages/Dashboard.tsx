import * as React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Sidebar from '../components/Sidebar';

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
        link: '#'
    },
    {
        title: 'Be creative',
        date: '',
        description:
            'Explore and design it your self.',
        image: 'https://www.cathyzielske.com/images/2022/07/BLOG_FloralStem2.jpg',
        imageLabel: '',
        link: '/create'
    },
];


const sidebar = {
    title: 'About',
    description:
        'Are you creative and have a lot of ideas, but too lazy to implement your ideas. Or are you not at all into arts and craft but still want to give someone you love something "Artsy" because they love that. Or are you someone who just want to give someone something out of your heart but have no idea how to do that. Then you have come to the right place! ',
    archives: [],
    social: [
        {name: 'GitHub', icon: GitHubIcon},
        {name: 'Facebook', icon: FacebookIcon},
    ],
};


export default function Dashboard() {
    return (
        <main>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md>
                    <MainFeaturedPost post={mainFeaturedPost}/>
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post}/>
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{mt: 3}}>
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </main>
    );
}