import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGE_TOGGLE = 'CHANGE_TOGGLE';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    elementsOnPage: 5,
    totalElements: 0,
    currentPage: 1,
    isToggleLoad: false,
    followingInProgress: []
}


let usersReducer = (state=initialState, action) => {
        switch (action.type) {
            case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
            case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
            case SET_USERS:
                return {...state, users: action.users}
            case SET_CURRENT_PAGE:
                return {...state, currentPage: action.page}
            case SET_TOTAL_USERS_COUNT:
                return {...state, totalElements: action.totalCount}
            case CHANGE_TOGGLE:
                return {...state, isToggleLoad: action.changed}
            case TOGGLE_FOLLOWING_PROGRESS:
                return {...state,
                    followingInProgress: action.changed
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter( id => id != action.userId)}
        default:
            return state
    }

}


export const follow = (userId) => {
    return {type: FOLLOW, userId}
}

export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
}

export const setCurrentPage = (page) => {
    return {type: SET_CURRENT_PAGE, page}
}

export const setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
}

export const changeToggle = (changed) => {
    return {type: CHANGE_TOGGLE, changed}
}

export const toggleFollowingProgress = (changed, userId) => {
    return {type: TOGGLE_FOLLOWING_PROGRESS, changed, userId}
}

export const getUsersThunk = (currentPage, elemOnPage) => {
    return (dispatch) => {
        dispatch(changeToggle(true))
        usersAPI.getUsers(currentPage, elemOnPage).then(data => {
            dispatch(changeToggle(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
};

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(resp => {
                if (resp.data.resultCode == 0) {
                    dispatch(follow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(resp => {
                if (resp.data.resultCode == 0) {
                    dispatch(unfollow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer
