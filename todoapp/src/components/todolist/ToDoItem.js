import classes from './ToDoItem.module.css';
import Card from '../input/Card';

const ToDoItem = (props) => {
    return <li className={classes.ToDoItem}>{props.title}</li>;
}

export default ToDoItem;