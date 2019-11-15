import React, {Component} from 'react';
import FeatureOption from './FeatureOption';

class Feature extends Component{


  render() {
    return (
      <div>
        <p>{this.props.test} in Feature</p>
        <FeatureOption test={this.props.test} />
      </div>
    )
  }
}

export default Feature;