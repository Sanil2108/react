import React from 'react'
export default function BurgerBill(props) {
    let total = 0;

    return (
        <div>
            { props.burgerComponents.map((burgerComponent) =>
                <div key={ burgerComponent.name }>
                    <span>{ burgerComponent.name }</span>
                    <span>{ burgerComponent.quantity }</span>
                    <span>{ burgerComponent.price * burgerComponent.quantity }</span>
                </div>
            ) }
            { props.burgerComponents.reduce((sum, newComponent) => sum + (newComponent.price * newComponent.quantity), 0) }
        </div>
    )
}
