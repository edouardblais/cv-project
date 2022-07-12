import React, { Component } from 'react'
import {styles} from '../../styles/style'

class FormSectionTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.formtitle}>{this.props.name}</div>
        )
    }
}

export default FormSectionTitle