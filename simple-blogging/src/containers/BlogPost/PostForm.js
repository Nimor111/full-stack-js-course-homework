import React, {Component} from "react";
import PropTypes from "prop-types";

import firebase from "../../firebase";
import BaseForm from "../../components/Form/BaseForm";

class PostForm extends Component {
  static propTypes = {
    history: PropTypes.object
  };

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

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: this.state.title,
      author: this.state.author,
      date: this.state.date,
      text: this.state.text,
      tags: this.state.tags,
      imageUrl: this.state.imageUrl,
      status: this.state.status
    };

    itemsRef.push(item);

    this.props.history.push("/all-posts");
  }

  render() {
    return (
      <BaseForm
        handleStatusChange={this.handleStatusChange}
        handleChange={this.handleChange}
        formState={this.state}
        title="Add post"
        handleSubmit={this.handleSubmit}
        actionText="Add"
      />
    );
  }
}

export default PostForm;
