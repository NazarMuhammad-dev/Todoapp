
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const TodoList =({data,checked,onHandleCheckedTodo,onhandleDeleteTodo})=>{
    return(
        <li className='todo-item'>
        <span id="span" className={checked ? "checkList":"noCheckList"}>{data}</span>
        <button className='checkIcon' onClick={()=>onHandleCheckedTodo(data)}>
        <IoMdCheckmark/>
        </button>
        <button className='deleteIcon' onClick={()=>onhandleDeleteTodo(data)} >
        <MdDeleteForever/>
        </button>
     </li>
    )
}