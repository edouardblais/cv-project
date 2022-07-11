import React, { Component } from 'react'
import {styles} from '../styles/style'

class Footer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={styles.footer}>
                <p>Created with love, by Ed</p>
            </div>
        )
    }
}

export default Footer