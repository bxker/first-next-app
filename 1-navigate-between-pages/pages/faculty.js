import React, { Component } from 'react'
import Header from '../components/Header';
import FacultyComp from '../components/FacultyComp';

export default class Faculty extends Component {
    render() {
        return (
            <div>
                <Header />
                <FacultyComp />
            </div>
        )
    }
}
