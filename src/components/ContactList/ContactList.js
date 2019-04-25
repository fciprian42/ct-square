import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ContactList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        console.log(this.props.contacts)
        return (<></>)
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ContactList