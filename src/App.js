// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import ApiForm from './views/api-form'

// function App() {
class App extends Component {
  // state = {
  //   postcode: Number(1234),
  //   suburb: 'Surry Hills',
  //   state: ''
  // }

  // handleSubmit = formContents => {
  //   let postcode = formContents.postcode
  //   let suburb = formContents.suburb
  //   let state = formContents.state
  //   this.setState({
  //     postcode: postcode,
  //     suburb: suburb,
  //     state: state,
  //   })
  // }

  render () {

    // const { postcode, suburb, state } = this.state

    // console.log('Here1: ' + postcode + suburb)
  
    return (
  
      <ApiForm />
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );

  }
}

export default App;
