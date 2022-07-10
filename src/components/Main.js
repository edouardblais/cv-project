import React, { Component } from 'react'
import CVform from './CVform/CVform'
import uniqid from 'uniqid'

class Main extends Component {
    constructor() {
        super()

        this.state = {
            firstname:'',
            lastname: '',
            title: '',
            address: '',
            phonenumber: '',
            email: '',
            
            position:'',
            company:'',
            from:'',
            to:'',
            description:'',
            workid:uniqid(),

            workexperience:[],
        }
        this.inputPersonalChange = this.inputPersonalChange.bind(this);
        this.inputWorkChange = this.inputWorkChange.bind(this);
        this.addWorkExperience = this.addWorkExperience.bind(this);
    }

    inputPersonalChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    inputWorkChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            id:this.state.workid,
        })
    }

    addWorkExperience() {
        const newworkexperience = {
            position: this.state.position,
            company: this.state.company,
            from: this.state.from,
            to: this.state.to,
            description: this.state.description,
        }
        this.setState({   
            workexperience: this.state.workexperience.concat(newworkexperience),
        })
    }

    render() {
        return (
            <div className='MainContainer'>
                <CVform 
                    inputPersonalChange={(e) => this.inputPersonalChange(e)}
                    inputWorkChange={(e) => this.inputWorkChange(e)}
                    addWorkExperience={this.addWorkExperience}
                />
            </div>
        )
    }
}

export default Main