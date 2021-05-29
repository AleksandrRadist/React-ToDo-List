import React from "react"
import Button from '../button/button.js'
import styles from './Task.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
import { connect } from "react-redux"
import { handleChangeStatus } from '../../actions/actions';
const cx = classnames.bind(styles)
const mapStateToProps = (state) => ({
  tasksLen : Object.keys(state.tasks.tasksById).length
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnStatusChange: (taskId) => dispatch(handleChangeStatus(taskId))
});

const TaskComponent = (props) => {

  const handleStatusChange = () => {
    props.dispatchOnStatusChange(props.id)
    console.log(props.completed)
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