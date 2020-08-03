const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {UsersObj: [
        {id: 1, name: 'Svitlana'},
        {id: 2, name: 'Lilya'},
        {id: 3, name: 'Olia'},
        {id: 4, name: 'Mary'},
    ],
    listOfMessages: [
        {message: 'Hi'},
        {message: 'I have news for you'}
    ],
    messageValue: 'write here'
}


const messageReducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_MESSAGE: {
        let newMessage = {
            message: state.messageValue
        };
        return {
            ...state,
            listOfMessages: [...state.listOfMessages, newMessage],
            messageValue: ''
        }
    }
    case UPDATE_MESSAGE: {
        return {
            ...state,
            messageValue: action.nMessage
        }
    }
    default:
        return state;
    }
}


export const addMessageCreateAction = () => {
    return {type: ADD_MESSAGE}
};

export const updateMessage = (enteredText) => {
    return {type: UPDATE_MESSAGE, nMessage: enteredText}

}

export default messageReducer;
