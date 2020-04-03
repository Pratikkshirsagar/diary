import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
            <h1>
              Login in With your favourite <b>Social NetWork</b>
            </h1>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-danger btn-lg">Login With Google</button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-success btn-lg">Login With Twitter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
