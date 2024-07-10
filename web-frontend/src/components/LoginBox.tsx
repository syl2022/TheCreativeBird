import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {AdbIcon} from "./Icons";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {Copyright} from "./Copyright";
import {fetchUserData} from "../services/common.services";
import {useNavigate} from "react-router-dom";
import LoginButton from '../api/loginButton';

function LoginBox() {

    const [user, setUser] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        var user = await fetchUserData(data.get('email')?.toString(), data.get('password')?.toString());
        if (user != null) {
            navigate("/home");
        }
    }
    return (
        <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    fontFamily: 'cursive',
                    fontWeight: 700,
                    alignItems: 'right',
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                The Creative Bird
            </Typography>
            <AdbIcon/>

            <Typography component="h1" variant="h5">
                Log In
            </Typography>
            <LoginButton></LoginButton>
            <Grid container>
                <Grid item xs>
                </Grid>
            </Grid>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}} aria-label={"login-form"}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Log In
                </Button>
                {/*<Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>*/}
                <Copyright sx={{mt: 5}}/>
            </Box>
        </Box>
    );
}

export default LoginBox;