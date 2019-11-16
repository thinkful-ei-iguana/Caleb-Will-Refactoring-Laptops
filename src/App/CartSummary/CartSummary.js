import React from 'react';
import SummaryOption from './SummaryOption';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const CartSummary = (props) => {

  const summary = Object.keys(props.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.state.selected[feature];
    return (
      <SummaryOption 
        feature={feature}
        idx={idx}
        featureHash={featureHash}
        selectedOption={selectedOption}
        key={idx}
      />
    )
  });

  const total = Object.keys(props.state.selected).reduce(
    (acc, curr) => acc + props.state.selected[curr].cost,
    0
  );

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>
  )
}

export default CartSummary;