
const todokey ="reactTodo";
export const getLocalStorageTodoData =()=>{
    const raw =localStorage.getItem(todokey);
    if(!raw) return [];
    return JSON.parse(raw);
  }

  export const setLocalStorageTodoData=(task)=>{
    //todo localStorage
     return localStorage.setItem(todokey,JSON.stringify(task))
  }