import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: '',
        };
    }
    handleTouchTap() {
        this.setState({
            open: true,
        });
    }
    handleRequestClose() {
        this.setState({
            open: false,
        });
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
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
                  message={this.state.value}
                  autoHideDuration={1000}
                  onRequestClose={this.handleRequestClose.bind(this)}
                />
            </div>
        );
    }
}
