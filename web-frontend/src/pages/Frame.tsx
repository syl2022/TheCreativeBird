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

                <Grid container direction={'column'} sm={12}>
                    <Grid item>
                        <ResponsiveAppBar></ResponsiveAppBar>
                    </Grid>
                    <Grid item container direction={'row'}>
                        <Grid item sm={4} md={3}>
                            <SideNav></SideNav>
                        </Grid>
                        <Grid item sm={8} md={9} sx={{paddingTop: 10}}>
                            <Container>{children}</Container>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Footer
                            title="Motivation"
                            description="This Page is to help people gift their loved ones a handcrafted piece from their heart!"
                        />
                    </Grid>
                </Grid>
        </ThemeProvider>

    );
}

export default Frame;