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
            <div className='workexperience'>
                <SectionTitle name='Work Experience'></SectionTitle>
                    <form> 
                        <InputWrapper placeholder='Position' type='text' name='position' defaultValue='' onChange={(e) => this.props.inputWorkChange(e)}/>
                        <InputWrapper placeholder='Company' type='text' name='company' defaultValue='' onChange={(e) => this.props.inputWorkChange(e)}/>
                        <InputWrapper placeholder='From' type='text' name='workfrom' defaultValue='' onChange={(e) => this.props.inputWorkChange(e)}/>
                        <InputWrapper placeholder='To' type='text' name='workto' defaultValue='' onChange={(e) => this.props.inputWorkChange(e)}/>
                        <InputWrapper placeholder='Description' type='text' name='description' defaultValue='' onChange={(e) => this.props.inputWorkChange(e)}/>
                    </form>
                <Button name='Add Work Experience' onClick={this.props.addWorkExperience}></Button>
            </div>

        )
    }
}

export default WorkExperience