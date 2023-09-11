import { types } from '../types';

function getUsersSuccess(users) {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: users,
    };
}

function getUsersFailure(error) {
    return {
        type: types.GET_USERS_FAILURE,
        payload: error,
    };
}

export function getUsers() {
    return async function (dispatch) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (response.status === 200) {
                const users = await response.json();
                dispatch(getUsersSuccess(users));
            } else {
                dispatch(getUsersFailure('Failed to fetch users'));
            }
        } catch (error) {
            dispatch(getUsersFailure(error.message));
        }
    };
}
