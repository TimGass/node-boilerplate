import React from 'react';

import Layout from "./layout.jsx";
import fs from "fs";

class Index extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return(
    <Layout model={this.props}>
      <h1>{this.props.title}</h1>
      <p>Welcome to <strong>{this.props.title}</strong></p>
    </Layout>
    );
  }
}

export default Index;
