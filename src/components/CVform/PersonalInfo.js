import React, { Component } from 'react'
import InputWrapper from '../Tools/InputWrapper'
import SectionTitle from '../Tools/SectionTitle'

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='PersonalInfo'>
                <SectionTitle name='Personal Information'></SectionTitle>
                    <form> 
                        <InputWrapper placeholder='First Name' type='text' name='firstname' value={this.props.personalinfo.firstname} onChange={(e) => this.inputChange(e)}/>
                        <InputWrapper placeholder='Last Name' type='text' name='lastname' value={this.props.personalinfo.lastname} onChange={(e) => this.inputChange(e)}/>
                        <InputWrapper placeholder='Title' type='text' name='title' value={this.props.personalinfo.title} onChange={(e) => this.inputChange(e)}/>
                        <InputWrapper placeholder='Address' type='text' name='address' value={this.props.personalinfo.address} onChange={(e) => this.inputChange(e)}/>
                        <InputWrapper placeholder='Phone Number' type='text' name='phonenumber' value={this.props.personalinfo.phonenumber} onChange={(e) => this.inputChange(e)}/>
                        <InputWrapper placeholder='Email' type='email' name='email' value={this.props.personalinfo.email} onChange={(e) => this.inputChange(e)}/>
                    </form>
            </div>

        )
    }
}

export default PersonalInfo