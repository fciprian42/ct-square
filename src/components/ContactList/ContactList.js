import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Paper, Avatar, ListItemText, ListItem, List, Divider } from '@material-ui/core'

import ContactProfile from '../ContactProfile'
import SearchBar from '../SearchBar'

import styles from './ContactList.scss'

class ContactList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            searchResult: [],
            contactPreview: [],
            searchText: '',
            showProfile: false
        }

        this.showContact = this.showContact.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }

    showContact(key) {
        this.setState({
            contactPreview: this.props.contacts[key],
            showProfile: true
        })
    }

    handleSearch(searchText) {
        this.setState({searchResult: [], searchText: searchText})

        this.props.contacts.map(contact => {
            if (contact.firstname.toLowerCase().search(searchText.toLowerCase()) !== -1 || contact.lastname.toLowerCase().search(searchText.toLowerCase()) !== -1 || contact.phone.toString().search(searchText) !== -1 || contact.email.toLowerCase().search(searchText.toLowerCase()) !== -1) {
                this.setState(prevState => ({
                    searchResult: [...prevState.searchResult, contact]
                }))
            }
        })
    }

    returnContactList() {
        return this.state.searchText ? this.state.searchResult : this.props.contacts
    }

    handleBack() {
        this.setState({
            showProfile: false
        })
    }

    render() {
        return (<>
            {!this.state.showProfile && <SearchBar onSearch={this.handleSearch} />}
            {!this.state.showProfile && <Paper style={{width: '95%', padding: 8}}>
                {this.props.contacts && this.props.contacts.length > 0 && this.returnContactList().map((contact, key) => {
                    return (
                        <List className='contact-list' key={key}>
                            <ListItem button onClick={() => {this.showContact(key)}}>
                                <Avatar className={styles.avatarContact}>
                                    {contact.firstname.charAt(0)}
                                </Avatar>
                                <ListItemText primary={contact.firstname + ' ' + contact.lastname} secondary={contact.notes} />
                            </ListItem>
                            {key < this.props.contacts.length - 1 && <Divider variant="inset" component="li" />}
                        </List>
                    )
                })}
            </Paper>}
            {this.state.showProfile && <ContactProfile data={this.state.contactPreview} back={this.handleBack} />}
        </>)
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ContactList