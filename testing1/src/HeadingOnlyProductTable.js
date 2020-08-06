import React from 'react';
import ProductTable from './ProductTable';

export default function HeadingOnlyProductTable(props) {
    return (
        <ProductTable
            showColumnHeadings={true}
            rows={[]}
        ></ProductTable>
    )
}