import { AUTH } from "../actionTypes/ActionTypes";

import * as api from "../api/index";

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data});

        history.push('/Ehome');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data})
        history.push('/Ehome');
    } catch (error) {
        console.log(error);
    }
};
