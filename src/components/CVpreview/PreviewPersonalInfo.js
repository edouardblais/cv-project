import React from 'react'
import {styles} from '../../styles/style'
import location from '../../styles/images/location.svg'
import email from '../../styles/images/email.svg'
import phone from '../../styles/images/phone.svg'

const PreviewPersonalInfo = ({cv}) => {
    
        return (
                <div style={styles.previewpersonalinfo}>
                    <div style={styles.previewname}>{cv.firstname} {cv.lastname}</div>
                    <div style={styles.previewrole}>{cv.title}</div>
                    <div style={styles.previewpersoinfo}><img src={location} alt='location' style={styles.images}/>{cv.address}</div>
                    <div style={styles.previewmailandphone}>
                        <div style={styles.previewindivmailandphone}><img src={phone} alt='phone' style={styles.images}/>{cv.phonenumber}</div>
                        <div style={styles.previewindivmailandphone}><img src={email} alt='email' style={styles.images}/>{cv.email}</div>
                    </div>
                </div>
        )
}


export default PreviewPersonalInfo