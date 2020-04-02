import React, { Component } from 'react';
import { database } from '../firebase';
import _ from 'lodash';

class App extends Component {
  state = {
    title: '',
    body: '',
    notes: []
  };

  componentDidMount() {
    database.on('value', snapshop => {
      this.setState({
        notes: snapshop.val()
      });
    });
  }

  // handling changes
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //handling submit
  handleSubmit = event => {
    event.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    };

    database.push(note);
  };

  renderNotes = () => {
    return _.map(this.state.notes, (note, key) => {
      return (
        <div key={key}>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.title}
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title..."
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  onChange={this.handleChange}
                  value={this.state.body}
                  type="text"
                  name="body"
                  className="form-control no-border"
                  placeholder="Body..."
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
