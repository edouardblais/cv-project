import React, { Component } from 'react'

class SectionTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

export default SectionTitle