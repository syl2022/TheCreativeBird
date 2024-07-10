import * as React from 'react';
import {useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {createTheme, ThemeProvider} from '@mui/material/styles';
// @ts-ignore
import mainLogo from '../resources/bird.jpg';
import {Carousel, CarouselItem, CarouselRef} from "react-round-carousel";
import LoginBox from "../components/LoginBox";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {

    useEffect(() => {
        const interval = setInterval(() => carouselRef.current?.next(), 4000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    const carouselRef = React.createRef<CarouselRef>();
    const items: CarouselItem[] = Array(20)
        .fill('')
        .map((_: string, index: number) => ({
            alt: 'A random photo',
            image: `https://picsum.photos/${210 + index}`,
            content: (
                <div></div>
            )
        }));

    return (
        <ThemeProvider theme={defaultTheme}>

            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        overflow: "hidden",
                        backgroundImage: "radial-gradient(#605143,#1c1814, black);",
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>

                    <Carousel
                        ref={carouselRef} items={items} itemWidth={800}
                    />

                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
                    backgroundColor: 'black',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'/* For browsers that do not support gradients */
                }}>
                    <Paper><LoginBox></LoginBox></Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
