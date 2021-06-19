import React from "react"
import { Project } from '../Project/Project.js'
import { ProjectAdd } from '../ProjectAdd/ProjectAdd.js'
import styles from './ProjectList.module.scss'
import classnames from 'classnames/bind'
import {ThemeContext } from "../Context/ThemeContext"
import { connect } from "react-redux"
const mapStateToProps = (state) => ({
    projects: state.projects.projectsById
  });
  
const cx = classnames.bind(styles);
const ProjectListComponent = (props) => {

    const getProjects = () => {
        const projects = Object.values(props.projects)
        return projects
      }

        return (
            <ThemeContext.Consumer>{
                theme => (
            <main className={cx("main", {[`main-theme-${theme}`]: true})}>
                <div className={cx("sidebar", {[`sidebar-theme-${theme}`]: true})}>
                  <h1 className={cx("header", {[`header-theme-${theme}`]: true})}>Projects</h1>
                  <div className={cx("theme-switcher")}>
                    <div className={cx('point')}>
                        <input type="radio" name="theme" id="light" value="light"
                                checked={theme === "light"} onChange={props.themeChange}
                                className={cx("radio", {[`radio-theme-${theme}`]: true})}/>
                        <label className={cx("label", {[`label-theme-${theme}`]: true})}>Light Theme</label>
                    </div>
    
                    <div className={cx('point')}>
                        <input type="radio" name="theme" id="dark" value="dark"
                                checked={theme === "dark"} onChange={props.themeChange}
                                className={cx("radio", {[`radio-theme-${theme}`]: true})}/>
                        <label className={cx("label", {[`label-theme-${theme}`]: true})}>Dark Theme</label>
                    </div>
                </div>
                    <ProjectAdd/>
                </div>
                {props.projects && <div className={cx("content", {[`content-theme-${theme}`]: true})}>
                  {getProjects().map(it => (
                      <Project key={it.id} id={it.id} 
                      name={it.name} onClick={props.changeStatus}/>
                  ))}
                </div>}
            </main>
                )}
                </ThemeContext.Consumer>

          )
    }
 

  export const ProjectList = connect(mapStateToProps)(ProjectListComponent)