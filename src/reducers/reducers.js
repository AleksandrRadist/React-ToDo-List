import {combineReducers} from "redux";
import {ADD_TASK, CHANGE_STATUS, THEME_CHANGE, ADD_PROJECT, UPDATE_PROJECT} from "../actions/actions"
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

export const taskReducer = (state = normalizeState(data), action) => {
    switch (action.type) {
        case ADD_TASK: {
            const updatedTasks = {...state.tasksById}
            updatedTasks[action.payload.id] = {
                id: action.payload.id, 
                name: action.payload.name, 
                description: action.payload.description, 
                completed: action.payload.completed
            }
            return {
                ...state,
                tasksById: updatedTasks
            }
        }
        case CHANGE_STATUS: {
            const updatedTasks = {...state.tasksById}
            updatedTasks[action.payload].completed = !state.tasksById[action.payload].completed 
            return {
                ...state,
                tasksById: updatedTasks
            }
        }
        default:
            return state
    }
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
        case UPDATE_PROJECT: {
            const updatedProjects = {...state.projectsById}
            updatedProjects[action.payload.projectId].tasksIds = [...state.projectsById[action.payload.projectId].tasksIds, action.payload.id]
            return {
                ...state,
                projectsById: updatedProjects
            }
        }
        case ADD_PROJECT: {
            const updatedProjects = {...state.projectsById}
            updatedProjects[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                tasksIds: []
            }
            return {
                ...state, projectsById: updatedProjects
            }
        }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    tasks: taskReducer,
    theme: themeReducer,
    projects: projectReducer
})