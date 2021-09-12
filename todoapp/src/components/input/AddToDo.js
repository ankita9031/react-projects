import Card from './Card';
import classes from './AddToDo.module.css';
import { useState } from 'react';

const AddToDo = (props) => {
    const [title,updateTitle] = useState('');
    const submitHandler = event =>{
        event.preventDefault();
        props.onAdd({id:Math.random(),title:title});
        updateTitle('');
    }

    const titleChangeHandler = event => {
        updateTitle(event.target.value);
    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" placeholder="Add ToDo" value={title} onChange={titleChangeHandler}/>
            <button>Add</button>
        </form>
    </Card>
}

export default AddToDo;