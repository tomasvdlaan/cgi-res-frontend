import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";

ReactDOM.render(
	<Auth0Provider
		domain="dev-3ly8e9ao.us.auth0.com"
		clientId="9w9We1c6eK8pjBXAzR1JhfUgnEkYjFmz"
		redirectUri={window.location.origin}
	>
		<Router />
	</Auth0Provider>,
	document.getElementById("root")
);
