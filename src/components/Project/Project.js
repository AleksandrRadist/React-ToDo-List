import React from "react"
import styles from './Project.module.scss'
import classnames from 'classnames/bind'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { ThemeContext } from "../Context/ThemeContext"
const cx = classnames.bind(styles)
const mapStateToProps = (state) => ({
  tasks : state.tasks.tasksById
});
const ProjectComponent = (props) => {

  return (
      <ThemeContext.Consumer>{
          theme => (
    <div className={cx("project", {[`project-theme-${theme}`]: true})}>
      <div className={cx("line", {[`line-theme-${theme}`]: true})}>Name: { props.name }</div>
      <Link to={`/projects/${props.id}`} className={cx("line", {[`line-theme-${theme}`]: true})}> Go To {props.name} Page</Link>
  </div>
          )}
      </ThemeContext.Consumer>
  )
}

export const Project =  connect(mapStateToProps)(ProjectComponent)