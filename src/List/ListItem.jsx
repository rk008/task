import React from 'react';
import {Consumer} from '../context';
import { Link } from 'react-router-dom'

export default function ListItem(props) {
    const { task, id } = props.task;
    const onDelete= (dispatch, id) => {
        return () => {
            dispatch({type: 'DELETE_TASK', payload: id})
        }
    }
    return (
      <Consumer>
        {(value) => {
          return(
            <div>
              <h2 style = {{ display: 'inline', marginRight: '10px'}}>{task}</h2>
              <Link to = {`/edittask/${id}`}><button style = {{ display: 'inline', marginRight: '10px'}}>Edit</button></Link>
              <button onClick = {onDelete(value.dispatch, id)} style = {{ display: 'inline'}}>Delete</button>
            </div>
          )
        }}
      </Consumer>
    )
}
