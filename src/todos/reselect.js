import {createSelector} from 'reselect';
import {FilterTypes} from "../constants";

const getFilter = (state) => state.filter;
const getTodos = (state) => state.todos;

export const selectVisibleTodos = createSelector(
    [getFilter,getTodos],(filter,todos) => {
        switch (filter){
            case  FilterTypes.ALL:
                return todos;
            case FilterTypes.COMPLETED:
                return todos.filter(item => item.completed);
            case FilterTypes.UNCOMPLETED:
                return todos.filter(item => !item.completed);
            default:
                throw new Error('不存在这个筛选状态');
        }
    }
);