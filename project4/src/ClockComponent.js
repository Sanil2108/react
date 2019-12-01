import React from 'react';

export default class ClockComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {date: new Date(), playing: true};
    }

    componentDidMount() {
        this.timerId = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        if (this.state.playing) {
            this.setState({date: new Date()});
        }
    }

    click(event) {
        this.setState({playing: !this.state.playing});
    }

    render() {
        return [
            <div onClick = {this.click.bind(this)}>
                It is now {this.state.date.toLocaleTimeString()}
            </div>,
            <div onClick = {this.click.bind(this)}>
                It is now {this.state.date.toLocaleTimeString()}
            </div>
        ];
    }

}