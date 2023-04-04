import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodoHandler = (input) => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            isCompleted: false,
        }
        setTodos([...todos, newTodo])
    }
    const completeTodo = (id) => {
       console.log(id)
       const index = todos.findIndex((item) => item.id === id);
       // clone => DO NOT MUTATE
       const selectedTodo = {...todos[index]};
       selectedTodo.isCompleted = !selectedTodo.isCompleted;
       const updatedTodo = [...todos];
       updatedTodo[index] = selectedTodo
       setTodos(updatedTodo)
    }
    const deleteHandler = (id) => {
        const filterTodo = todos.filter((item) => item.id !== id)
        setTodos(filterTodo);
    }
    const updateTodo = (id,newValue) => {
       console.log(id)
       const index = todos.findIndex((item) => item.id === id);
       // clone => DO NOT MUTATE
       const selectedTodo = {...todos[index]};
       selectedTodo.text = newValue;
       const updatedTodo = [...todos];
       updatedTodo[index] = selectedTodo
       setTodos(updatedTodo)
    }
    return ( 
        <div className="flex justify-center items-center flex-col pt-20">
            <h2 className="text-2xl md:text-5xl font-semibold text-white">Alireza - Todoapp</h2>
            <div className="bg-white mt-6 shadow-lg px-4 rounded-2xl max-w-[700px] lg:min-w-[700px] flex flex-col items-center">
              <TodoForm addTodoHandler={addTodoHandler}/>
            </div>
            <div >
              <TodoList todos={todos} onComplete={completeTodo} onDelete={deleteHandler} onUpdateTodo={updateTodo}/>
            </div>
        </div>
     );
}
 
export default TodoApp;