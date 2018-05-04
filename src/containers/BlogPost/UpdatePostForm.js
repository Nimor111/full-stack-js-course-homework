import React, {Component} from "react";
import PropTypes from "prop-types";

import firebase from "../../firebase";

class UpdatePostForm extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      date: "",
      text: "",
      tags: "",
      imageUrl: "",
      status: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleStatusChange(e) {
    this.setState({status: !this.state.status});
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      const posts = snapshot.val();
      const {title, author, date, text, tags, imageUrl, status} = posts[
        this.props.match.params.id
      ];

      this.setState({
        title,
        author,
        date,
        text,
        tags,
        imageUrl,
        status
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemRef = firebase
      .database()
      .ref(`items/${this.props.match.params.id}`);
    itemRef.update({...this.state, id: this.props.match.params.id});

    this.props.history.push("/all-posts");
  }

  render() {
    return (
      <div>
        <header>
          <div className="wrapper">
            <h1>Update post</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <label>Title</label>
              <br />
              <input
                type="text"
                name="title"
                placeholder="Post title"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <br />
              <label>Author</label>
              <br />
              <input
                type="text"
                name="author"
                placeholder="Post author"
                onChange={this.handleChange}
                value={this.state.author}
              />
              <br />
              <label>Text</label>
              <br />
              <textarea
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="Enter text here..."
              />
              <br />
              <label>Date</label>
              <br />
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                placeholder="Date..."
              />
              <br />
              <label>Image URL</label>
              <br />
              <input
                type="text"
                name="imageUrl"
                value={this.state.imageUrl}
                onChange={this.handleChange}
                placeholder="Image..."
              />
              <br />
              <label>Status</label>
              <br />
              <input
                type="checkbox"
                name="status"
                checked={this.state.status}
                onChange={this.handleStatusChange}
              />
              <br />
              <label>Tags</label>
              <br />
              <input
                type="text"
                name="tags"
                checked={this.state.tags}
                onChange={this.handleChange}
              />
              <br />
              <button type="submit">Update Item</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default UpdatePostForm;
