import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import data from '../Data/Data'
import ProjectList from '../ProjectList/ProjectList'
import TaskList from '../TaskList/TaskList'
import { DEFAULT_THEME, ThemeContext } from "../Context/ThemeContext"
import './ToDoList.css'

const normalizeState = (projectArray) => {
    var normalizedState = {
        projectsById: {
        },
        tasksById: {
        },
        theme: DEFAULT_THEME
    }
    for (var i of projectArray) {
        var project = {
            id: i.id,
            name: i.name,
            tasksIds: []
        }
        for (var j of i.tasksIds) {
            var task = {
                id: j.id,
                name: j.name,
                description: j.description,
                completed: j.completed
            }
            project.tasksIds.push(task.id)
            normalizedState.tasksById[task.id] = task
        }
        normalizedState.projectsById[project.id] = project
    }
    return normalizedState 
  }

class ToDoList extends React.Component {
    state = normalizeState(data)

    handleThemeChange = event => {
      this.setState({theme: event.target.value});
    }
    changeStatus = (taskId) => {
        const updatedTasks = this.state.tasksById
        updatedTasks[taskId].completed = !this.state.tasksById[taskId].completed 

        this.setState(curState => ({
            theme: curState.theme,
            projectsById: curState.projectsById,
            tasksById: updatedTasks
        }))
      }
    addTask = props => {
        const task = {id: props.id, name: props.name, description: props.description, completed: props.completed}
        const updatedProjects = this.state.projectsById
        updatedProjects[props.projectId].tasksIds.push(task.id)
        const updatedTasks = this.state.tasksById
        updatedTasks[task.id] = task
        this.setState(curState => ({
            theme: curState.theme,
            projectsById: updatedProjects,
            tasksById: updatedTasks
        }))
    }

    addProject = project => {
        const updatedProjects = this.state.projectsById
        updatedProjects[project.id] = {id: project.id, name: project.name, tasksIds: []}
        this.setState(curState => ({
        theme: curState.theme,
        projectsById: updatedProjects,
        tasksById: curState.tasksById
            }))
    }
    ProjectPage = () => {
        return (
            <div className='main'>
            <ThemeContext.Provider value={this.state.theme}>
            <ProjectList state={this.state} themeChange={this.handleThemeChange} addProject={this.addProject}/>
            </ThemeContext.Provider>
            </div>
        )
    }

    TaskPage = ({ match }) => {
        const { projectId } = match.params
        if (projectId in this.state.projectsById) {
            return(
                <div className='main'>
                <ThemeContext.Provider value={this.state.theme}>
                <TaskList themeChange={this.handleThemeChange} changeStatus={this.changeStatus} addTask={this.addTask} state={this.state} projectId={projectId}/>
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


export default ToDoList