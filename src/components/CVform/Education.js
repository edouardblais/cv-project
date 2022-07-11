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
                        <InputWrapper placeholder='University' type='text' name='university' defaultValue='' onChange={(e) => this.props.inputEducationChange(e)}/>
                        <InputWrapper placeholder='Degree' type='text' name='degree' defaultValue='' onChange={(e) => this.props.inputEducationChange(e)}/>
                        <InputWrapper placeholder='City' type='text' name='city' defaultValue='' onChange={(e) => this.props.inputEducationChange(e)}/>
                        <InputWrapper placeholder='To' type='text' name='educationto' defaultValue='' onChange={(e) => this.props.inputEducationChange(e)}/>
                        <InputWrapper placeholder='From' type='text' name='educationfrom' defaultValue='' onChange={(e) => this.props.inputEducationChange(e)}/>
                    </form>
                <Button name='Add Degree' onClick={this.props.addDegree}></Button>
            </div>

        )
    }
}

export default Education