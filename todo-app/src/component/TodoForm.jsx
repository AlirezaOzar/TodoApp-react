import { useState } from "react";

const TodoForm = ({addTodoHandler,edit}) => {
   const [todo, setTodo] = useState("");
   
   const changeHandler = (e) => {
      setTodo(e.target.value)
   }
   const submitHandler = (e) => {
    e.preventDefault();
    addTodoHandler(todo);
    setTodo("")
   }

    return ( 
        <form onSubmit={submitHandler} className="flex items-center flex-col md:flex-row py-6 mt-4 gap-3">
            <input type="text" onChange={changeHandler} value={todo} className="px-5 py-2 rounded-md max-w-[300px] md:min-w-[300px] border-gray-400 border-2 outline-none" placeholder="Enter some todo"/>
            <button type="submit" className="bg-sky-800 px-4 py-1 rounded text-white hover:bg-sky-900 transition">{edit ? "Update" : "Add"}</button>
        </form>
     );
}
 
export default TodoForm;