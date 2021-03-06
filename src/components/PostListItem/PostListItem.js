import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody} from "reactstrap";
import PostThumbnail from "../PostThumbnail/PostThumbnail";
import {Link} from "react-router-dom";

const PostListItem = props => {
    return (
        <Card style={{marginTop: '10px'}}>
            <CardBody>
                <PostThumbnail image={props.image}/>
                <Link to={'/post/' + props._id}>
                    {props.title}
                </Link>
                <span style={{marginLeft: '10px'}}>
                    dated <i>{new Date(props.issuedAt).toDateString()}</i> by <strong>{props.user.username}</strong>
                </span>
            </CardBody>
        </Card>
    );
};

PostListItem.propTypes = {
    image: PropTypes.string,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    issuedAt: PropTypes.string.isRequired
};

export default PostListItem;
