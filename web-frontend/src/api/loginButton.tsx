import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect} from "react";
// @ts-ignore
import * as serviceWorker from "../ServiceWorker";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {

        serviceWorker.register();
    }, []);
    function loginHandler() {
        loginWithRedirect().then();
    }
    return <button className="btn-primary" onClick={()=>loginHandler()}>Login with Auth0</button>
};

export default LoginButton;