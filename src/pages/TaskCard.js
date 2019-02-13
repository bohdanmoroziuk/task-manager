import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { editTask } from '../actions';
import { selectTaskById } from '../selectors';

class TaskCard extends Component {
    state = {
        ...this.props.task,
        redirect: false
    };

    handleChange = event => {
        const { name, value, type, checked } = event.target;

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { id, name, deadline, comment, completed } = this.state;

        this.props.editTask(id, {
            name,
            deadline,
            comment,
            completed
        });

        this.setState({
            redirect: true
        });
    };

    render() {
        const { id, name, deadline, comment, completed, redirect } = this.state;

        if (redirect) {
            return <Redirect to="/task-list" />
        }

        return (
            <div className="row">
                <div className="col-md-6 col-sm-12 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            Task {id}
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input className="form-control" type="text" name="name" id="name" placeholder="Name" value={name} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="deadline">Deadline</label>
                                    <input className="form-control" type="date" name="deadline" id="deadline" value={deadline} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea className="form-control" name="comment" id="comment" placeholder="comment" value={comment} onChange={this.handleChange}></textarea>
                                </div>
                                <div className="form-group form-check">
                                    <input className="form-check-input" type="checkbox" name="completed" id="completed" checked={completed} onChange={this.handleChange} />
                                    <label className="form-check-label" htmlFor="completed">Completed</label>
                                </div>
                                <button className="btn btn-dark" type="submit">Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    task: selectTaskById(
        state,
        { id: props.match.params.id }
    )
});

const mapDispatchToProps = dispatch => ({
    editTask: (id, task) => dispatch(editTask({
        id,
        task
    }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskCard);