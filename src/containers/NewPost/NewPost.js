import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import PostForm from "../../components/PostForm/PostForm";
import {createPost} from "../../store/actions/postsActions";

class NewPost extends Component {
    createPost = postData => {
        this.props.onPostCreated(postData).then(() => {
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h2>New post</h2>
                <PostForm
                    onSubmit={this.createPost}
                />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onPostCreated: postData => dispatch(createPost(postData))
});

export default connect(null, mapDispatchToProps)(NewPost);
