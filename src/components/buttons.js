import React from 'react';
import * as lange from '../i18n/en.json'
let lang = lange;
class Buttons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {label:this.props.page===4 ? lang.DASHBOARD.BUTTON.LAUNCH: lang.DASHBOARD.BUTTON.CREATE}
    }
  
    componentDidUpdate = (prevProps) => {
      if(this.props.page === prevProps.page) return;
      this.setState(() => ({
        label:this.props.page===4 ? lang.DASHBOARD.BUTTON.LAUNCH: lang.DASHBOARD.BUTTON.CREATE      
      }))
    }
    
    render() {
      return(
        <button className='button' onClick={this.props.incPage}>
          {this.state.label}
        </button>
      )};
  };
  
  export default Buttons;
