import React, { Component } from 'react'
import InputWrapper from '../Tools/InputWrapper'
import SectionTitle from '../Tools/SectionTitle'
import {styles} from '../../styles/style'

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.formsection}>
                <SectionTitle name='Personal Information'></SectionTitle>
                    <form  style={styles.formsection}> 
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='First Name' type='text' name='firstname' defaultValue='' onChange={(e) => this.props.inputPersonalChange(e)}/>
                            <InputWrapper placeholder='Last Name' type='text' name='lastname' defaultValue='' onChange={(e) => this.props.inputPersonalChange(e)}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='Title' type='text' name='title' defaultValue='' onChange={(e) => this.props.inputPersonalChange(e)}/>
                            <InputWrapper placeholder='Email' type='email' name='email' defaultValue='' onChange={(e) => this.props.inputPersonalChange(e)}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='Address' type='text' name='address' defaultValue='' onChange={(e) => this.props.inputPersonalChange(e)}/>
                            <InputWrapper placeholder='Phone Number' type='text' name='phonenumber' defaultValue='' onChange={(e) => this.props.inputPersonalChange(e)}/>
                        </div>
                    </form>
            </div>

        )
    }
}

export default PersonalInfo