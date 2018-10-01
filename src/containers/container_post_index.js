import React, { Component } from "react";
import { connect } from "react-redux";
import getPostHashMap from "../actions/get_posts_index";
import { Link } from "react-router-dom";
import fetchPostAndShow from "../actions/get_post_with_id";
// import { mapStateToProps } from "react-redux";

class PostIndex extends Component {
  constructor(props) {
    super(props);
    this.listify = this.listify.bind(this);
  }
  componentDidMount() {
    this.props.getPostHashMap();
  }

  showPost(id) {
    this.props.fetchPostAndShow(id, () =>
      this.props.history.push("post/" + id)
    );
  }
  listify(obj) {
    return (
      <li
        onClick={() => this.showPost(obj.id)}
        className="list-group-item"
        key={obj.id}
      >
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
// function bindActionCreators((fetchPostAndShow, getPostHashMap),dispatch){
//   return
// }

export default connect(
  mapStateToProps,
  { fetchPostAndShow, getPostHashMap }
)(PostIndex);
