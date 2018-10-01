import React, { Component } from "react";
import { connect } from "react-redux";
import getPostHashMap from "../actions/get_posts_index";
import { Link } from "react-router-dom";
// import { mapStateToProps } from "react-redux";

class PostIndex extends Component {
  componentDidMount() {
    this.props.getPostHashMap();
  }
  listify(obj) {
    return (
      <li className="list-group-item" key={obj.id}>
        {obj.title}
      </li>
    );
  }
  render() {
    if (!this.props.postHashMap.data) {
      return <h1 className="text-info">Fetching Data...</h1>;
    }
    return (
      <div className="container">
        <div className="text-right m-2">
          <Link className="btn btn-primary" to="/NewPostPage">
            New Post
          </Link>
        </div>
        <ol className="list-group">
          {this.props.postHashMap.data.map(this.listify)}
        </ol>
      </div>
    );
  }
}

function mapStateToProps({ postHashMap }) {
  return { postHashMap };
}

export default connect(
  mapStateToProps,
  { getPostHashMap }
)(PostIndex);
