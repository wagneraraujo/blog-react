import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class New extends Component {
  render() {
    return (
      <div>
        <h3>Novo post</h3>
      </div>
    );
  }
}

export default withRouter(New);
