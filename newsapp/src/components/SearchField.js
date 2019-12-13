import React from 'react';

export default class SearchField extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentSearchText: "",
        }
    }

    searchButtonClick() {
        this.props.searchFunction(
            this.state.currentSearchText
        )
    }

    textFieldChange(event) {
        this.setState({
            currentSearchText: event.target.value
        })
    }

    keyPressed(event) {
        if (event.key === 'Enter') {
            this.props.searchFunction(event.target.value);
            this.setState({
                hide: true,
            })
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            hide: (newProps.hide == undefined ? false : newProps.hide)
        });
    }

    render() {
        let className = "";
        if (this.props.hide) {
            className = "fade_out_search_field";
        }
        else if (this.props.show) {
            className = "fade_in_search_field";
        }

        return (
            <div className={"SearchField " + className}>
                <input type="text" onChange={this.textFieldChange.bind(this)} onKeyDown={this.keyPressed.bind(this)}></input>
            </div>
        )
    }

}