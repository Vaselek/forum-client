import React, {Component, Fragment} from 'react';
import {Button} from "reactstrap";
import {fetchPosts} from "../../store/actions/postsActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PostListItem from "../../components/PostListItem/PostListItem";

class Posts extends Component {
    componentDidMount() {
        this.props.onFetchPosts();
    }

    render() {
        return (
            <Fragment>
                {this.props.posts.map(post => (
                    <PostListItem
                        key={post._id}
                        _id={post._id}
                        title={post.title}
                        issuedAt={post.issuedAt}
                        image={post.image}
                        user={post.user}
                    />
                ))}

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    onFetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
