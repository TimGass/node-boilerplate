import React from "react";

import Layout from "./layout.jsx";

class Error extends React.Component {
  constructor(props){
  super(props);
  }

  render(){
    return (
      <Layout>
        <h1>
          {this.props.message}
        </h1>
        <h2>
          {this.props.error.status}
        </h2>
        <pre>
          <strong>{this.props.error.stack}</strong>
        </pre>
      </Layout>
    );
  }
}

export default Error;
