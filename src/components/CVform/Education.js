import React, { Component } from 'react'
import InputWrapper from '../Tools/InputWrapper'
import SectionTitle from '../Tools/SectionTitle'
import Button from '../Tools/button'

class Education extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className='education'>
                <SectionTitle name='Education'></SectionTitle>
                    <form> 
                        <InputWrapper placeholder='University' type='text' name='university' value={this.props.data.university} onChange={(e) => this.props.inputEducationChange(e)}/>
                        <InputWrapper placeholder='Degree' type='text' name='degree' value={this.props.data.degree} onChange={(e) => this.props.inputEducationChange(e)}/>
                        <InputWrapper placeholder='City' type='text' name='city' value={this.props.data.city} onChange={(e) => this.props.inputEducationChange(e)}/>
                        <InputWrapper placeholder='From' type='text' name='educationfrom' value={this.props.data.educationfrom} onChange={(e) => this.props.inputEducationChange(e)}/>
                        <InputWrapper placeholder='To' type='text' name='educationto' value={this.props.data.educationto} onChange={(e) => this.props.inputEducationChange(e)}/>
                    </form>
                    <div>
                        { this.props.data.education.map((element) => {
                            return (
                                        <div key={element.educationid}>
                                            <div>{element.university}</div>
                                            <div>{element.degree}</div>
                                            <div>{element.city}</div>
                                            <div>{element.educationfrom}</div>
                                            <div>{element.educationto}</div>
                                            <button id={element.educationid} onClick={(e) => this.props.deleteDegree(e)}>Delete</button>
                                        </div>
                            )
                        })}
                    </div>
                <Button name='Add Degree' onClick={this.props.addDegree}></Button>
            </div>

        )
    }
}

export default Education