import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";

import PostItem from "../../components/Posts/PostItem";

const stripString = string => {
  return string.length > 150 ? string.substring(0, 150) + "..." : string;
};

class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    recent: PropTypes.bool,
    removePost: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      filter: "all",
      filteredPosts: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {...prevState, filteredPosts: nextProps.posts};
  }

  handleFilter(e) {
    let filteredPosts;
    switch (e.target.value) {
      case "active": {
        filteredPosts = this.props.posts.filter(post => post.status === true);
        break;
      }
      case "inactive": {
        filteredPosts = this.props.posts.filter(post => post.status === false);
        break;
      }
      default: {
        filteredPosts = this.props.posts;
        break;
      }
    }

    this.setState({filteredPosts});
  }

  render() {
    const {recent, removePost} = this.props;
    const {filteredPosts} = this.state;
    return (
      <div>
        {recent ? (
          <div>
            <h3>Filter by:</h3>
            <select selected={this.state.selected} onChange={this.handleFilter}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="all">All</option>
            </select>
          </div>
        ) : null}

        {filteredPosts.map(post => {
          return (
            <div key={post.id}>
              {removePost ? (
                <div>
                  <button type="button" onClick={() => removePost(post.id)}>
                    Remove post
                  </button>
                  <button type="button">
                    <Link to={`/update-post/${post.id}`}>Update post</Link>
                  </button>
                </div>
              ) : null}

              {recent ? (
                <PostItem
                  post={post}
                  strippedText={`${stripString(post.text)}`}
                />
              ) : (
                <PostItem post={post} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostsList;
