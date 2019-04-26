import axios from '../../axios-api';

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';

export const createCommentSuccess = () => ({type: CREATE_POST_SUCCESS});


export const createComment = commentData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        commentData.user = getState().users.user._id;
        commentData.post = getState().posts.post._id;
        const config = {headers: {'Authorization': token}}
        return axios.post('/comments', commentData, config).then(
            () => dispatch(createCommentSuccess())
        );
    };
};
