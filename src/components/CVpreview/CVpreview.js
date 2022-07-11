import React, { Component } from 'react'
import PreviewPersonalInfo from './PreviewPersonalInfo'
import PreviewEducation from './PreviewEducation'
import PreviewWorkExperience from './PreviewWorkExperience'

class CVpreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='cvpreview'>
                    <PreviewPersonalInfo data={this.props.data}/>
                    <PreviewEducation  data={this.props.data}/>
                    <PreviewWorkExperience  data={this.props.data}/>
            </div>

        )
    }
}

export default CVpreview