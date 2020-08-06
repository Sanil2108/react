import React, { Component } from 'react'

function ProductTable(props) {
    return (
        <>
            <h3>{ props.title }</h3>
            <table>
                <tbody>
                    {(props.showColumnHeadings) && <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>}
                    {props.rows.map((row) => <tr key={row.name} style={{ color: (row.stocked) ? 'black' : 'orangered' }}>
                        <td>{ row.name }</td>
                        <td>{ row.price }</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default ProductTable
