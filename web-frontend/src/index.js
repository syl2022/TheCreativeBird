// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import './index.css';
import BrowserRoutes from "./hooks/BrowserRoutes";
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Auth0Provider domain={process.env.DOMAIN} clientId={process.env.CLIENT_ID}
                       authorizationParams={{
                           redirect_uri: window.location.origin + "/home"
                       }}>
            <BrowserRoutes></BrowserRoutes>
        </Auth0Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

