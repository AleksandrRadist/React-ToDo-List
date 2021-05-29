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

class TaskComponent extends React.Component {
  state = {
    complete: this.props.completed
  }
  handleStatusChange = () => {
    this.props.dispatchOnStatusChange(this.props.id)
    console.log(this.props.completed)
}
  render() {
    return (
      <ThemeContext.Consumer>{
        theme => (
          <div className={cx("task", {[`task-theme-${theme}`]: true})}>
          <div className={cx("line", {[`line-theme-${theme}`]: true})}>Name: { this.props.name }</div>
          <div className={cx("line", {[`line-theme-${theme}`]: true})}>Description: { this.props.description }</div>
          <div className={cx("line", {[`line-theme-${theme}`]: true})}>Status: { this.props.completed.toString() }</div>
          <Button 
            onClick = {this.handleStatusChange}
            value = 'Change status'
          />
          </div>
        )
      }

    </ThemeContext.Consumer>
    )
  }
}
export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent)