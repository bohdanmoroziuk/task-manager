import { connect } from 'react-redux';

import { completeTask, removeTask } from '../redux/actions';
import { selectVisibleTasksByKeyword } from '../redux/selectors';

import TaskList from '../components/task/TaskList';

const mapStateToProps = state => ({
  tasks: selectVisibleTasksByKeyword(state)
});

const mapDispatchToProps = dispatch => ({
  handleComplete: id => {
    dispatch(completeTask({ id }));
  },
  handleRemove: id => {
    dispatch(removeTask({ id }));
  }
});

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default VisibleTaskList;
