import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import WorkExperience from './WorkExperience'
import {styles} from '../../styles/style'

class CVform extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.cvform}>
                    <PersonalInfo inputPersonalChange={(e) => this.props.inputPersonalChange(e)}/>
                    <Education inputEducationChange={(e) => this.props.inputEducationChange(e)} addDegree={this.props.addDegree} data={this.props.data} deleteDegree={(e) => this.props.deleteDegree(e)}/>
                    <WorkExperience inputWorkChange={(e) => this.props.inputWorkChange(e)} addWorkExperience={this.props.addWorkExperience} data={this.props.data} deleteWorkExperience={(e) => this.props.deleteWorkExperience(e)}/>
            </div>

        )
    }
}

export default CVform