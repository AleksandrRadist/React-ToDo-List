import React from "react"
import Task from '../Task/Task.js'
import AddTask from '../TaskAdd/TaskAdd.js'
import styles from './TaskList.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
import { Link } from 'react-router-dom';
const cx = classnames.bind(styles);

class TaskList extends React.Component {
    state = this.props.state

    getProjectTasks = () => {
      const project = this.state.projectsById[this.props.projectId]
      const { tasksIds } = project
      const tasks = tasksIds.map(taskId => this.state.tasksById[taskId])
      return tasks
    }
    
    render() {
      return (  
        <ThemeContext.Consumer>{
          theme => (
        <main className={cx("main", {[`main-theme-${theme}`]: true})}>  
            <div className={cx("sidebar", {[`sidebar-theme-${theme}`]: true})}>
              <h1 className={cx("header", {[`header-theme-${theme}`]: true})}>{this.state.projectsById[this.props.projectId].name}</h1>
              
              <div className={cx("theme-switcher")}>
                <div className={cx('point')}>
                    <input type="radio" name="theme" id="light" value="light"
                            checked={theme === "light"} onChange={this.props.themeChange}
                            className={cx("radio", {[`radio-theme-${theme}`]: true})}/>
                    <label className={cx("label", {[`label-theme-${theme}`]: true})}>Light Theme</label>
                </div>
                <div className={cx('point')}>
                    <input type="radio" name="theme" id="dark" value="dark"
                            checked={theme === "dark"} onChange={this.props.themeChange}
                            className={cx("radio", {[`radio-theme-${theme}`]: true})}/>
                    <label className={cx("label", {[`label-theme-${theme}`]: true})}>Dark Theme</label>
                </div>
            </div>
              <AddTask onSubmit={this.props.addTask} tasksLen={Object.keys(this.state.tasksById).length} projectId={this.props.projectId}/>
              <Link to="/projects/" className={cx("link", {[`link-theme-${theme}`]: true})}> Main Page </Link>
            </div>
            <div className={cx("content", {[`content-theme-${theme}`]: true})}>
              {this.getProjectTasks().map(it => (
                  <Task key={it.id} id={it.id} name={it.name} description={it.description} completed={it.completed} onClick={this.props.changeStatus}/>
              ))}
            </div>
        </main>
          )}
          </ThemeContext.Consumer>
      )
    }
  }

  export default TaskList