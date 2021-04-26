import React from "react"
import Task from '../Task/Task.js'
import AddTask from '../TaskAdd/TaskAdd.js'
import './TaskList.css';
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
    changeStatus = (id) => {
      this.setState((currentState) => {
        const findById = (element) => element.id === id
        const newArr = [...currentState.tasks]
        const index = newArr.findIndex(findById)
        newArr[index] = { ...newArr[index], completed: !newArr[index].completed }
    
        return {
          tasks: newArr
        }
      })
    }
    addTask = task => {
      const updatedTasks = [task, ...this.state.tasks]
      this.setState({
          tasks: updatedTasks
      })
    }
    render() {
      return (
        <div>
          <div className='sidebar'>
            <h1 className='header'>ToDo List</h1>
            <AddTask onSubmit={this.addTask} tasksLen={this.state.tasks.length}/>
          </div>
          <div className='content'>
            {this.state.tasks.map( it => <Task key={it.id} id={it.id} name={it.name} description={it.description} completed={it.completed} onClick={this.changeStatus}/>)}
          </div>
        </div>
      )
    }
  
  }

  export default MyTodoList