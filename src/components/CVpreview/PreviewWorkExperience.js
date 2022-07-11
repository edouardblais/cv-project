import React, { Component } from 'react'
import SectionTitle from '../Tools/SectionTitle'

class PreviewWorkExperience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='previewworkexperience'>
                <SectionTitle name='WorkExperience'/>
                <div>
                        { this.props.data.workexperience.map((element) => {
                            return (
                                        <div key={element.workid}>
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