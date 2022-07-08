import React, { Component } from 'react'

class InputWrapper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <input name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
        )
    }
}

export default InputWrapper