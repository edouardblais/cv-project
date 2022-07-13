import React, { Component } from 'react'
import { styles } from '../../styles/style'

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button onClick={(e)=>this.props.onClick(e)} style={styles.button} id={this.props.id}>{this.props.name}</button>
        )
    }
}

export default Button