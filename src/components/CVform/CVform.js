import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import WorkExperience from './WorkExperience'

class CVform extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='CVform'>
                    <PersonalInfo personalinfo={this.props.data.personalinfo} inputchange={this.props.inputchange}/>
                    <Education/>
                    <WorkExperience/>
            </div>

        )
    }
}

export default CVform