import React, { Component } from 'react'
import InputWrapper from '../Tools/InputWrapper'
import SectionTitle from '../Tools/SectionTitle'
import Button from '../Tools/button'

class WorkExperience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='workxperience'>
                <SectionTitle name='Work Experience'></SectionTitle>
                    <form> 
                        <InputWrapper placeholder='Position' type='text' name='position' value={this.props.workexperience.position} onChange={(e) => this.props.inputWorkChange(e)}/>
                        <InputWrapper placeholder='Company' type='text' name='company' value={this.props.workexperience.company} onChange={(e) => this.inputWorkChange(e)}/>
                        <InputWrapper placeholder='From' type='text' name='from' value={this.props.workexperience.from} onChange={(e) => this.inputWorkChange(e)}/>
                        <InputWrapper placeholder='To' type='text' name='to' value={this.props.workexperience.to} onChange={(e) => this.inputWorkChange(e)}/>
                        <InputWrapper placeholder='Description' type='text' name='description' value={this.props.workexperience.description} onChange={(e) => this.inputWorkChange(e)}/>
                    </form>
                <Button name='Add Work Experience' onClick={() => this.addWorkExperience()}></Button>
            </div>

        )
    }
}

export default WorkExperience