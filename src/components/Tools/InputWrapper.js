import React, { Component } from 'react'

class InputWrapper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <input name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={(e) => this.props.inputPersonalChange(e)}/>
        )
    }
}

export default InputWrapper