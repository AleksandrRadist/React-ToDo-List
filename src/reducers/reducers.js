import {combineReducers} from "redux";
import { THEME_CHANGE } from "../actions/actions"
import { LOAD_PROJECTS, LOAD_TASKS } from "../actions/actionsServer"
import data from '../components/Data/Data'
import { DEFAULT_THEME } from "../components/Context/ThemeContext"
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

export const themeReducer = (state = normalizeState(data), action) => {
    switch (action.type) {
        case THEME_CHANGE: {
            return {
                ...state,
                theme: action.payload
            }
        }
        default:
            return state
    }
}

export const projectReducer = (state = normalizeState(data), action) => {
    switch (action.type) {
        case LOAD_PROJECTS: {
            return {
              ...state,
              projectsById: action.payload
            };
          }
        case LOAD_TASKS: {
            const updatedProjects = {...state.projectsById}
            const id = action.payload.projectId
            const payload = {...action.payload}
            delete payload['projectId']
            updatedProjects[id].tasksIds = Object.keys(payload)
            const updatedTasks = Object.assign({}, state.tasksById, payload)
            return {
              ...state,
              tasksById: updatedTasks,
              projectsById: updatedProjects
            };
          }
        default: {
            return state
        }
            
            
    }
}

export const rootReducer = combineReducers({
    theme: themeReducer,
    projects: projectReducer
})