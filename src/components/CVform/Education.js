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
                    <Button name='Add Degree' onClick={this.props.addDegree}></Button>
                    <div>
                        { this.props.data.education.map((element) => {
                            return (
                                        <div key={element.educationid}  style={styles.formsection}>
                                            <div>{element.university}</div>
                                            <div>{element.degree}</div>
                                            <div>{element.educationfrom}</div>
                                            <div>{element.educationto}</div>
                                            <button id={element.educationid} onClick={(e) => this.props.deleteDegree(e)}>Delete</button>
                                        </div>
                            )
                        })}
                    </div>
            </div>

        )
    }
}

export default Education