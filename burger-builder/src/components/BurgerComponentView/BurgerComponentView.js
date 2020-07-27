import React from 'react'

export default function BurgerComponentView(props) {
    const burgerComponents = [];
    for (let i = 0; i < props.burgerComponent.quantity; i += 1) {
        burgerComponents.push(<div key={ i }><img src={ props.burgerComponent.imagePath }/></div>)
    }

    return (
        <div>
            {burgerComponents}
        </div>
    )
}
