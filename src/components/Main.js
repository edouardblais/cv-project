import React, { Component } from 'react'
import CVform from './CVform/CVform'
import uniqid from 'uniqid'

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
            },
            newworkexperience: {
                position:'',
                company:'',
                from:'',
                to:'',
                description:'',
                id:uniqid(),
            },
            workexperience:[]
        }
        this.inputPersonalChange = this.inputPersonalChange.bind(this);
        this.inputWorkChange = this.inputWorkChange.bind(this);
        this.addWorkExperience = this.addWorkExperience.bind(this);
    }

    inputPersonalChange(e) {
        this.setState({
            personalinfo: {
                firstname:e.target.value,
                lastname: e.target.value,
                title: e.target.value,
                address: e.target.value,
                phonenumber: e.target.value,
                email: e.target.value,
            },
        })
    }

    inputWorkChange = (e) => {
        this.setState({
            newworkexperience: {
                position:e.target.value,
                company:e.target.value,
                from:e.target.value,
                to:e.target.value,
                description:e.target.value,
                id:this.state.newworkexperience.id,
            },
        })
    }

    addWorkExperience = () => {
        this.setState({   
            workexperience: this.state.workexperience.concat(this.state.newworkexperience),
            newworkexperience: {
                position:'',
                company:'',
                from:'',
                to:'',
                description:'',
                id:uniqid(),
            },
        })
    }

    render() {
        return (
            <div className='MainContainer'>
                <CVform 
                    data={this.state} 
                    inputPersonalChange={(e) => this.inputPersonalChange(e)}
                    inputWorkChange={this.inputWorkChange}
                    addWorkExperience={this.addWorkExperience}
                />
            </div>
        )
    }
}

export default Main