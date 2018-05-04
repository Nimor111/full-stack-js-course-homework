import React, {Component} from "react";
import PropTypes from "prop-types";

import firebase from "../../firebase";
import BaseForm from "../../components/Form/BaseForm";

class UpdatePostForm extends Component {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
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

  componentDidMount() {
    const itemRef = firebase
      .database()
      .ref(`/items/${this.props.match.params.id}`);
    itemRef.on("value", snapshot => {
      const post = snapshot.val();
      const {title, author, date, text, tags, imageUrl, status} = post;

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
      <BaseForm
        handleStatusChange={this.handleStatusChange}
        handleChange={this.handleChange}
        formState={this.state}
        title="Update post"
        handleSubmit={this.handleSubmit}
        actionText="Update"
      />
    );
  }
}

export default UpdatePostForm;
