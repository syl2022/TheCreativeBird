import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import {Button_OL} from "../components/Button_OL";
import {useNavigate} from "react-router-dom";
import * as serviceWorker from "../ServiceWorker";

const LogoutButton = () => {
    const {logout} = useAuth0();
    const navigate = useNavigate();

    function logoutHandler() {
        serviceWorker.unregister();
        window.localStorage.clear();
        logout({logoutParams: {returnTo: window.location.origin + "/login"}}).then();
    }

    return (
        <button label={"Logout"} className={"!mt-3 !mr-5"} handleClick={() => logoutHandler()}>
        </button>
    );
};

export default LogoutButton;