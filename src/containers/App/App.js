import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ContactList from '../../components/ContactList'

import styles from './App.scss'

class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            contactList: []
        }
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        const { contacts } = nextProps;

        return {
            contactList: contacts.contacts
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className={styles.center} style={{height: 'calc(100vh - 64px)'}}>
                {this.state.contactList.length > 0 ? <ContactList contacts={this.state.contactList} /> : 'empty'}
            </div>
        )
    }
}

App.propTypes = {
    contacts: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
      contacts: state.contacts
    };
};

export default connect(mapStateToProps)(App)