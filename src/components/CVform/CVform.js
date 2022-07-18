import React from 'react'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import WorkExperience from './WorkExperience'
import {styles} from '../../styles/style'


const CVform = ({
    cv,
    inputPersonalChange,
    inputEducationChange,
    addDegree,
    deleteDegree,
    inputWorkChange,
    addWorkExperience,
    deleteWorkExperience,
    }) => {
    
        return (
            <div style={styles.cvform}>
                    <PersonalInfo inputPersonalChange={inputPersonalChange}/>
                    <Education inputEducationChange={inputEducationChange} addDegree={addDegree} cv={cv} deleteDegree={deleteDegree}/>
                    <WorkExperience inputWorkChange={inputWorkChange} addWorkExperience={addWorkExperience} cv={cv} deleteWorkExperience={deleteWorkExperience}/>
            </div>

        )
}

export default CVform