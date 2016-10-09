import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ws: null,
            messages: [],
        };
    }
    componentDidMount() {
        let ws = new WebSocket("ws://127.0.0.1:8000/ws");
        ws.onmessage = this.handleMessage.bind(this);
        this.setState({ws: ws});
    }
    componentWillUnmount() {
        this.state.ws.close();
    }
    componentDidUpdate() {
        let node = ReactDOM.findDOMNode(this.refs.messages);
        // XXX: これは .. ありなのだろうか
        window.scrollTo(0, node.scrollHeight);
    }
    handleMessage(event) {
        let message = JSON.parse(event.data);
        this.state.messages.push(message);
        this.setState({
            messages: this.state.messages
        });
    }
    render() {
        let messages = this.state.messages.map(v => {
            return <div key={v.uuid} >{v.uuid}: {v.count}</div>;
        });
        return (
            <div ref="messages">{messages}</div>
        );
    }
}
