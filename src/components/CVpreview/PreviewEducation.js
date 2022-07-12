import React, { Component } from 'react'
import SectionTitle from '../Tools/SectionTitle'
import {styles} from '../../styles/style'

class PreviewEducation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.formsection}>
                <SectionTitle name='Education'/>
                <div>
                        { this.props.data.education.map((element) => {
                            return (
                                        <div key={element.educationid} style={styles.previeweducationandwork}>
                                            <div style={styles.previewsubtitle}>{element.university}</div>
                                            <div style={styles.previewsubsubtitle}>{element.degree}</div>
                                            <div style={styles.previewsubtitle}>{element.educationfrom} - {element.educationto}</div>
                                        </div>
                            )
                        })}
                </div>
            </div>

        )
    }
}

export default PreviewEducation