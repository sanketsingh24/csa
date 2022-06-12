import React from 'react';
import * as lange from '../i18n/en.json'
let lang = lange;
class Line extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div className={this.props.fill}>
      </div>
      )}
  
  }

  export default Line;
