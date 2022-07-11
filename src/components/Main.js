import React, { Component } from 'react'
import CVform from './CVform/CVform'
import CVpreview from './CVpreview/CVpreview'
import uniqid from 'uniqid'
import {styles} from '../styles/style'

class Main extends Component {
    constructor(props) {
        super(props)

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
        this.deleteDegree = this.deleteDegree.bind(this);
        this.deleteWorkExperience = this.deleteWorkExperience.bind(this);
    }

    inputPersonalChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    inputWorkChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            workid:uniqid(),
        })
    }

    addWorkExperience() {
        const newworkexperience = {
            position: this.state.position,
            company: this.state.company,
            workfrom: this.state.workfrom,
            workto: this.state.workto,
            description: this.state.description,
            workid: this.state.workid,
        }
        this.setState({   
            workexperience: this.state.workexperience.concat(newworkexperience),
        })
        this.setState({
            position:'',
            company:'',
            workfrom:'',
            workto:'',
            description:'',
            workid:uniqid(),
        })
    }

    deleteWorkExperience(e) {
        const newwork = this.state.workexperience.filter((element) => {
            return e.target.id !== element.workid
        })
        this.setState({workexperience: newwork})
    }

    inputEducationChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            educationid:uniqid(),
        })
    }

    addDegree() {
        const newdegree = {
            university: this.state.university,
            degree: this.state.degree,
            educationfrom: this.state.educationfrom,
            educationto: this.state.educationto,
            city: this.state.city,
            educationid: this.state.educationid,
        }
        this.setState({   
            education: this.state.education.concat(newdegree),
        }) 
        this.setState({
            university:'',
            degree:'',
            city:'',
            educationfrom:'',
            educationto:'',
            educationid:uniqid(),
        })
    }

    deleteDegree(e) {
        const neweducation = this.state.education.filter((element) => {
            return e.target.id !== element.educationid
        })
        this.setState({education: neweducation})
    }

    render() {
        return (
            <div style={styles.main}>
                <CVform 
                    data={this.state}
                    inputPersonalChange={(e) => this.inputPersonalChange(e)}
                    inputWorkChange={(e) => this.inputWorkChange(e)}
                    addWorkExperience={this.addWorkExperience}
                    deleteWorkExperience={(e) => this.deleteWorkExperience(e)}
                    inputEducationChange={(e) => this.inputEducationChange(e)}
                    addDegree={this.addDegree}
                    deleteDegree={(e) => this.deleteDegree(e)}
                />
                <CVpreview data={this.state}/>
            </div>
        )
    }
}

export default Main