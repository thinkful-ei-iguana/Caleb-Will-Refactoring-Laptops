import React, {Component} from 'react';
import Feature from './Feature';

class CustomizationForm extends Component {


  render() {
    return (
      <div>
        <p>{this.props.test} in CustomizationForm</p>
        <Feature test={this.props.test} />
      </div>
    )
  }
}

export default CustomizationForm;