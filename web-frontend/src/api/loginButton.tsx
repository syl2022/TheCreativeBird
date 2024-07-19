import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect} from "react";
// @ts-ignore
import * as serviceWorker from "../ServiceWorker";
import Button from "@mui/material/Button";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    function loginHandler() {
        loginWithRedirect().then();
    }

    return <div><Button
        fullWidth
        startIcon={<LockOpenOutlinedIcon/>}
        variant="contained"
        sx={{mt: 3, mb: 2}}
        className={'button-primary'}
        onClick={() => loginHandler()}
    >
        Login with Auth0
    </Button></div>
};

export default LoginButton;