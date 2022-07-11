import React, { Component } from 'react'
import {styles} from '../styles/style'

class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={styles.header}>
                <h1>CV CREATOR</h1>
            </div>
        )
    }
}

export default Header