import './App.css';
import './styles.css';

import React from "react"

class Task extends React.Component {
  state = {
    complete: this.props.completed
  }

  handleClick = () => {
    const message = 'Task ' + this.props.id + ' completed status = ' + this.props.completed
    console.log(message)
  }

  render() {
    return (
      <div className='task'>
        <div className='line'>Name: { this.props.name }</div>
        <div className='line'>Description: { this.props.description }</div>
        <div className='line'>Status: { this.props.completed.toString() }</div>
        <button className='button' onClick={this.handleClick}>Change Complete Status</button>
    </div>
    )
  }
}

class MyTodoList extends React.Component {
  state = {
    tasks: [
      {id: 1, name: 'Gym', description: 'Go to gym at 06:00', completed: false},
      {id: 2, name: 'Breakfast', description: 'Have breakfast at 07:30', completed: true},
      {id: 3, name: 'University', description: 'Go to university at 08:00', completed: true},
      {id: 4, name: 'IT Infrastructure lecture', description: 'Visit an IT infrastrucutre lecture at 09:30', completed: true},
      {id: 5, name: 'IT Infrastructure seminar', description: 'Visit an IT infrastrucutre seminar at 11:10', completed: true},
      {id: 6, name: 'Strategic Management lecture', description: 'Visit a Strategic Management lecture at 13:00', completed: false},
      {id: 7, name: 'Strategic Management seminar', description: 'Visit a Strategic Management seminar at 14:40', completed: true},
      {id: 8, name: 'Lunch', description: 'Have lunch at 16:20', completed: true},
      {id: 9, name: 'ReactJS Frontend Development lecture', description: 'Visit a ReactJS Frontend Development lecture at 18:10', completed: true},
      {id: 10, name: 'Home', description: 'Go home at 19:40', completed: true}
    ]
  }
  
  render() {
    return (
      <div className='container'>
        {this.state.tasks.map( it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed} />)}
      </div>
    )
  }

}

const App = () => {
  return (
    <div>
      <MyTodoList />
    </div>
  )
}
export default App;
