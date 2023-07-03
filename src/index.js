import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {keycloak} from "./helpers/keycloak";
import {ReactKeycloakProvider} from "@react-keycloak/web";

import { kcContext as kcLoginThemeContext } from "./keycloak-theme/login/kcContext";
import { kcContext as kcAccountThemeContext } from "./keycloak-theme/account/kcContext";

const KcLoginThemeApp = lazy(() => import("./keycloak-theme/login/KcApp"));
const KcAccountThemeApp = lazy(() => import("./keycloak-theme/account/KcApp"));
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReactKeycloakProvider authClient={keycloak} initOptions={{pkceMethod: 'S256'}}>
        <React.StrictMode>
            <Suspense>
                {(()=>{

                    if( kcLoginThemeContext !== undefined ){
                        return <KcLoginThemeApp kcContext={kcLoginThemeContext} />;
                    }

                    if( kcAccountThemeContext !== undefined ){
                        return <KcAccountThemeApp kcContext={kcAccountThemeContext} />;
                    }

                    return <App />;

                })()}
            </Suspense>
        </React.StrictMode>
    </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
