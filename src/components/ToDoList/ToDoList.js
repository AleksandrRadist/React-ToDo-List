import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { ProjectList } from '../ProjectList/ProjectList'
import { TaskList } from '../TaskList/TaskList'
import { ThemeContext } from "../Context/ThemeContext"
import './ToDoList.css'
import { connect } from "react-redux";
import { handleThemeChange } from '../../actions/actions';

const mapDispatchToProps = (dispatch) => ({
    dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme)),
});

const mapStateToProps = (state) => ({
    theme: state.theme.theme,
    projects: state.projects.projectsById,
});

const ToDoListComponent = (props) => {

    const handleThemeChange = event => {
        props.dispatchOnThemeChange(event.target.value)
    }

    const ProjectPage = () => {
        return (
            <div className='main'>
            <ThemeContext.Provider value={props.theme}>
            <ProjectList themeChange={handleThemeChange}/>
            </ThemeContext.Provider>
            </div>
        )
    }

    const TaskPage = ({ match }) => {
        const { projectId } = match.params
        if (projectId in props.projects) {
            return(
                <div className='main'>
                <ThemeContext.Provider value={props.theme}>
                <TaskList projectId={projectId} themeChange={handleThemeChange}/>
                </ThemeContext.Provider>
                </div>
            )
        }
        else {
            return(
                <Redirect to="/" />
            )
        }

    }


    return (
        <BrowserRouter>
        <div className='main'>
            <Switch>
            <Route exact path="/" component={ProjectPage}/>
            <Route exact path="/projects/" component={ProjectPage}/>
            <Route path="/projects/:projectId/" component={TaskPage}/>
            <Redirect to="/" />
            </Switch>
        </div>
        </BrowserRouter>
        )
}
  


export const ToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoListComponent);