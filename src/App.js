import React, { useState, useEffect } from "react";
import './App.css';
// import Form and Todolist
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // State for user input text
  const [inputText, setInputText] = useState("");
  // State for todo
  const [todos, setTodos] = useState([]);
  // State for selecting status from drop-down option
  const [status, setStatus] = useState("All");
  // State for filtering todo's  based on status - Completed, Uncompleted and All
  const [filteredStatusTodo, setfilteredStatusTodo] = useState([]);


  // Runs once when the app starts
  useEffect(()=>{
    getFromLocal();
  },[]);

  // Call filterHandler() whenever there is change in todo state 
  useEffect(()=>{
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  // Save to local 
  const saveToLocal = () =>{
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Get value from local
  const getFromLocal = () =>{
    if(localStorage.getItem("todos")=== null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  // Function to change status of todo
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setfilteredStatusTodo(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setfilteredStatusTodo(todos.filter(todo => todo.completed === false))
        break;
      default:
        setfilteredStatusTodo(todos);
        break;
    }
  }; 

  return (
    <div className="App">
      <header>
        <h1> Todo List </h1>
      </header>
      <Form  
      todos = {todos} 
      setTodos = {setTodos} 
      inputText = {inputText} 
      setInputText = {setInputText} 
      setStatus = {setStatus}/>
      <TodoList todos = {todos} setTodos={setTodos} filteredStatusTodo={filteredStatusTodo}/>
    </div>
  ) ;
}

export default App;
