/* @flow */

import ReactDOM from "react-dom";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./components/App.js";

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById("content")
);
