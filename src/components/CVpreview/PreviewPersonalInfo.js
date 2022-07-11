import React, { Component } from 'react'
import SectionTitle from '../Tools/SectionTitle'
import {styles} from '../../styles/style'

class PreviewPersonalInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.cvform}>
                <SectionTitle name='Personal Information'/>
                <div style={styles.cvform}>
                    <p>{this.props.data.firstname}</p>
                    <p>{this.props.data.lastname}</p>
                    <p>{this.props.data.title}</p>
                    <p>{this.props.data.address}</p>
                    <p>{this.props.data.phonenumber}</p>
                    <p>{this.props.data.email}</p>
                </div>
            </div>

        )
    }
}

export default PreviewPersonalInfo