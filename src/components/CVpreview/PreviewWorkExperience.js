import React, { Component } from 'react'
import SectionTitle from '../Tools/SectionTitle'
import {styles} from '../../styles/style'

class PreviewWorkExperience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.cvform}>
                <SectionTitle name='WorkExperience'/>
                <div>
                        { this.props.data.workexperience.map((element) => {
                            return (
                                        <div key={element.workid} style={styles.cvform}>
                                            <div>{element.position}</div>
                                            <div>{element.company}</div>
                                            <div>{element.workfrom}</div>
                                            <div>{element.workto}</div>
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