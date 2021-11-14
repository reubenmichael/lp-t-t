import React, { Component, Fragment } from 'react'
import './App.css';
import ApiForm from './views/api-form'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

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
