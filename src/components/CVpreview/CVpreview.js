import React from 'react'
import PreviewPersonalInfo from './PreviewPersonalInfo'
import PreviewEducation from './PreviewEducation'
import PreviewWorkExperience from './PreviewWorkExperience'
import {styles} from '../../styles/style'

const CVpreview = React.forwardRef(({cv}, ref) => {
        return (
                    <div style={styles.cvform} ref={ref}>
                        <PreviewPersonalInfo cv={cv}/>
                        <PreviewEducation  cv={cv}/>
                        <PreviewWorkExperience  cv={cv}/>
                    </div>
        )
})


export default CVpreview