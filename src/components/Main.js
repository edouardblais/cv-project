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
            workfrom:'',
            workto:'',
            description:'',
            workid:uniqid(),

            workexperience:[],

            university:'',
            degree:'',
            city:'',
            educationfrom:'',
            educationto:'',
            educationid:uniqid(),

            education:[],
        }

        this.inputPersonalChange = this.inputPersonalChange.bind(this);
        this.inputWorkChange = this.inputWorkChange.bind(this);
        this.addWorkExperience = this.addWorkExperience.bind(this);
        this.inputEducationChange = this.inputEducationChange.bind(this);
        this.addDegree = this.addDegree.bind(this);
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

    inputEducationChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            id:this.state.educationid,
        })
    }

    addDegree() {
        const newdegree = {
            university: this.state.university,
            degree: this.state.degree,
            educationfrom: this.state.educationfrom,
            educationto: this.state.educationto,
            city: this.state.city,
        }
        this.setState({   
            education: this.state.education.concat(newdegree),
        }) 
    }

    render() {
        return (
            <div className='MainContainer'>
                <CVform 
                    inputPersonalChange={(e) => this.inputPersonalChange(e)}
                    inputWorkChange={(e) => this.inputWorkChange(e)}
                    addWorkExperience={this.addWorkExperience}
                    inputEducationChange={(e) => this.inputEducationChange(e)}
                    addDegree={this.addDegree}
                />
            </div>
        )
    }
}

export default Main