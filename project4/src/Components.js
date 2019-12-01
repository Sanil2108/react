import React from 'react';
import ReactDom from 'react-dom';

export class ParentComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.text}</h2>
                <ChildComponent onChange={this.update.bind(this)}>Something</ChildComponent>
            </div>
        )
    }

    update(e) {
        this.setState({
            text: e.target.value
        });
    }
}

export class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.onChange}></input>{this.props.children}
            </div>
        );
    }
}

ParentComponent.propTypes = {
    text() {
        
    }
}