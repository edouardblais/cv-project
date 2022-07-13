import React, { Component } from 'react'
import {styles} from '../../styles/style'
import location from '../../styles/images/location.svg'
import email from '../../styles/images/email.svg'
import phone from '../../styles/images/phone.svg'

class PreviewPersonalInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div style={styles.previewpersonalinfo}>
                    <div style={styles.previewname}>{this.props.data.firstname} {this.props.data.lastname}</div>
                    <div style={styles.previewrole}>{this.props.data.title}</div>
                    <div style={styles.previewpersoinfo}><img src={location} alt='location' style={styles.images}/>{this.props.data.address}</div>
                    <div style={styles.previewmailandphone}>
                        <div style={styles.previewindivmailandphone}><img src={phone} alt='phone' style={styles.images}/>{this.props.data.phonenumber}</div>
                        <div style={styles.previewindivmailandphone}><img src={email} alt='email' style={styles.images}/>{this.props.data.email}</div>
                    </div>
                </div>
        )
    }
}

export default PreviewPersonalInfo