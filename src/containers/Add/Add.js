import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FormControl, TextField, Button } from '@material-ui/core'
import { contactsConstants } from '../../constants/contactsConstants'

import styles from './Add.scss'

class Add extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            notes: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;

        if (value) {
            this.setState({
                [event.target.id]: value
            })
        }
    }

    handleSubmit(event) {
        const { dispatch, history } = this.props;

        event.preventDefault();

        dispatch({type: contactsConstants.ADD_CONTACT, data: this.state})
        history.push('/')
    }

    render() {
        return (
            <div className={styles.center} style={{height: 'calc(100vh - 64px)'}}>
                <h1>
                    Ajouter un contact
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac pharetra dolor. Curabitur gravida, tortor at euismod semper, ipsum velit finibus urna, ut auctor urna erat at libero.</p>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <div>
                        <FormControl className={styles.inputText}>
                            <TextField
                                id="lastname"
                                value={this.state.lastname}
                                onChange={this.handleChange}
                                label="Nom"
                                type='text'
                                className='colorTheme'
                                margin="normal"
                                required
                            />
                        </FormControl>
                        <FormControl className={styles.inputText}>
                            <TextField
                                id="firstname"
                                value={this.state.firstname}
                                onChange={this.handleChange}
                                label="Prénom"
                                type='text'
                                className='colorTheme'
                                margin="normal"
                                required
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={styles.inputText}>
                            <TextField
                                id="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                label="Numéro de téléphone"
                                type='text'
                                className='colorTheme'
                                margin="normal"
                                required
                            />
                        </FormControl>
                        <FormControl className={styles.inputText}>
                            <TextField
                                id="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                label="Adresse e-mail"
                                type='email'
                                className='colorTheme'
                                margin="normal"
                                required
                            />
                        </FormControl>
                    </div>
                    <div className={styles.notes}>
                        <FormControl style={{width: '100%'}}>
                            <TextField
                                placeholder="Ajouter une note"
                                multiline={true}
                                id="notes"
                                value={this.state.notes}
                                onChange={this.handleChange}
                                rows={7}
                                rowsMax={10}
                            />
                        </FormControl>
                    </div>
                    <div style={{width: '100%'}}>
                        <Button type='submit' variant="contained" color="primary" className={styles.btnSubmit}>
                            Ajouter
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(Add)