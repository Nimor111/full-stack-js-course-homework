import React from "react";
import PropTypes from "prop-types";

const baseForm = ({
  handleStatusChange,
  handleChange,
  formState,
  title,
  handleSubmit,
  actionText
}) => {
  return (
    <div>
      <div>
        <header>
          <div className="wrapper">
            <h1>{title}</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={handleSubmit}>
              <label>Title</label>
              <br />
              <input
                type="text"
                name="title"
                placeholder="Post title"
                onChange={handleChange}
                value={formState.title}
              />
              <br />
              <label>Author</label>
              <br />
              <input
                type="text"
                name="author"
                placeholder="Post author"
                onChange={handleChange}
                value={formState.author}
              />
              <br />
              <label>Text</label>
              <br />
              <textarea
                name="text"
                value={formState.text}
                onChange={handleChange}
                placeholder="Enter text here..."
              />
              <br />
              <label>Date</label>
              <br />
              <input
                type="date"
                name="date"
                value={formState.date}
                onChange={handleChange}
                placeholder="Date..."
              />
              <br />
              <label>Image URL</label>
              <br />
              <input
                type="text"
                name="imageUrl"
                value={formState.imageUrl}
                onChange={handleChange}
                placeholder="Image..."
              />
              <br />
              <label>Status</label>
              <br />
              <input
                type="checkbox"
                name="status"
                checked={formState.status}
                onChange={handleStatusChange}
              />
              <br />
              <label>Tags</label>
              <br />
              <input
                type="text"
                name="tags"
                value={formState.tags}
                onChange={handleChange}
              />
              <br />
              <button type="submit">{actionText}</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

baseForm.propTypes = {
  handleStatusChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired
};

export default baseForm;
