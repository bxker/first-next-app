import React, { Component } from 'react'
import Header from '../components/Header'
import StudentsComp from '../components/StudentsComp'

export default class Students extends Component {
  render() {
    return (
      <div>
        <Header />
        <StudentsComp />
      </div>
    )
  }
}
