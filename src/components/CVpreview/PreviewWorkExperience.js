import React, { Component } from 'react'
import SectionTitle from '../Tools/SectionTitle'
import {styles} from '../../styles/style'

class PreviewWorkExperience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.formsection}>
                <SectionTitle name='Work Experience'/>
                <div>
                        { this.props.data.workexperience.map((element) => {
                            return (
                                        <div key={element.workid} style={styles.previeweducationandwork}>
                                            <div style={styles.previewsubsection}>
                                                <div>
                                                    <div style={styles.previewsubtitle}>{element.workfrom} - {element.workto}</div>
                                                </div>
                                                <div>
                                                    <div style={styles.previewsubtitle}>{element.position}</div>
                                                    <div style={styles.previewsubsubtitle}>{element.company}</div>
                                                </div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div>{element.description}</div>
                                        </div>
                            )
                        })}
                </div>
            </div>

        )
    }
}

export default PreviewWorkExperience