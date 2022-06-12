import React from 'react';
import CircleNumber from "./circlenumber";
import Line from "./line";
import * as lange from '../i18n/en.json'
let lang = lange;

class PageNumber extends React.Component {
    constructor(props) {
      super(props);
      this.state = {page: this.props.page};  
    }
  
    componentDidUpdate = (prevProps) => {
      if(prevProps.page === this.props.page) return;
      this.setState(() => ({page: this.props.page}))
    }
    
    render() {
      return(
        <div className='number-lines'>
          <CircleNumber number='1' fill='colored' />
          <Line fill={this.state.page>1?'full':'half'} />
          <CircleNumber number='2' fill={this.state.page>=2?'colored': 'non-colored'} />
          <Line fill={this.state.page>2?'full':this.state.page===2?'half':'empty'}/>
          <CircleNumber number='3' fill={this.state.page>=3?'colored': 'non-colored'} />
          <Line fill={this.state.page>3?'full':this.state.page===3?'half':'empty'}/>
          <CircleNumber number='4' fill={this.state.page>=4?'colored': 'non-colored'} />
        </div>  
      )};
  };

  export default PageNumber;
