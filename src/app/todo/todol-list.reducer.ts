import { createReducer, on } from "@ngrx/store";
import { addTodo, editTodo } from "./todo-list.actions";

export interface Todo {
    id: string
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
    })),
    on(editTodo,(state,{todo})=>({

        ...state,
        todos:state.todos.map((t)=>( t.id == todo.id ? todo:t ))
    }))
)
