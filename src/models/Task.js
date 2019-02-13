import { uid } from '../helpers';

class Task {
    constructor(name, deadline, comment) {
        this.id = uid();
        this.name = name;
        this.deadline = deadline;
        this.comment = comment;
        this.completed = false;
    }
}

export default Task;