import React from 'react'
import PreviewSectionTitle from '../Tools/PreviewSectionTitle'
import {styles} from '../../styles/style'

const PreviewWorkExperience = ({cv}) => {
    
        return (
            <div style={styles.formsection}>
                <PreviewSectionTitle name='Work Experience'/>
                <div>
                        { cv.workexperience.map((element) => {
                            return (
                                        <div key={element.workid} style={styles.previeweducationandwork}>
                                            <div style={styles.previewsubsection}>
                                                <div>
                                                    <div style={styles.previewsubtitle}>{element.position}</div>
                                                    <div style={styles.previewsubsubtitle}>{element.company}</div>
                                                </div>
                                                <div style={styles.forminput}></div>
                                                <div>
                                                    <div style={styles.previewsubtitle}>{element.workfrom} - {element.workto}</div>
                                                </div>
                                            </div>
                                            <div style={styles.previewjobdescription}>{element.description}</div>
                                        </div>
                            )
                        })}
                </div>
            </div>

        )
}


export default PreviewWorkExperience