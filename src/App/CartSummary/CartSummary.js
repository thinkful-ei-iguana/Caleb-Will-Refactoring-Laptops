import React, {Component} from 'react';
import SummaryOption from './SummaryOption';
import Total from './Total';

class CartSummary extends Component {

  render() {
    return(
      <div>
        <p>{this.props.test} in CartSummary</p>
        <SummaryOption test={this.props.test} />
        <Total test={this.props.test} />
      </div>
    )
  }

}

export default CartSummary;