import React from "react"
import './Task.css';
import Button from '../button/button.js'

class Task extends React.Component {
  state = {
    complete: this.props.completed
  }

  // handleClick = () => {
  //   const message = 'Task ' + this.props.id + ' completed status = ' + this.props.completed
  //   console.log(message)
  // }

  render() {
    return (
      <div className='task'>
        <div className='line'>Name: { this.props.name }</div>
        <div className='line'>Description: { this.props.description }</div>
        <div className='line'>Status: { this.props.completed.toString() }</div>
        <Button 
          onClick = {() => this.props.onClick(this.props.id)}
          value = 'Change status'
        />
    </div>
    )
  }
}
export default Task