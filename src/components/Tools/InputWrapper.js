import React from 'react'
import {styles} from '../../styles/style'

const InputWrapper = ({
    name,
    type,
    placeholder,
    value,
    onChange,
    }) => {
    
        return (
            <input style={styles.forminput} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        )
}

export default InputWrapper