import React from 'react';
import CircleNumber from "./circlenumber";
import * as lange from '../i18n/en.json'
let lang = lange;

class InfoText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {heading:lang.DASHBOARD.HEADING_1,subheading:lang.DASHBOARD.SUBHEADING_1}
    }
  
    componentDidUpdate = (prevProps) => {
      if(this.props.page === prevProps.page) return;
      switch (this.props.page) {
        case 1:
          this.setState(() => ({
            heading:lang.DASHBOARD.HEADING_1,subheading:lang.DASHBOARD.SUBHEADING_1
          }))
          break;
      
        case 2:
          this.setState(() => ({
            heading:lang.DASHBOARD.HEADING_2,subheading:lang.DASHBOARD.SUBHEADING_2
          }))
          break;
  
        case 3:
          this.setState(() => ({
            heading:lang.DASHBOARD.HEADING_3,subheading:lang.DASHBOARD.SUBHEADING_3
          }))
          break;
    
        case 4:
          this.setState(() => ({
            heading:lang.DASHBOARD.HEADING_4,subheading:lang.DASHBOARD.SUBHEADING_4
          }))
          break;
    
  
        default:
          break;
      }
    }
    
    render() {
      return(
        <span className='info-text'>
          {this.props.page===4 && (<CircleNumber number='tick' fill='tick' />)}
          <h1 className='info-heading'>
            {this.state.heading} {this.props.page===4 && (this.props.name + '!')}
          </h1>  
          <h3 className='info-subheading'>
            {this.state.subheading}
          </h3>  
        </span>
      )};
  };
  
  export default InfoText;
