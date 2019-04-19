import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from "./actionTypes";

let nextTodoId = 3;

export const addTodo = (next) => ({
    type:ADD_TODO,
    completed:false,
    id:nextTodoId++,
    text:next
})
export const toggleTodo = (id) => ({
    type:TOGGLE_TODO,
    id:id
})
export const removeTodo = (id) => ({
    type:REMOVE_TODO,
    id:id
})