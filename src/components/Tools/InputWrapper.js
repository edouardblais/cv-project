import React, { Component } from 'react'
import {styles} from '../../styles/style'

class InputWrapper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <input style={styles.forminput} name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={(e) => this.props.onChange(e)}/>
        )
    }
}

export default InputWrapper