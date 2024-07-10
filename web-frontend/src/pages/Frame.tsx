import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";
import {SideNav} from "../components/SideNav";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

interface FrameProps {
    children: React.JSX.Element
}

function Frame({children}: FrameProps) {

// TODO remove, this demo shouldn't need to reset the theme.
    const defaultTheme = createTheme();
    return (

            <ThemeProvider theme={defaultTheme}>
                <ResponsiveAppBar></ResponsiveAppBar>
                <Grid container md={12} >
                <Grid item md={2}>
                <SideNav></SideNav>
                </Grid>
                    <Grid item md={10}>
                <Container maxWidth="xl" sx={{
                    padding: 2,
                    paddingTop: 10,
                    position: 'relative',
                    width: "100%"
                }}>{children}</Container>
                    </Grid>

                </Grid>
                <Footer
                    title="Motivation"
                    description="This Page is to help people gift their loved ones a handcrafted piece from their heart!"
                />
            </ThemeProvider>

    );
}

export default Frame;