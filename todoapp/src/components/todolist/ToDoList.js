import ToDoItem from "./ToDoItem";
import Card from '../input/Card';

const ToDoList = (props) => {
  return (
    <Card>
      {props.todos.map((item) => (
        <ToDoItem key={item.id} id={item.id} title={item.title} />
      ))}
    </Card>
  );
};

export default ToDoList;
