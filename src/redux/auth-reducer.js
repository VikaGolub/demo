import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state

    }
};

export const setUsersData = ( userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const registrateThunk = () => {
    return (dispatch) => {
        authAPI.registrate()
            .then(response => {
                return response.data
            })
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setUsersData( id, email, login));
                }
            })
    }
}

export default authReducer;
