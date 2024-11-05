import {Todo} from './todol-list.reducer'
import { createAction,props } from '@ngrx/store'


export const addTodo = createAction(
    '[Todo List] Add Todo',
    props<{ todo: Todo}>()
)
export const editTodo = createAction(
    '[Todo List] Edit Todo',
    props<{ todo: Todo}>()
)