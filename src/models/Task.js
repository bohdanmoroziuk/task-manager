import { uid } from '../helpers';

const Task = (name, deadline, comment) => ({
  id: uid(),
  name,
  deadline,
  comment,
  completed: false
});

export default Task;
