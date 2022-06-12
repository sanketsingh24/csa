import React from 'react';
import logo from '../src/assets/icons/logo.png';
import PageNumber from './components/pagenumber';
import InfoText from './components/infotext';
import ExpSelector from './components/expselector';
import FormField from './components/formfield';
import Buttons from './components/buttons';

import * as lange from './i18n/en.json'
let lang = lange;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1, 
      name: '',
      displayName: '',
      wsName: '',
      wsURL: '',
    };  
  }

  incPage = () => {
    this.setState(prev => ({
      page: Math.min(prev.page + 1,4),
      name: prev.name,
      displayName: prev.displayName,
      wsName: prev.wsName,
      wsURL: prev.wsURL
    }))
    this.input1.clear();

    if(this.state.page === 4) {
      //api call
    }
  }

  updateName = (evt) => {
    const val = evt.target.value;
    this.setState(prev => ({
      page: prev.page,
      name: val,
      displayName: prev.displayName,
      wsName: prev.wsName,
      wsURL: prev.wsURL
    }))
  }

  updateDisplayName = (evt) => {
    const val = evt.target.value;
    this.setState(prev => ({
      page: prev.page,
      name: prev.name,
      displayName: val,
      wsName: prev.wsName,
      wsURL: prev.wsURL
    }))
  }

  updateWSName = (evt) => {
    const val = evt.target.value;
    this.setState(prev => ({
      page: prev.page,
      name: prev.name,
      displayName: prev.displayName,
      wsName: val,
      wsURL: prev.wsURL
    }))
  }

  updateWSURL = (evt) => {
    const val = evt.target.value;
    this.setState(prev => ({
      page: prev.page,
      name: prev.name,
      displayName: prev.displayName,
      wsName: prev.wsName,
      wsURL: val
    }))
  }

  render (){
    return(
    <div className='app-wrapper'>
      <div className='title'><img src={logo} alt='logo' height='30px' width='30px' className='logo' /><h1>Eden</h1></div>
      <PageNumber page={this.state.page} />
      <InfoText page={this.state.page} name={this.state.displayName} />

      {this.state.page<=2 && <FormField page={this.state.page} ref={input1 => this.input1 = input1} updateName={this.updateName} updateDisplayName={this.updateDisplayName} updateWSName={this.updateWSName} updateWSURL={this.updateWSURL} />}
      {this.state.page===3 && <ExpSelector page={this.state.page} />}
      
      <Buttons page={this.state.page} incPage={this.incPage} />
    </div>
    )};
}

export default App;
