import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {Loading} from "../components/Loading";

export default function Authenticate() {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (isAuthenticated) {
        const getUserMetadata = async () => {
            const accessToken = await getAccessTokenSilently({
                authorizationParams: {
                    audience: process.env.REACT_APP_AUDIENCE,
                },
            });

            const cache = await caches.open('v1');
            await cache.put("token", new Response(JSON.stringify({"accessToken": accessToken})));
        }
        getUserMetadata();
        window.localStorage.setItem("user", JSON.stringify(user));
        return <Navigate to="/home"/>
    }
}
