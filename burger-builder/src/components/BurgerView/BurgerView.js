import React, { Component } from 'react'
import BurgerComponentView from '../BurgerComponentView/BurgerComponentView'

export class BurgerView extends Component {
    render() {
        return (
            <div>
                { this.props.burgerComponents.map((burgerComponent) =>
                    <BurgerComponentView key={burgerComponent.name} burgerComponent={ burgerComponent }></BurgerComponentView>)
                }
            </div>
        )
    }
}

export default BurgerView
