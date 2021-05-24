import React from "react"
import styles from './Project.module.scss'
import classnames from 'classnames/bind'
import { Link } from 'react-router-dom';
import { ThemeContext } from "../Context/ThemeContext"
const cx = classnames.bind(styles)
class Project extends React.Component {
  state = {
    complete: this.props.completed
  }

  render() {
    return (
        <ThemeContext.Consumer>{
            theme => (
      <div className={cx("project", {[`project-theme-${theme}`]: true})}>
        <div className={cx("line", {[`line-theme-${theme}`]: true})}>Name: { this.props.name }</div>
        <Link to={`/projects/${this.props.id}`} className={cx("line", {[`line-theme-${theme}`]: true})}> Go To {this.props.name} Page</Link>
    </div>
            )}
        </ThemeContext.Consumer>
    )
  }
}
export default Project