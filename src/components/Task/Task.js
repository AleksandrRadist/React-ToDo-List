import React from "react"
import Button from '../button/button.js'
import styles from './Task.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
const cx = classnames.bind(styles)
class Task extends React.Component {
  state = {
    complete: this.props.completed
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
            onClick = {() => this.props.onClick(this.props.id)}
            value = 'Change status'
          />
          </div>
        )
      }

    </ThemeContext.Consumer>
    )
  }
}
export default Task