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

    render() {
        return (
            <div>
                <input type="text" onChange={this.textFieldChange.bind(this)}></input>
                <button onClick={this.searchButtonClick.bind(this)}>Search</button>
            </div>
        )
    }

}