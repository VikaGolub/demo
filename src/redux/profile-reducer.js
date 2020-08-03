import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const GET_USER_PROFILE = 'GET_USER_PROFILE';

let initialState = {
        listOfPosts: [
            {message: 'Hello', likesCount: 7},
            {message: 'It\'s my first post', likesCount: 10}
        ],
        postField: 'What\'s new',
    profile: null
}


const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.postField,
                likesCount: 0
            };
            return {
                ...state,
                listOfPosts: [...state.listOfPosts, newPost],
                postField: ''
            }

        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                postField: action.PostMess
            }
        }
        case GET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profileId
            }
        }
        default:
            return state;
    }
}


export const addPostCreateAction = () => {
    return {
        type: ADD_POST
    }
};

export const updatePostCreator = (enteredText) => {
    return {
        type: UPDATE_POST_TEXT, PostMess: enteredText
    }
}

export const getUsersProfile = (profile) => {
    // debugger;
    return {
        type: GET_USER_PROFILE, profileId: profile
    }
}

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(respond => {
                dispatch(getUsersProfile(respond.data));
            })
    }
}

export default profileReducer;
