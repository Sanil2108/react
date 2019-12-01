import React from 'react';
import SearchField from './SearchField';

export default class SearchContainer extends React.Component {

    render() {
        return (
            <div>
                <SearchField searchFunction={this.props.searchFunction}></SearchField>
            </div>
        )
    }

}