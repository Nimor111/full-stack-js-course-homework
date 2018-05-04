import React, {Component} from "react";
import PropTypes from "prop-types";

import firebase from "../../firebase";

import PostsList from "./PostsList";

const firstFifteenPosts = posts => {
  return posts.slice(0, 15);
};

class PostsContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    recent: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  removePost(postId) {
    const itemRef = firebase.database().ref(`/items/${postId}`);
    itemRef.remove();
  }

  sortPosts(posts) {
    return posts.sort((a, b) => a.date < b.date);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      // take all posts
      const posts = snapshot.val();
      const newState = [];

      for (const post in posts) {
        if (post) {
          newState.push({
            id: post,
            title: posts[post].title,
            author: posts[post].author,
            date: posts[post].date,
            text: posts[post].text,
            tags: posts[post].tags,
            imageUrl: posts[post].imageUrl,
            status: posts[post].status
          });
        }
      }

      this.setState({posts: this.sortPosts(newState)});
    });
  }

  render() {
    return (
      <div>
        {this.props.recent ? (
          <PostsList
            posts={firstFifteenPosts(this.state.posts)}
            recent={this.props.recent}
          />
        ) : (
          <PostsList posts={this.state.posts} removePost={this.removePost} />
        )}
      </div>
    );
  }
}

export default PostsContainer;
