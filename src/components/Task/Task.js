import React from "react"
import Button from '../button/button.js'
import styles from './Task.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
import { connect } from "react-redux"
import { changeTaskStatus } from "../../api/api"
import { actionLoadTasks } from "../../actions/actionsServer"

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  tasksLen : Object.keys(state.projects.tasksById).length
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: (projectId) => dispatch(actionLoadTasks(projectId))
});

const TaskComponent = (props) => {

  const handleStatusChange = () => {
    changeTaskStatus({
      projectId: props.projectId,
      id: props.id,
      name: props.name,
      description: props.description,
      completed: props.completed
    }).then((response) => {
        props.fetchTasks(props.projectId);
    });
}

  return (
    <ThemeContext.Consumer>{
      theme => (
        <div className={cx("task", {[`task-theme-${theme}`]: true})}>
        <div className={cx("line", {[`line-theme-${theme}`]: true})}>Name: { props.name }</div>
        <div className={cx("line", {[`line-theme-${theme}`]: true})}>Description: { props.description }</div>
        <div className={cx("line", {[`line-theme-${theme}`]: true})}>Status: { props.completed.toString() }</div>
        <Button 
          onClick = {handleStatusChange}
          value = 'Change status'
        />
        </div>
      )
    }

  </ThemeContext.Consumer>
  )
}

export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent)