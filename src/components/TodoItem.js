import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { checkTask } from '../features/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({name, done, id}) => {
    const dispatch = useDispatch();
    
    const handleCheck = () => {
         dispatch(checkTask(id))
    }

    return (
        <div className="todoItem">
             <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done ? 'todoItem--done' : undefined}>{name} --- {id}</p>
            
        </div>
    )
}

export default TodoItem
