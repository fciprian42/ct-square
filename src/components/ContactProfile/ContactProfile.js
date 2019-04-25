import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Paper, Avatar, IconButton, Divider, FormControl, TextField, Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contactsConstants } from '../../constants/contactsConstants'

import styles from './ContactProfile.scss'

class ContactProfile extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            update: false,
            edit: false,
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            notes:  ''
        }

        this.handleSwitch = this.handleSwitch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { data } = nextProps;

        if (prevState.update) {
            return { prevState }
        }

        return {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            notes: data.notes
        }
    }

    handleChange(event) {
        const value = event.target.value;

        this.setState({
            ...this.state,
            update: true,
            [event.target.id]: value
        })
    }

    handleSwitch() {
        this.setState({
            ...this.state,
            edit: !this.state.edit
        })
    }

    handleSubmit(event) {
        const { dispatch } = this.props;

        event.preventDefault();

        dispatch({type: contactsConstants.EDIT_CONTACT, data: this.state})

        this.setState({
            edit: false
        })
    }

    render() {
        return (
            <>
               <Paper style={{width: '50%', padding: 8}}>
                    <div className={styles.flex}>
                        <Avatar className={styles.avatarContact}>
                            {this.state.firstname.charAt(0)}
                        </Avatar>
                        <h2>{this.state.firstname + ' ' + this.state.lastname}</h2>
                        <IconButton color='inherit' onClick={this.handleSwitch}>
                            <FontAwesomeIcon icon={['fal', 'pen']} />
                        </IconButton>
                    </div>
                    <Divider />
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div className={styles.center}>
                                <FormControl className={styles.inputText}>
                                    <TextField
                                        id="lastname"
                                        defaultValue={this.state.lastname}
                                        placeholder={this.props.data.lastname}
                                        onChange={this.handleChange}
                                        label="Nom"
                                        type='text'
                                        margin="normal"
                                        required
                                        disabled={!this.state.edit}
                                    />
                                </FormControl>
                                <FormControl className={styles.inputText}>
                                    <TextField
                                        id="firstname"
                                        defaultValue={this.state.firstname}
                                        placeholder={this.props.data.firstname}
                                        onChange={this.handleChange}
                                        label="Prénom"
                                        type='text'
                                        margin="normal"
                                        required
                                        disabled={!this.state.edit}
                                    />
                                </FormControl>
                            </div>
                            <div className={styles.center}>
                                <FormControl className={styles.inputText}>
                                    <TextField
                                        id="phone"
                                        defaultValue={this.state.phone}
                                        placeholder={this.props.data.phone}
                                        onChange={this.handleChange}
                                        label="Numéro de téléphone"
                                        type='text'
                                        margin="normal"
                                        required
                                        disabled={!this.state.edit}
                                    />
                                </FormControl>
                                <FormControl className={styles.inputText}>
                                    <TextField
                                        id="email"
                                        defaultValue={this.state.email}
                                        placeholder={this.props.data.email}
                                        onChange={this.handleChange}
                                        label="Adresse e-mail"
                                        type='text'
                                        margin="normal"
                                        required
                                        disabled={!this.state.edit}
                                    />
                                </FormControl>
                            </div>
                            <div className={styles.center}>
                                <FormControl style={{width: '100%'}}>
                                    <TextField
                                        multiline={true}
                                        id="notes"
                                        defaultValue={this.state.notes}
                                        placeholder={this.props.data.notes}
                                        onChange={this.handleChange}                          
                                        rows={7}
                                        rowsMax={10}
                                        required
                                        disabled={!this.state.edit}
                                    />
                                </FormControl>
                            </div>
                            <div style={{width: '100%'}}>
                                <Button type='submit' variant="contained" color="primary" style={{width: '100%', marginTop: '1em'}} disabled={!this.state.edit}>
                                    Sauvegarder
                                </Button>
                            </div>
                        </form>
                    </div>
                </Paper>
                <Button type='submit' color="primary" style={{marginTop: '1em'}} onClick={() => {this.props.back()}}>
                    Retourner à la liste
                    <FontAwesomeIcon icon={['fal', 'list']} style={{marginLeft: 10}} />
                </Button>
            </>
        )
    }
}

ContactProfile.propTypes = {
    data: PropTypes.object.isRequired
}

export default connect()(ContactProfile)