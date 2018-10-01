import React, { Component } from "react";
import { connect } from "react-redux";

class ShowPost extends Component {
  render() {
    return (
      <div className="container">
        <h1>İs this working??</h1>
        <h1>Lalala</h1>
        <p>
          {console.log(this.props.showingPost)}
          Lala
        </p>
      </div>
    );
  }
}
function mapStateToProps({ showingPost }) {
  return { showingPost };
}

export default connect(mapStateToProps)(ShowPost);
