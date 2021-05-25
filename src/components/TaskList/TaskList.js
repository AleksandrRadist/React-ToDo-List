import React from "react"
import Task from '../Task/Task.js'
import AddTask from '../TaskAdd/TaskAdd.js'
import styles from './TaskList.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles);
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
      ],
      theme: 'light'
    }
    handleThemeChange = event => {
      this.setState({theme: event.target.value});
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
        <main>
            <div className={cx("sidebar", {[`sidebar-theme-${this.state.theme}`]: true})}>
              <h1 className={cx("header", {[`header-theme-${this.state.theme}`]: true})}>ToDo List</h1>
              <div className={cx("theme-switcher")}>
                <div className={cx('point')}>
                    <input type="radio" name="theme" id="light" value="light"
                            checked={this.state.theme === "light"} onChange={this.handleThemeChange}
                            className={cx("radio", {[`radio-theme-${this.state.theme}`]: true})}/>
                    <label className={cx("label", {[`label-theme-${this.state.theme}`]: true})}>Light Theme</label>
                </div>

                <div className={cx('point')}>
                    <input type="radio" name="theme" id="dark" value="dark"
                            checked={this.state.theme === "dark"} onChange={this.handleThemeChange}
                            className={cx("radio", {[`radio-theme-${this.state.theme}`]: true})}/>
                    <label className={cx("label", {[`label-theme-${this.state.theme}`]: true})}>Dark Theme</label>
                </div>
            </div>
              <AddTask onSubmit={this.addTask} tasksLen={this.state.tasks.length} theme={this.state.theme}/>
            </div>
            <div className={cx("content", {[`content-theme-${this.state.theme}`]: true})}>
              {this.state.tasks.map(it => (
                  <Task key={it.id} id={it.id} name={it.name} description={it.description} completed={it.completed} onClick={this.changeStatus} theme={this.state.theme}/>
              ))}
            </div>
        </main>
      )
    }
  }

  export default MyTodoList