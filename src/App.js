import React, { Component, Fragment } from 'react'
import './App.css';
import ApiForm from './views/api-form'
import { ToastContainer } from 'react-toastify'

class App extends Component {

  render () {
    return (
      <Fragment>
        <ApiForm />
        <ToastContainer />
      </Fragment>
    );
  }
}

export default App;
