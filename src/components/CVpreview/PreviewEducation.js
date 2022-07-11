import React, { Component } from 'react'
import SectionTitle from '../Tools/SectionTitle'

class PreviewEducation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='previeweducation'>
                <SectionTitle name='Education'/>
                <div>
                        { this.props.data.education.map((element) => {
                            return (
                                        <div key={element.educationid}>
                                            <div>{element.university}</div>
                                            <div>{element.degree}</div>
                                            <div>{element.city}</div>
                                            <div>{element.educationfrom}</div>
                                            <div>{element.educationto}</div>
                                        </div>
                            )
                        })}
                </div>
            </div>

        )
    }
}

export default PreviewEducation