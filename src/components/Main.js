import React, { Component } from 'react'
import CVform from './CVform/CVform'
import CVpreview from './CVpreview/CVpreview'
import uniqid from 'uniqid'
import {styles} from '../styles/style'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname:'Chris',
            lastname: 'Sharma',
            title: 'Profesionnal Rock Climber',
            address: '123 Roca, Barcelona, Spain',
            phonenumber: '(123) 456-7890',
            email: 'chrissharma@coolmail.com',
            
            position:'',
            company:'',
            workfrom:'',
            workto:'',
            description:'',
            workid:uniqid(),

            workexperience:[
                {
                    position:'Youtube Influencer', 
                    company:'SharmaChannel', 
                    workfrom:'2018',
                    workto:'present',
                    description:'Released hundreds of trendy rock climbing videos and acquired overs 10 billions subscribers',
                    workid:uniqid(),
                },
                {
                    position:"World's Best Rock Climber", 
                    company:'Petzl', 
                    workfrom:'2000',
                    workto:'2013',
                    description:'Climbed the hardest ways up rocks without falling',
                    workid:uniqid(),
                }],

            university:'',
            degree:'',
            educationfrom:'',
            educationto:'',
            educationid:uniqid(),

            education:[
                {
                    university:'University of Life',
                    degree:'B.Sc. in Finger Strength',
                    educationfrom:'1995',
                    educationto:'1998', 
                    educationid:uniqid(),
                }
            ],
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
            educationid: this.state.educationid,
        }
        this.setState({   
            education: this.state.education.concat(newdegree),
        }) 
        this.setState({
            university:'',
            degree:'',
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