import React, { Component } from "react";
import { connect } from "react-redux";
import fetchPost from "../actions/get_post_with_id";
import { Link } from "react-router-dom";
import deletePost from "../actions/delete_post";

class ShowPost extends Component {
  componentDidMount() {
    if (!this.props.data) {
      const ID = this.props.match.params.id;
      this.props.fetchPost(ID, () => this.props.history.push("/post/" + ID));
    }
  }
  deletePostHelper() {
    const ID = this.props.match.params.id;
    this.props.deletePost(ID, () => this.props.history.push("/"));
  }
  render() {
    if (!this.props.data) {
      return (
        <div className="container">
          <h1>Check your internet connection.</h1>
          <h1>Lalala</h1>
          <p>Lala</p>
        </div>
      );
    }
    return (
      <div className="container">
        <button
          onClick={() => this.deletePostHelper()}
          className="btn btn-danger float-right m-3"
        >
          Delete Post
        </button>
        <div className="pt-3 col-sm-8">
          <Link to="/">Back To Index</Link>
          <h1 className="card">{this.props.data.title}</h1>
          <h3 className="bg-info">{this.props.data.categories}</h3>
          <p className="bg-danger">{this.props.data.content}</p>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ showingPost }, ownProps) {
  return { data: showingPost[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(ShowPost);
