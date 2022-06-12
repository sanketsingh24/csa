import React from 'react';
import person from '../assets/icons/person.svg';
import people from '../assets/icons/people.svg';
import * as lange from '../i18n/en.json'
let lang = lange;

class ExpSelector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active1: false,
        active2: false
      }
    }
  
    toggleClass1 = () => {
      this.setState((prev) => ({
        active1: !prev.active1,
        active2: false
      }))
    }
  
    getClass1 = () => {
      let val = 'exp';
      if(this.state.active1) val += ' clicked'
      return val;
    }
  
    toggleClass2 = () => {
      this.setState((prev) => ({
        active2: !prev.active2,
        active1: false
      }))
    }
  
    getClass2 = () => {
      let val = 'exp';
      if(this.state.active2) val += ' clicked'
      return val;
    }
  
    render() {
      return(
        <div className='exp-wrapper'>
          <div className={this.getClass1()} name='first' onClick={this.toggleClass1}>
            <img src={person} alt='person' className='exp-icon' />
            <h3>
              {lang.DASHBOARD.EXP.SINGLE_USER.HEADING}
            </h3>
            <p>
              {lang.DASHBOARD.EXP.SINGLE_USER.SUBHEADING}
            </p>
          </div>
          <div className={this.getClass2()} name='second' onClick={this.toggleClass2}>
            <img src={people} alt='people' className='exp-icon' />
            <h3>
              {lang.DASHBOARD.EXP.TEAM.HEADING}
            </h3>
            <p>
              {lang.DASHBOARD.EXP.TEAM.SUBHEADING}
            </p>
          </div>
        </div> 
      )};
  };

  export default ExpSelector;
