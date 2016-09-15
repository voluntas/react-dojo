import React from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Snackbar from "material-ui/Snackbar";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ws: null,
            message: "",
            open: false,
            value: "",
        };
    }
    componentDidMount() {
        var ws = new WebSocket("wss://echo.websocket.org");
        ws.onmessage = this.handleMessage.bind(this);
        this.setState({ws: ws});
    }
    componentWillUnmount() {
        this.state.ws.close();
    }
    handleMessage(msg) {
        this.setState({
            message: msg.data,
            open: true,
        });
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }
    handleTouchTap() {
        this.state.ws.send(this.state.value);
    }
    handleRequestClose() {
        this.setState({
            open: false,
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world.</h1>
                <TextField
                  hintText="message"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                />
                <br/>
                <RaisedButton
                  onTouchTap={this.handleTouchTap.bind(this)}
                  label='Hello, world'
                />
                <Snackbar
                  open={this.state.open}
                  message={this.state.message}
                  autoHideDuration={1000}
                  onRequestClose={this.handleRequestClose.bind(this)}
                />
            </div>
        );
    }
}
