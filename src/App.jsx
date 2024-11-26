import { useEffect, useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FormTodo } from './FormTodo';
import { TodoList } from './TodoList';
import { TodoDateTime } from './Todate-time';
import { Keys } from './assets/key';
// import { getLocalStorageTodoData,setLocalStorageTodoData } from './TodoLocalStorage';




function App() {

  const [task,setTask] = useState([]);
  // const [task,setTask] = useState(()=>getLocalStorageTodoData());

  function handleFormSubmit (inputValue) {
   const {id,content,checked}=inputValue;
   // to check if the inputfiled emty or not 
    if(!content) return;
    //to check if the data  is laready existing or not 
    // if(task.includes(inputValue)) return;
    const ifTodoContentMatched=task.find((curTask)=>curTask.content===content)

    if (ifTodoContentMatched) return;

    setTask((prevTask)=>[...prevTask,{id,content,checked}]);
  
  };

  // setLocalStorageTodoData(task);


  // delet button  or to do 
 function handleDeletElement(value) {
     
     const updateTask=task.filter((curTask)=> curTask.content!==value)
    setTask(updateTask)
     
  }

   // todo clear all date
 function handleClearButton(){
     setTask([]);
  }

 // todo handleCheckedtodo functionality
 const handleCheckedTodo=(content)=>{

  const updateTask=task.map((curTask)=>{
    if(curTask.content===content){
      return{...curTask,checked:  !curTask.checked}
    }else {
      return curTask;
    }
  });
  setTask(updateTask);
 }

 

  return (
    <>
     
      <section className='todo-container'>
         <header>
          <h1>Todo list</h1>
         <TodoDateTime/>
         </header>
         <FormTodo onAddTodo={handleFormSubmit} ></FormTodo>
         <section className="myUnorderList">
          <ul>
            {
              task.map((curTask)=>{
               return(
                <>
                <TodoList key={curTask.id} 
                data={curTask.content}
                checked={curTask.checked}
                onhandleDeleteTodo={handleDeletElement}
                onHandleCheckedTodo={handleCheckedTodo}
                />
                </>
               )
              })
            }
          </ul>
         </section>
         <section>
          <button className='clear-btn' onClick={handleClearButton} >clear all</button>
         </section>
      </section>
    
    </>
  )
}

export default App
