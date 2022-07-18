import React from 'react'
import InputWrapper from '../Tools/InputWrapper'
import FormSectionTitle from '../Tools/FormSectionTitle'
import {styles} from '../../styles/style'

const PersonalInfo = (inputPersonalChange) => {
    
        return (
            <div style={styles.formsection}>
                <FormSectionTitle name='Personal Information'/>
                    <form  style={styles.formsection}> 
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='First Name' type='text' name='firstname' defaultValue='' onChange={inputPersonalChange}/>
                            <InputWrapper placeholder='Last Name' type='text' name='lastname' defaultValue='' onChange={inputPersonalChange}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='Title' type='text' name='title' defaultValue='' onChange={inputPersonalChange}/>
                            <InputWrapper placeholder='Email' type='email' name='email' defaultValue='' onChange={inputPersonalChange}/>
                        </div>
                        <div style={styles.formsubsection}>
                            <InputWrapper placeholder='Address' type='text' name='address' defaultValue='' onChange={inputPersonalChange}/>
                            <InputWrapper placeholder='Phone Number' type='text' name='phonenumber' defaultValue='' onChange={inputPersonalChange}/>
                        </div>
                    </form>
            </div>

        )
}


export default PersonalInfo