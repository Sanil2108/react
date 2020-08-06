import React, { Component } from 'react'

class ProductSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSearchText: '',
            showOutOfStock: false,
        }

        this.updateFilterFunction.bind(this);
    }

    updateFilterFunction() {
        this.props.filterFunction((dataItem) => (this.state.showOutOfStock || dataItem.stocked) &&
            (this.state.currentSearchText === '' || this.state.currentSearchText == null
            || dataItem.name.indexOf(`${this.state.currentSearchText}`) !== -1)
        );
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.currentSearchText}
                    onChange={(event) => {
                        this.setState({ currentSearchText: event.target.value }, this.updateFilterFunction.bind(this));
                        this.updateFilterFunction();
                    }}
                ></input>
                <input
                    type="checkbox"
                    checked={!this.state.showOutOfStock}
                    onChange={(event) => {
                        this.setState({ showOutOfStock: !event.target.checked }, this.updateFilterFunction.bind(this));
                        this.updateFilterFunction();
                    }}
                ></input>Show out of stock
            </div>
        )
    }
}

export default ProductSearch
