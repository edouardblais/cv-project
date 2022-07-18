import React from 'react'
import InputWrapper from '../Tools/InputWrapper'
import FormSectionTitle from '../Tools/FormSectionTitle'
import Button from '../Tools/button'
import {styles} from '../../styles/style'

const Education = ({
    cv,
    inputEducationChange,
    addDegree,
    deleteDegree,
    })  => {
  
        return (
            <div style={styles.formsection}>
                <FormSectionTitle name='Education'/>
                    <form  style={styles.formsection}> 
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='University' type='text' name='university' value={cv.university} onChange={inputEducationChange}/>
                            <InputWrapper placeholder='Degree' type='text' name='degree' value={cv.degree} onChange={inputEducationChange}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='From' type='text' name='educationfrom' value={cv.educationfrom} onChange={inputEducationChange}/>
                            <InputWrapper placeholder='To' type='text' name='educationto' value={cv.educationto} onChange={inputEducationChange}/>
                        </div>
                    </form>
                    <div style={styles.buttoncontainer}>
                        <Button name='Add Degree' onClick={addDegree}/>
                    </div>
                    <div>
                        { cv.education.map((element) => {
                            return (
                                            <div key={element.educationid}>
                                                <div style={styles.previewsubsection}>
                                                    <div style={styles.previeweducationandwork}>
                                                        <div style={styles.previewsubtitle}>{element.university}</div>
                                                        <div style={styles.previewsubsubtitle}>{element.degree}</div>
                                                    </div>
                                                    <div style={styles.forminput}></div>
                                                    <div>
                                                        <div style={styles.previewsubtitle}>{element.educationfrom} - {element.educationto}</div>
                                                    </div>
                                                </div>
                                                <div style={styles.buttoncontainer}>
                                                    <Button name='Delete Degree' id={element.educationid} onClick={deleteDegree}/>
                                                </div>
                                            </div>
                            )
                        })}
                    </div>
            </div>

        )
}

export default Education