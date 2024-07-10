import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
/*
import * as serviceWorker from "../ServiceWorker";*/

const LogoutButton = () => {
    const {logout} = useAuth0();
    const navigate = useNavigate();

    function logoutHandler() {/*
        serviceWorker.unregister();*/
        window.localStorage.clear();
        logout({logoutParams: {returnTo: window.location.origin + "/"}}).then();
    }

    return (
        <Button
            fullWidth
            variant="contained"
            sx={{margin: 5}}
            onClick={() => logoutHandler()}
        >
            Logout
        </Button>
    );
};

export default LogoutButton;