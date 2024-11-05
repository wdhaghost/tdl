import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store'
import {TodoListState} from './todol-list.reducer'

export const selectTodos = createFeatureSelector <TodoListState> ('todoList')

export const selectTodosList = createSelector(
    selectTodos,
    (state: TodoListState)=>state.todos
)