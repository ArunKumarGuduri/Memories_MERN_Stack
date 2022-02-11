import { AUTH } from '../constants/actionTypes'
import * as api from '../api'

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        // signup implementation
        const { data } = await api.signUp(formData)
        dispatch({ type: 'AUTH', data });
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        // signin logic
        const { data } = await api.signIn(formData)
        dispatch({ type: 'AUTH', data });
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}