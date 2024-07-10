import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AdbIcon} from "../components/Icons";
import LogoutButton from "../api/logoutButton";

const pages = [''];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

    return (
        <AppBar sx={{backgroundColor: '#E6DED5', color: 'black', position: 'fixed'}}>

            <Toolbar disableGutters
                     sx={(theme) => ({
                         display: 'flex',
                         placeContent: 'end space-between',
                         alignItems: 'center',
                         flexShrink: 0,
                         maxHeight: 40,
                     })}>

                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: {xs: 'flex'},
                        fontFamily: 'cursive',
                        fontWeight: 700,
                        alignItems: 'center',
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <AdbIcon/>
                    The Creative Bird
                </Typography>

                <Box sx={{flexGrow: 0, margin: 10}}>
                    <LogoutButton></LogoutButton>

                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;