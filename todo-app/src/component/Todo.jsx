import {BsCheckCircleFill, BsTrashFill} from "react-icons/bs";
import {BiEdit} from "react-icons/bi"

const Todo = ({todo, onComplete,deleteHandler, onEdit}) => {
    return ( 
        <div className="bg-white mt-6 shadow-lg px-4 rounded-2xl w-[300px] py-3 lg:min-w-[700px] flex  gap-4 flex-row justify-around items-center hover:shadow-2xl cursor-pointer">
           <div className={todo.isCompleted ? "text-md font-semibold line-through text-red-700" : "text-md font-semibold"}>{todo.text}</div>
           <div className="flex items-center gap-3 cursor-pointer">
                <BiEdit 
                  onClick={onEdit}
                  className="text-sky-700 text-1xl md:text-2xl hover:text-sky-900 transition"
                  />        
                <BsCheckCircleFill 
                  onClick={onComplete} 
                  className="text-sky-700 text-1xl md:text-2xl hover:text-sky-900 transition"
                  />
                <BsTrashFill  
                  onClick={deleteHandler}
                  className="text-red-700 text-1xl md:text-2xl hover:text-red-900 transition"
                 />
           </div>
        </div>
     );
}
 
export default Todo;