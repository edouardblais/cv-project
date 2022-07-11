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
                        <InputWrapper placeholder='Position' type='text' name='position' value={this.props.data.position} onChange={(e) => this.props.inputWorkChange(e)}/>
                        <InputWrapper placeholder='Company' type='text' name='company' value={this.props.data.company} onChange={(e) => this.props.inputWorkChange(e)}/>
                        <InputWrapper placeholder='From' type='text' name='workfrom' value={this.props.data.workfrom} onChange={(e) => this.props.inputWorkChange(e)}/>
                        <InputWrapper placeholder='To' type='text' name='workto' value={this.props.data.workto} onChange={(e) => this.props.inputWorkChange(e)}/>
                        <InputWrapper placeholder='Description' type='text' name='description' value={this.props.data.description} onChange={(e) => this.props.inputWorkChange(e)}/>
                    </form>
                    <div>
                        { this.props.data.workexperience.map((element) => {
                            return (
                                        <div key={element.workid}>
                                            <div>{element.position}</div>
                                            <div>{element.company}</div>
                                            <div>{element.workfrom}</div>
                                            <div>{element.workto}</div>
                                            <div>{element.description}</div>
                                            <button id={element.workid} onClick={(e) => this.props.deleteWorkExperience(e)}>Delete</button>
                                        </div>
                            )
                        })}
                    </div>
                <Button name='Add Work Experience' onClick={this.props.addWorkExperience}></Button>
            </div>

        )
    }
}

export default WorkExperience