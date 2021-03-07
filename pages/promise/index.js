import React, { Component } from 'react';
import axios from 'axios';

class PromisePage extends Component {

  static async getInitialProps(context) {
    console.log(context.pathname)
    const response = await axios.get('https://react-hoks-9fe20-default-rtdb.firebaseio.com/ingredients/-MU-s9Keg22u4ZxAPhxm.json')
    return response.data
  }

  render() {

    return (
      <div>
        <h1>The promise resolved : {this.props.title} </h1>

        <button onClick={this.skata}> load data</button>
      </div>
    );
  }
}

export default PromisePage;