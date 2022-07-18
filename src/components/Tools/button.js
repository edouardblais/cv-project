import React from 'react'
import { styles } from '../../styles/style'

const Button = ({
    name,
    id,
    onClick,
    }) => {
    
        return (
            <button onClick={onClick} style={styles.button} id={id}>{name}</button>
        )
}

export default Button