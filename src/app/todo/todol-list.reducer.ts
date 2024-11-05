import { createReducer, on } from "@ngrx/store";
import { addTodo } from "./todo-list.actions";

export interface Todo {
    title: string;
    state: boolean;
}
export interface TodoListState{
    todos: Todo[]
}
export const initialState: TodoListState={
    todos: []
}

export const todoListReducer = createReducer(
    initialState,
    on(addTodo,(state,{todo})=>({

        ...state,
        todos:[...state.todos,todo]
    }))
)
