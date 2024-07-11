// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import './index.css';
import {Auth0Provider} from "@auth0/auth0-react";
import BrowserRoutes from './hooks/BrowserRoutes';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {<Auth0Provider domain={process.env.REACT_APP_AUTH0_DOMAIN} clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
                             authorizationParams={{
                                 redirect_uri: `${window.location.origin}/home`
                             }}>
            <BrowserRoutes></BrowserRoutes>
        </Auth0Provider>}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

