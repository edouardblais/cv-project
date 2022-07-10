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
                    <PersonalInfo personalinfo={this.props.data.personalinfo} inputPersonalChange={(e) => this.props.inputPersonalChange(e)}/>
                    <Education/>
                    <WorkExperience workexperience={this.props.data.workexperience} inputWorkChange={this.props.inputWorkChange} addWorkExperience={this.props.addWorkExperience}/>
            </div>

        )
    }
}

export default CVform