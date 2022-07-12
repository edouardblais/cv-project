import React, { Component } from 'react'
import {styles} from '../../styles/style'

class PreviewPersonalInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div style={styles.previewpersonalinfo}>
                    <div style={styles.previewname}>{this.props.data.firstname} {this.props.data.lastname}</div>
                    <div style={styles.previewtitle}>{this.props.data.title}</div>
                    <div>{this.props.data.address}</div>
                    <div>{this.props.data.phonenumber}</div>
                    <div>{this.props.data.email}</div>
                </div>
        )
    }
}

export default PreviewPersonalInfo