import axios from '../../axios-api';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';

export const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
export const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});
export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const createPostSuccess = () => ({type: CREATE_POST_SUCCESS});

export const fetchPosts = () => {
    return dispatch => {
        return axios.get('/posts').then(
            response => dispatch(fetchPostsSuccess(response.data))
        );
    };
};

export const fetchPost = (postId) => {
    return dispatch => {
        return axios.get('/posts/' + postId).then(
            response => dispatch(fetchPostSuccess(response.data))
        );
    };
};

export const fetchComments = (postId) => {
    return dispatch => {
        return axios.get('/comments?post=' + postId).then(
            response => dispatch(fetchCommentsSuccess(response.data))
        );
    };
};

export const createPost = postData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        console.log(token)
        postData.append('user', getState().users.user._id);
        const config = {headers: {'Authorization': token}}
        return axios.post('/posts', postData, config).then(
            () => dispatch(createPostSuccess())
        );
    };
};
