import React from 'react';
import {connect} from  'react-redux';
import  TransitionGroup from 'react-addons-css-transition-group';

import TodoItem from './item';
import {selectVisibleTodos} from "../reselect";


const TodoList = ({todos}) => {
  return (
    <ul className="todo-list">
      <TransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={200}
      transitionAppear={true} transitionAppearTimeout={500}>
        {todos.map((item) => (
          <TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed}/>
        ))}
      </TransitionGroup>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    todos:selectVisibleTodos(state)
  }
}

export default connect(mapStateToProps)(TodoList);