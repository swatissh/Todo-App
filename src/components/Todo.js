import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

    // Delete a todo
    const deleteHandler = () =>{
        setTodos(todos.filter((item)=> item.id !== todo.id));
    };

    // Responsible for changing UI when user clicks on 'Complete/ tick button' of a todo
    const completeHandler = () =>{
        setTodos(todos.map((item)=> {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''} `}>{text}</li>
            <button onClick = {completeHandler} className="complete-button">
                <i className="fas fa-check"></i>
            </button>
            <button onClick ={deleteHandler} className="delete-button">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;