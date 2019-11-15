import React from 'react';
import Feature from './Feature';


const CustomizationForm = (props) => {

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    
    return (
      <Feature 
        updateFeature={props.updateFeature}
        features={props.features}
        featureHash={featureHash}
        feature={feature}
        idx={idx}
        key={idx}
        state={props.state}
      />
    );
  });
  
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
}

export default CustomizationForm;