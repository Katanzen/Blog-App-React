import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class NewPostPage extends Component {
  renderField(Field) {
    // console.log(Field.input);
    if (Field.input.name === "content") {
      return (
        <div>
          <textarea {...Field.input} className="form-control" />
          {Field.meta.touched ? Field.meta.error:""}
        </div>
      );
    }
    return (
      <div>
        <input {...Field.input} className="form-control" />
        {Field.meta.touched && Field.meta.error}
      </div>
    );
  }
  onSubmit(values) {
    console.log(values);
  }
  render() {
    const handleSubmit = this.props.handleSubmit;
    return (
      <form
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        className="container"
      >
        <div className="form-group">
          <label>Title</label>
          <Field name="title" component={this.renderField} type="text" />
        </div>
        <div className="form-group">
          <label>Tags</label>
          <Field name="tags" component={this.renderField} type="text" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <Field name="content" component={this.renderField} type="text" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-primary ml-2">
          Cancel
        </Link>
      </form>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters long";
  }
  if (!values.tags) {
    errors.tags = "Enter a tag";
  }
  if (!values.content) {
    errors.content = "Content can not be empity";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "formForNewBlogPost"
})(NewPostPage);