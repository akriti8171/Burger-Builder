import React, { Component } from 'react'

import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {

    componentDidUpdate(){
        console.log("[Order Summary] will update")
    }
    render() {
        const ingredientSummary = Object.keys( this.props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li> );
        } );
        return (
            <div>
               <Auxi>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Auxi> 
            </div>
        )
    }
}

export default OrderSummary


