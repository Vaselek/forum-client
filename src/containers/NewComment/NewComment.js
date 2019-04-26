import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import CommentForm from "../../components/CommentForm/CommentForm";
import {createComment} from "../../store/actions/commentsActions";

class NewComment extends Component {
    createComment = commentData => {
        this.props.onCommentCreated(commentData);
    };

    render() {
        return (
            <Fragment>
                <h2>New comment</h2>
                <CommentForm
                    onSubmit={this.createComment}
                />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onCommentCreated: commentData => dispatch(createComment(commentData))
});

export default connect(null, mapDispatchToProps)(NewComment);
