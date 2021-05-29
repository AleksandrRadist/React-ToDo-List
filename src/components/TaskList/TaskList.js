import React from "react"
import { Task } from '../Task/Task.js'
import { TaskAdd } from '../TaskAdd/TaskAdd.js'
import styles from './TaskList.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
import { Link } from 'react-router-dom';

import { connect } from "react-redux"
const mapStateToProps = (state) => ({
    projects: state.projects.projectsById,
    tasks: state.tasks.tasksById,
  });
const cx = classnames.bind(styles);
class TaskListComponent extends React.Component {
    state = {
      tasks: this.props.tasks
    }

    getProjectTasks = () => {
      const project = this.props.projects[this.props.projectId]
      const { tasksIds } = project
      const tasks = tasksIds.map(taskId => this.props.tasks[taskId])
      return tasks
    }
    
    render() {
      return (  
        <ThemeContext.Consumer>{
          theme => (
        <main className={cx("main", {[`main-theme-${theme}`]: true})}>  
            <div className={cx("sidebar", {[`sidebar-theme-${theme}`]: true})}>
              <h1 className={cx("header", {[`header-theme-${theme}`]: true})}>{this.props.projects[this.props.projectId].name}</h1>
              
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
              <TaskAdd projectId={this.props.projectId}/>
              <Link to="/projects/" className={cx("link", {[`link-theme-${theme}`]: true})}> Main Page </Link>
            </div>
            <div className={cx("content", {[`content-theme-${theme}`]: true})}>
              {this.getProjectTasks().map(it => (
                  <Task key={it.id} id={it.id} name={it.name} description={it.description} completed={it.completed}/>
              ))}
            </div>
        </main>
          )}
          </ThemeContext.Consumer>
      )
    }
  }

  export const TaskList = connect(mapStateToProps)(TaskListComponent)