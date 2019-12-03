import * as React from 'react';

export default class MaterialButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: false,
        }
    }

    showFullButton() {
        this.setState({
            expanded: true
        });
    }

    hideFullButton() {
        this.setState({
            expanded: false
        });
    }

    buttonClick() {

    }

    render() {
        const divElements = [<i className={"material-icons MaterialButton_button"}>{this.props.icon}</i>]

        if (this.state.expanded) {
            divElements.push((
                <div className={"MaterialButton_gradient"}>
                </div>
            ))
            divElements.push((
                <div className={"MaterialButton_text"}>
                    <p>{this.props.buttonText}</p>
                </div>
            ))
        }

        return (<div className={"MaterialButton"} onMouseOver={this.showFullButton.bind(this)}
            onMouseOut={this.hideFullButton.bind(this)}
            onClick={this.buttonClick.bind(this)}
        >
            {divElements}
        </div>);
    }
}