import React from "react"
import Button from '../button/button.js'
import styles from './Task.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
class Task extends React.Component {
  state = {
    complete: this.props.completed
  }

  render() {
    return (
      <div className={cx("task", {[`task-theme-${this.props.theme}`]: true})}>
        <div className={cx("line", {[`line-theme-${this.props.theme}`]: true})}>Name: { this.props.name }</div>
        <div className={cx("line", {[`line-theme-${this.props.theme}`]: true})}>Description: { this.props.description }</div>
        <div className={cx("line", {[`line-theme-${this.props.theme}`]: true})}>Status: { this.props.completed.toString() }</div>
        <Button 
          onClick = {() => this.props.onClick(this.props.id)}
          value = 'Change status'
          theme={this.props.theme}
        />
    </div>
    )
  }
}
export default Task