import React from 'react';
import * as lange from '../i18n/en.json'
let lang = lange;
class FormField extends React.Component {
    constructor(props) {
      super(props);
      this.state = { first_label: lang.DASHBOARD.FORM.NAME, second_label: lang.DASHBOARD.FORM.DISPLAY_NAME, ph_first: lang.DASHBOARD.FORM.PH_NAME, ph_second: lang.DASHBOARD.FORM.PH_DISPLAY}
    }
  
    componentDidUpdate = (prevProps) => {
      if(this.props.page === prevProps.page) return;
      switch (this.props.page) {
        case 1:
          this.setState(() => ({
            first_label: lang.DASHBOARD.FORM.NAME, second_label: lang.DASHBOARD.FORM.DISPLAY_NAME, ph_first: lang.DASHBOARD.FORM.PH_NAME, ph_second: lang.DASHBOARD.FORM.PH_DISPLAY
          }))
          break;
      
        case 2:
          this.setState(() => ({
            first_label: lang.DASHBOARD.FORM.WS_NAME, second_label: lang.DASHBOARD.FORM.WS_URL, ph_first: lang.DASHBOARD.FORM.PH_WS, ph_second: lang.DASHBOARD.FORM.PH_WSURL
          }))
          break;
  
        default:
          break;
      }
    }
  
    firstChange = (evt) => {
      switch (this.props.page) {
        case 1:
          this.props.updateName(evt);
          break;
  
        case 2:
          this.props.updateWSName(evt);
          break;
  
        default:
          break;
      }
    }
  
    secondChange = (evt) => {
      switch (this.props.page) {
        case 1:
          this.props.updateDisplayName(evt);
          break;
  
        case 2:
          this.props.updateWSURL(evt);
          break;
  
        default:
          break;
      }
  
    }
  
    clear = () => {
      this.firstInput.value = '';
      this.secondInput.value = '';
    }
    
    render() {
      return(
        <span className='input-wrapper'>
          <h4>
            {this.state.first_label}
          </h4>
          <input className='input' placeholder={this.state.ph_first} ref={firstInput => this.firstInput = firstInput} onChange={evt => this.firstChange(evt)} />
          <h4>
            {this.state.second_label}
          </h4>
          {this.props.page===2 ? 
            <span className='url-wrapper'>
              <div className='url'>www.eden.com/</div>
              <input ref={secondInput => this.secondInput = secondInput} className='input url-input' placeholder={this.state.ph_second} onChange={evt => this.secondChange(evt)} />
            </span> :
            <input ref={secondInput => this.secondInput = secondInput} className='input' placeholder={this.state.ph_second} onChange={evt => this.secondChange(evt)} />}
        </span>
      )};
  };
  
  export default FormField;
