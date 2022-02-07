import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        console.log(`posts in actions:: ${data}`);
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
export const updatePost = (post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(post);
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}