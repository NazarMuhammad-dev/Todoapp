 import { useState } from "react";

export const FormTodo=({onAddTodo})=>{
    const [inputValue,seInputValue] = useState({});

      
    function handleInputChange(value) {
        seInputValue({id:value, content:value,checked:false});
      };
 
      const handleFormSubmit=(event)=>{
        event.preventDefault()
        onAddTodo(inputValue);
        seInputValue({id:"", content:"",checked:false});
      }


    return(
        <section className='form'>
           <form onSubmit={handleFormSubmit}>
              <div>
                 <input type="text" name="" id="todo-input" autoComplete='off' value={inputValue.content}
                 onChange={(event)=>handleInputChange(event.target.value)}
                 />
              </div>
              <div>
                <button type='submit' className='todo-btn'>Add task</button>
              </div>
           </form>
         </section>
    )
}