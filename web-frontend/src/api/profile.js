import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect} from "react";

const Profile = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    useEffect(() => {

    }, []);


    return (
        isAuthenticated && (
            <div>
            </div>
        )
    );
};

export default Profile;