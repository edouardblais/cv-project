import React, { Component } from 'react'
import InputWrapper from '../Tools/InputWrapper'
import FormSectionTitle from '../Tools/FormSectionTitle'
import Button from '../Tools/button'
import {styles} from '../../styles/style'

class WorkExperience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.formsection}>
                <FormSectionTitle name='Work Experience'/>
                    <form  style={styles.formsection}> 
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='Position' type='text' name='position' value={this.props.data.position} onChange={(e) => this.props.inputWorkChange(e)}/>
                            <InputWrapper placeholder='Company' type='text' name='company' value={this.props.data.company} onChange={(e) => this.props.inputWorkChange(e)}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='From' type='text' name='workfrom' value={this.props.data.workfrom} onChange={(e) => this.props.inputWorkChange(e)}/>
                            <InputWrapper placeholder='To' type='text' name='workto' value={this.props.data.workto} onChange={(e) => this.props.inputWorkChange(e)}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='Description' type='text' name='description' value={this.props.data.description} onChange={(e) => this.props.inputWorkChange(e)}/>
                        </div>
                    </form>
                <div style={styles.buttoncontainer}>
                    <Button name='Add Work Experience' onClick={this.props.addWorkExperience}/>
                </div>
                <div>
                        { this.props.data.workexperience.map((element) => {
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
                                                    <Button name='Delete Job' id={element.workid} onClick={(e) => this.props.deleteWorkExperience(e)}/>
                                                </div>
                                            </div>
                            )
                        })}
                </div>
            </div>

        )
    }
}

export default WorkExperience