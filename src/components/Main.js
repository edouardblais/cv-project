import React, { Component } from 'react'
import CVform from './CVform/CVform'

class Main extends Component {
    constructor() {
        super()

        this.state = {
            personalinfo: {
                firstname:'',
                lastname: '',
                title: '',
                address: '',
                phonenumber: '',
                email: '',
            }
        }
    this.inputChange = this.inputChange.bind(this);
    }

    inputChange = (e) => {
        this.setState({
            personalinfo: {
                firstname:e.target.value,
                lastname: e.target.value,
                title: e.target.value,
                address: e.target.value,
                phonenumber: e.target.value,
                email: e.target.value,
            }
        })
    }

    render() {
        return (
            <div className='MainContainer'>
                <CVform data={this.state} inputChange={this.inputChange}/>
            </div>
        )
    }
}

export default Main