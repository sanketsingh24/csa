import React from 'react';
import check from '../assets/icons/check-logo.svg';
import * as lange from '../i18n/en.json'
let lang = lange;

class CircleNumber extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div className={'number ' + this.props.fill}>
          {this.props.number ==='tick'&& <img src={check} width='25px' height='25px' className='tick-number' alt="tick-icon"/>}
          {this.props.number !== 'tick' && this.props.number}
        </div>
      )}
  }
  export default CircleNumber;
