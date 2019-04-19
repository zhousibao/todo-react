import React,{ Component } from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions';

class AddTodo extends Component{
  constructor(props,context){
    super(props,context);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);


    this.state = {
      value:''
    }
  }

  onSubmit(ev){
    ev.preventDefault();
    const inputVaule = this.state.value;

    if(!inputVaule.trim()){
      return false;
    }

    this.props.onAdd(inputVaule);
    this.setState({value:''});
  }

  onInputChange(event) {
    this.setState({
      value:event.target.value
    }) 
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input type="text" className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
          <button className="add-btn" type="submit">添加</button>
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd:(text) => {
      dispatch(addTodo(text))
    }
  }
};

export default connect(null,mapDispatchToProps)(AddTodo);