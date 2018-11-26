import React, { Component } from 'react';
import { Consumer } from '../context'

class EditTask extends Component {
    state = {
        task: ''
    } 

    onChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value 
        })
    }

    onSubmit =(dispatch) => (e) => {
        e.preventDefault();
        const newTask= {
            task: this.state.task,
            id: this.props.match.params.id
        }
        dispatch({type: 'EDIT_TASK', payload: newTask})
        this.props.history.push('/')
        
    }
  render() {
      return (
          <Consumer>
              { (value) => {
                  return (
                    <div>
                        <form onSubmit = {this.onSubmit(value.dispatch)}>
                            <label htmlFor="task">Task</label>
                            <input type="text" name = "task" value = {this.state.task} onChange = {this.onChange}/>
                            <input type="submit" value="Add Task"/>
                        </form>
                    </div>
                  )
              } }
          </Consumer>
      )
  }
}

export default EditTask
