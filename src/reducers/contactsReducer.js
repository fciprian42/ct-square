import { contactsConstants } from '../constants/contactsConstants';

const initialState = {
    contacts: []
};

function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case contactsConstants.ADD_CONTACT:
            return {contacts: state.contacts.concat(action.data)}
            break;
        default:
          return state;
    }
}

export default contactsReducer