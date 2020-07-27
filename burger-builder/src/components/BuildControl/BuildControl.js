import React from 'react'

export default function BuildControl(props) {
    return (
        <div>
            <span>{ props.burgerComponent.name }</span>
            <span>
                <button onClick={
                    () => {
                        props.updateBurgerComponent(Object.assign({ ...props.burgerComponent }, { quantity: props.burgerComponent.quantity - 1 }))
                    }
                }>Subtract</button>
                { props.burgerComponent.quantity }
                <button onClick={
                    () => {
                        props.updateBurgerComponent(Object.assign({ ...props.burgerComponent }, { quantity: props.burgerComponent.quantity + 1 }))
                    }
                }>Add</button>
            </span>
        </div>
    )
}
