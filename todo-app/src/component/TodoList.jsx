import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({todos, onComplete,onDelete,onUpdateTodo}) => {
    const [edit, setEdit] = useState({
        id:null,
        text:"",
        isCompleted:false
    });
    const submitTodo = (newValue) => {
     onUpdateTodo(edit.id,newValue)
     setEdit({ id:null, text:""})
    }

    const renderTodo = () => {
        if(todos.length === 0) return <p className="text-3xl text-white mt-4 font-semibold">There is no Todo</p>
       
        return todos.map((todo) => {
            return (
                <Todo 
                 todo={todo} 
                 key={todo.id} 
                 onComplete={() => onComplete(todo.id)}
                 deleteHandler={() => onDelete(todo.id)}
                 onEdit={() => setEdit(todo)}
                 />
            )
        })
    }

    return ( 
        <div>{edit.id ? <TodoForm edit={edit} addTodoHandler={submitTodo}/> : renderTodo()}</div>
     );
}
 
export default TodoList;