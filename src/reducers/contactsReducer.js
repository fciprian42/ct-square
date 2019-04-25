import { contactsConstants } from '../constants/contactsConstants'

const initialState = {
    contacts: []
}

function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case contactsConstants.ADD_CONTACT:
            return {contacts: state.contacts.concat(action.data)}
            break;
        case contactsConstants.EDIT_CONTACT:
            let arr = state.contacts
            
            state.contacts.forEach((contact, key) => {
                if (contact.id === action.data.id) {
                    const index = state.contacts.indexOf(key)
                    
                    let replaceContact = {
                        id: contact.id,
                        firstname: action.data.firstname,
                        lastname: action.data.lastname,
                        email: action.data.email,
                        phone: action.data.phone,
                        notes: action.data.notes
                    };

                    arr.splice(index, 1)
                    arr.push(replaceContact)
                }
            });

            return { contacts: arr }
            break;
        default:
          return state;
    }
}

export default contactsReducer