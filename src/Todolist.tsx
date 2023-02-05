import React from "react";

export type TodolistTasksType = {
    id: number
    title: string
    isDone: boolean
} // 3. Создаём тип для массивов

export type TodolistPropsType = {
    title: string
    tasks: Array<TodolistTasksType> // 4. Указываем тип массивов
}

export function Todolist(props: TodolistPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
            </ul> {/* 5. Выбрасываем данные через пропсы по массиву с индексом и нужным элементом */}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}