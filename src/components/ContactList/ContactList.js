import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Paper, Avatar, ListItemText, ListItem, List, Divider } from '@material-ui/core'

import ContactProfile from '../ContactProfile'

class ContactList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            contactPreview: [],
            showProfile: false
        }

        this.showContact = this.showContact.bind(this)
    }

    showContact(key) {
        this.setState({
            contactPreview: this.props.contacts[key],
            showProfile: true
        })
    }

    render() {
        return (<>
            <h2>Vos contacts</h2>
            {!this.state.showProfile && <Paper>
                {this.props.contacts && this.props.contacts.length > 0 && this.props.contacts.map((contact, key) => {
                    return (
                        <List className='contact-list' key={key}>
                            <ListItem button onClick={() => {this.showContact(key)}}>
                                <Avatar className='AvatarContact'>
                                    {contact.firstname.charAt(0)}
                                </Avatar>
                                <ListItemText primary={contact.firstname + ' ' + contact.lastname} secondary={contact.notes} />
                            </ListItem>
                            {key < this.props.contacts.length - 1 && <Divider variant="inset" component="li" />}
                        </List>
                    )
                })}
            </Paper>}
            {this.state.showProfile && this.state.contactPreview.length > 0 && <ContactProfile data={this.state.contactPreview} />}
        </>)
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ContactList