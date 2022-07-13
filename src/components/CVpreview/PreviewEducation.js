import React, { Component } from 'react'
import PreviewSectionTitle from '../Tools/PreviewSectionTitle'
import {styles} from '../../styles/style'

class PreviewEducation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.formsection}>
                <PreviewSectionTitle style={styles.previewtitle} name='Education'/>
                <div>
                        { this.props.data.education.map((element) => {
                            return (
                                    <div key={element.educationid} style={styles.previewsubsection}>
                                        <div style={styles.previeweducationandwork}>
                                            <div style={styles.previewsubtitle}>{element.university}</div>
                                            <div style={styles.previewsubsubtitle}>{element.degree}</div>
                                        </div>
                                        <div style={styles.forminput}></div>
                                        <div>
                                            <div style={styles.previewsubtitle}>{element.educationfrom} - {element.educationto}</div>
                                        </div>
                                    </div>
                            )
                            })}
                </div>
            </div>

        )
    }
}

export default PreviewEducation