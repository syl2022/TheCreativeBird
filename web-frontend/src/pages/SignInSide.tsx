import * as React from 'react';
import {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {createTheme, ThemeProvider} from '@mui/material/styles';
// @ts-ignore
import mainLogo from '../resources/bird.jpg';
import {Carousel, CarouselItem, CarouselRef} from "react-round-carousel";
import LoginBox from "../components/LoginBox";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Canvas} from "@react-three/fiber";
import Bird from "../components/Bird";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
const [cameraZoom, setCameraZoom]=useState(2.5);
    useEffect(() => {
        if(window.innerWidth <= 760){alert()
            setCameraZoom(3);
        }
        const interval = setInterval(() => carouselRef.current?.next(), 4000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    const carouselRef = React.createRef<CarouselRef>();
    const items: CarouselItem[] = Array(7)
        .fill('')
        .map((_: string, index: number) => ({
            alt: 'A random photo',
            image: `/carosel/F${index+1}.jpg`,
            content: (
                <div>kk</div>
            )
        }));

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container maxWidth="xl" className={'signin-container'}>
                <React.Fragment>
                        <Box component="div" height="30%" width={'25vh'} className={'threejs-container'}>
                            <Canvas camera={{ position: [0, 0, cameraZoom], fov: 50 }}>
                                <hemisphereLight color="white" groundColor="blue" intensity={0.5}/>
                                <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1}/>
                                <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1}/>
                                <Bird />
                                <OrbitControls/>
                            </Canvas>
                        </Box>
                </React.Fragment>

            <Grid container className={'signin-container'} component="main"
                  sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        overflow: "hidden",
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>

                    <Carousel
                        ref={carouselRef} items={items} itemWidth={800}
                    />

                </Grid>
                <Grid item xs={12} sm={8} md={5} component={'div'}  sx={{
                    backgroundColor: 'transparent',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'/* For browsers that do not support gradients */
                }}>
                    <Paper><LoginBox></LoginBox></Paper>
                </Grid>
            </Grid>
            </Container>
        </ThemeProvider>
    );
}
