import React from 'react'
import InputWrapper from '../Tools/InputWrapper'
import FormSectionTitle from '../Tools/FormSectionTitle'
import Button from '../Tools/button'
import {styles} from '../../styles/style'

const WorkExperience = ({
    cv,
    inputWorkChange,
    addWorkExperience,
    deleteWorkExperience,
    }) => {
    
        return (
            <div style={styles.formsection}>
                <FormSectionTitle name='Work Experience'/>
                    <form  style={styles.formsection}> 
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='Position' type='text' name='position' value={cv.position} onChange={inputWorkChange}/>
                            <InputWrapper placeholder='Company' type='text' name='company' value={cv.company} onChange={inputWorkChange}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='From' type='text' name='workfrom' value={cv.workfrom} onChange={inputWorkChange}/>
                            <InputWrapper placeholder='To' type='text' name='workto' value={cv.workto} onChange={inputWorkChange}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='Description' type='text' name='description' value={cv.description} onChange={inputWorkChange}/>
                        </div>
                    </form>
                <div style={styles.buttoncontainer}>
                    <Button name='Add Work Experience' onClick={addWorkExperience}/>
                </div>
                <div>
                        { cv.workexperience.map((element) => {
                            return (
                                            <div key={element.workid} style={styles.previeweducationandwork}>
                                                <div style={styles.previewsubsection}>
                                                    <div>
                                                        <div style={styles.previewsubtitle}>{element.position}</div>
                                                        <div style={styles.previewsubsubtitle}>{element.company}</div>
                                                    </div>
                                                    <div style={styles.forminput}></div>
                                                    <div>
                                                        <div style={styles.previewsubtitle}>{element.workfrom} - {element.workto}</div>
                                                    </div>
                                                </div>
                                                <div style={styles.buttoncontainer}>
                                                    <Button name='Delete Job' id={element.workid} onClick={deleteWorkExperience}/>
                                                </div>
                                            </div>
                            )
                        })}
                </div>
            </div>

        )
}


export default WorkExperience