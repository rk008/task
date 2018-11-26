import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_TASK':
         return {
            tasks: state.tasks.filter((task) => task.id !== action.payload)
         }

         case 'ADD_TASK':
         return{
             tasks: [action.payload, ...state.tasks]
         }

         case 'EDIT_TASK':
         return{
             tasks: state.tasks.map((task) => {
                return task.id !== action.payload.id ? task: Object.assign({task: action.payload.task, id: action.payload.id})
             })
         }

        default: 
         return state
    }
}

export class Provider extends Component {
    state = {
        tasks: [
           {task: 'learn javascript', id: "1"},
           {task: 'learn React', id: "2"},
           {task: 'learn ReactNative', id: "3"},
        ],
        dispatch: (action) =>{
            return this.setState((state) => {
                return reducer(state, action);
            })
        }
    }

  render() {
    return (
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

