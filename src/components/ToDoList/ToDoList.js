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
    state: state
});

class ToDoListComponent extends React.Component {
    state = {
        state: this.props.state
    }

    handleThemeChange = event => {
        this.props.dispatchOnThemeChange(event.target.value)
    }

    ProjectPage = () => {
        return (
            <div className='main'>
            <ThemeContext.Provider value={this.props.theme}>
            <ProjectList themeChange={this.handleThemeChange}/>
            </ThemeContext.Provider>
            </div>
        )
    }

    TaskPage = ({ match }) => {
        const { projectId } = match.params
        if (projectId in this.props.projects) {
            return(
                <div className='main'>
                <ThemeContext.Provider value={this.props.theme}>
                <TaskList projectId={projectId} themeChange={this.handleThemeChange}/>
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

    render() {
        return (
            <BrowserRouter>
            <div className='main'>
              <Switch>
                <Route exact path="/" component={this.ProjectPage}/>
                <Route exact path="/projects/" component={this.ProjectPage}/>
                <Route path="/projects/:projectId/" component={this.TaskPage}/>
                <Redirect to="/" />
              </Switch>
            </div>
          </BrowserRouter>
          )
    }
  }


export const ToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoListComponent);