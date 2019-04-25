import { contactsConstants } from '../constants/contactsConstants';

const initialState = {
    contacts: []
};

function contactsReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case contactsConstants.ADD_CONTACT:
            return {contacts: action.contacts}
            break;
        default:
          return state;
    }
}

export default contactsReducer