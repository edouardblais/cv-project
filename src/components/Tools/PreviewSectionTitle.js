import React, { Component } from 'react'
import {styles} from '../../styles/style'

class PreviewSectionTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.previewtitle}>{this.props.name}</div>
        )
    }
}

export default PreviewSectionTitle