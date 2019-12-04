import React from 'react';

export default class SearchField extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentSearchText: ""
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

    render() {
        return (
            <div className={"SearchField " + ((this.state.hide) ? "fade_out_search_field" : "")}>
                <input type="text" onChange={this.textFieldChange.bind(this)} onKeyDown={this.keyPressed.bind(this)}></input>
            </div>
        )
    }

}