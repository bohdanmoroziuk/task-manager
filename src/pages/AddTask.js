import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { today } from '../helpers';
import { addTask } from '../redux/actions';
import Task from '../models/Task';

class AddTask extends Component {
  state = {
    name: '',
    deadline: today(),
    comment: '',
    redirect: false
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, deadline, comment } = this.state;

    this.props.addTask({
      task: Task(name, deadline, comment)
    });

    this.setState({
      redirect: true
    });
  };

  render() {
    const { name, deadline, comment, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/task-list" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="deadline">Deadline</label>
            <input
              className="form-control"
              type="date"
              name="deadline"
              id="deadline"
              min={today()}
              value={deadline}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="comment">Comment</label>
            <textarea
              className="form-control"
              name="comment"
              id="comment"
              value={comment}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12">
            <button className="btn btn-dark" type="submit">
              Add Task
            </button>
            <Link className="btn btn-dark ml-2" to="/">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTask);
