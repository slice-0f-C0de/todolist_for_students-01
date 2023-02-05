import React from 'react';
import './App.css';
import {Todolist, TodolistTasksType} from "./Todolist";

function App() {

    let task1: Array<TodolistTasksType> = [ // Массивы по желанию тоже можно типизировать
        {id:1,title: "HTML",isDone: true},
        {id:1,title: "CSS",isDone: true},
        {id:1,title: "JavaScript",isDone: false}
    ]

    let task2: Array<TodolistTasksType> = [
        {id:1,title: "Pulp Fiction",isDone: true},
        {id:1,title: "Kill Bill vol. 1/2",isDone: true},
        {id:1,title: "Once Upon a Time... in Hollywood",isDone: true}
    ] // 1. Создаём два массива

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={task1}/>
            <Todolist title="Movies" tasks={task2}/> {/* 2. Передаём массивы в компоненты */}
        </div>
    );
}

export default App;
