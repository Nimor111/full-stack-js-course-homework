import React, {Fragment} from "react";
import PropTypes from "prop-types";

import ReactMarkdown from "react-markdown";

const PostItem = ({post, strippedText}) => {
  return (
    <Fragment>
      <h3>Title: {post.title}</h3>
      <h4>Author: {post.author}</h4>
      <h5>Date: {post.date}</h5>
      <ReactMarkdown source={strippedText ? strippedText : post.text} />
      <p>Tags: {post.tags}</p>
      <p>{post.imageUrl}</p>
      <hr />
    </Fragment>
  );
};

PostItem.defaultProps = {};

PostItem.propTypes = {};

export default PostItem;
