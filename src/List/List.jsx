import React, { Component } from 'react';
import ListItem from './ListItem';
import { Consumer } from '../context'

class List extends Component {
    onDeleteHandle = (id) => {
        this.props.onDeleteHandleDashboard(id)
    }
  render() {
    return(
      <Consumer>
        { (value) => {
          return(
            <div>
              {value.tasks.map((task) => (
                  <ListItem onDeleteHandle = {this.onDeleteHandle} task = {task} key = {task.id} />
              ))}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default List
