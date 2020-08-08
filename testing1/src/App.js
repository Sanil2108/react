import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './ProductTable';
import HeadingOnlyProductTable from './HeadingOnlyProductTable';
import ProductSearch from './ProductSearch';
import RefForwardExampleButton from './RefForwardExampleButton';
import PropTypeExample from './PropTypeExample';

class App extends React.Component {
    constructor(props) {
        super(props);

        const allData = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ]

        this.state = {
            data: allData,
            allData
        }
    }

    filterProducts(shouldFilterFunction) {
        const allData = [...this.state.allData];
        this.setState({ data: allData.filter((dataItem) => shouldFilterFunction(dataItem)) })
    }

    render() {
        const someRef = React.createRef();

        return (
            <>
                {/* <ProductSearch filterFunction={this.filterProducts.bind(this)}></ProductSearch>
                <HeadingOnlyProductTable></HeadingOnlyProductTable>
                <ProductTable
                    title="Sporting Goods"
                    showColumnHeadings={false}
                    rows={this.state.data.filter((product) => product.category === 'Sporting Goods')}
                ></ProductTable>
                <ProductTable
                    title="Electronics"
                    showColumnHeadings={false}
                    rows={this.state.data.filter((product) => product.category === 'Electronics')}
                ></ProductTable> */}
                <button onClick={() => someRef.current.addEventListener('click', () => alert('This is from the inside... shhh...'))}>This is a button in app.js</button>
                <RefForwardExampleButton ref={someRef}>

                </RefForwardExampleButton>

                <PropTypeExample>

                </PropTypeExample>
            </>
        );
    }
}

export default App;
