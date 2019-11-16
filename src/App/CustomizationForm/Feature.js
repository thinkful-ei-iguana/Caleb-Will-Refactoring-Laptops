import React from 'react';
import FeatureOption from './FeatureOption';

const Feature = (props) => {

  const options = props.features[props.feature].map((item, idx) => {
    
    return (
      <FeatureOption 
        //itemHash={itemHash}
        item={item}
        feature={props.feature}
        state={props.state}
        updateFeature={props.updateFeature}
        key={idx}
      />
    )
  });

  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  )
}

export default Feature;