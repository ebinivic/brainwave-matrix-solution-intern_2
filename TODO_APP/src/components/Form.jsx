import { useState } from "react";
import styles from "./Form.module.css"
export default function Form({todos,setTodos}) {
    const [todo, setTodo]=useState("");
   
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo("")
    }
    return <div>
         <form className={styles.todoform} onSubmit={handleSubmit}>
             <div className={styles.inputContainer}>
<input className={styles.modernInput}
            onChange={(e) =>setTodo(e.target.value)} value={todo} type="text"
            placeholder="Enter todo item"
            />
            <button className={styles.modernButton} type="submit">Add Event</button>
         </div>
            
            
        </form>
    </div>
}