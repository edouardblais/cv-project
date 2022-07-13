import React, { Component } from 'react'
import InputWrapper from '../Tools/InputWrapper'
import FormSectionTitle from '../Tools/FormSectionTitle'
import Button from '../Tools/button'
import {styles} from '../../styles/style'

class Education extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div style={styles.formsection}>
                <FormSectionTitle name='Education'/>
                    <form  style={styles.formsection}> 
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='University' type='text' name='university' value={this.props.data.university} onChange={(e) => this.props.inputEducationChange(e)}/>
                            <InputWrapper placeholder='Degree' type='text' name='degree' value={this.props.data.degree} onChange={(e) => this.props.inputEducationChange(e)}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='From' type='text' name='educationfrom' value={this.props.data.educationfrom} onChange={(e) => this.props.inputEducationChange(e)}/>
                            <InputWrapper placeholder='To' type='text' name='educationto' value={this.props.data.educationto} onChange={(e) => this.props.inputEducationChange(e)}/>
                        </div>
                    </form>
                    <div style={styles.buttoncontainer}>
                        <Button name='Add Degree' onClick={this.props.addDegree}/>
                    </div>
                    <div>
                        { this.props.data.education.map((element) => {
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
                                                    <Button name='Delete Degree' id={element.educationid} onClick={(e) => this.props.deleteDegree(e)}/>
                                                </div>
                                            </div>
                            )
                        })}
                    </div>
            </div>

        )
    }
}

export default Education