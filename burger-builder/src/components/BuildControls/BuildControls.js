import React, { Component } from 'react';
import BuildControl from '../BuildControl/BuildControl';
import classes from './BuildControls.css';
import BuildControlHeading from '../BuildControlHeading/BuildControlHeading';

export class BuildControls extends Component {
    updateBurgerComponent(burgerComponentIndex, updatedBurgerComponent) {
        const newBurgerComponents = [...this.props.burgerComponents];
        newBurgerComponents[burgerComponentIndex] = updatedBurgerComponent;
        this.props.updateBurgerComponents(newBurgerComponents);
    }

    render() {
        return (
            <div className={ classes['BuildControlsTable'] }>
                <BuildControlHeading></BuildControlHeading>
                { this.props.burgerComponents.map((burgerComponent, idx) => <BuildControl
                    burgerComponent={burgerComponent}
                    updateBurgerComponent={this.updateBurgerComponent.bind(this, idx)}
                    key={burgerComponent.name }
                ></BuildControl>) }
            </div>
        )
    }
}

export default BuildControls
