import React, { Component } from 'react'
import BurgerView from '../BurgerView/BurgerView';
import BuildControls from '../BuildControls/BuildControls';
import BurgerBill from '../BurgerBill/BurgerBill';
import { burgerComponents } from './constants';

import classes from './BurgerBuilder.css';

export class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            burgerComponents,
        }
    }

    updateBurgerComponents(burgerComponents) {
        this.setState({ burgerComponents });
    }

    render() {
        return (
            <div className={ classes.BurgerBuilder }>
                <BurgerView burgerComponents={this.state.burgerComponents}></BurgerView>
                <BuildControls
                    burgerComponents={this.state.burgerComponents}
                    updateBurgerComponents={this.updateBurgerComponents.bind(this)}
                ></BuildControls>
                <BurgerBill burgerComponents={this.state.burgerComponents}></BurgerBill>
            </div>
        )
    }
}

export default BurgerBuilder

