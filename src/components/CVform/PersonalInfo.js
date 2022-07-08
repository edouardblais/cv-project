import React, { Component } from 'react'
import InputWrapper from '../Tools/InputWrapper'

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='PersonalInfo'>
                <form> 
                    <InputWrapper placeholder='First Name' type='text' name='firstname' value={this.props.personalinfo.firstname} onChange={this.inputChange}/>
                    <InputWrapper placeholder='Last Name' type='text' name='lastname' value={this.props.personalinfo.lastname} onChange={this.inputChange}/>
                    <InputWrapper placeholder='Title' type='text' name='title' value={this.props.personalinfo.title} onChange={this.inputChange}/>
                    <InputWrapper placeholder='Address' type='text' name='address' value={this.props.personalinfo.address} onChange={this.inputChange}/>
                    <InputWrapper placeholder='Phone Number' type='text' name='phonenumber' value={this.props.personalinfo.phonenumber} onChange={this.inputChange}/>
                    <InputWrapper placeholder='Email' type='email' name='email' value={this.props.personalinfo.email} onChange={this.inputChange}/>
                </form>
            </div>

        )
    }
}

export default PersonalInfo