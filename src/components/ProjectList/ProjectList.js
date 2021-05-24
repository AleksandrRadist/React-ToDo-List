import React from "react"
import Project from '../Project/Project.js'
import AddProject from '../ProjectAdd/ProjectAdd.js'
import styles from './ProjectList.module.scss'
import classnames from 'classnames/bind'
import {ThemeContext } from "../Context/ThemeContext"


const cx = classnames.bind(styles);
class ProjectList extends React.Component {
    state = this.props.state

    getProjects = () => {
        const projects = Object.values(this.state.projectsById)
        return projects
      }
    render() {
        return (
            <ThemeContext.Consumer>{
                theme => (
            <main className={cx("main", {[`main-theme-${theme}`]: true})}>
                <div className={cx("sidebar", {[`sidebar-theme-${theme}`]: true})}>
                  <h1 className={cx("header", {[`header-theme-${theme}`]: true})}>Projects</h1>
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
                    <AddProject onSubmit={this.props.addProject} projectsLen={Object.keys(this.state.projectsById).length}/>
                </div>
                <div className={cx("content", {[`content-theme-${theme}`]: true})}>
                  {this.getProjects().map(it => (
                      <Project key={it.id} id={it.id} 
                      name={it.name} onClick={this.props.changeStatus}/>
                  ))}
                </div>
            </main>
                )}
                </ThemeContext.Consumer>
          )
    }
  }

  export default ProjectList