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
                    <PersonalInfo inputPersonalChange={(e) => this.props.inputPersonalChange(e)}/>
                    <Education/>
                    <WorkExperience inputWorkChange={(e) => this.props.inputWorkChange(e)} addWorkExperience={this.props.addWorkExperience}/>
            </div>

        )
    }
}

export default CVform