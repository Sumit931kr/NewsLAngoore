import React, { Component } from 'react'
import loading from './ajax-loader.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center ">
                <img className="position-absolute top-50 start-50" src={loading} alt="loading" />
            </div>
        )
    }
}
