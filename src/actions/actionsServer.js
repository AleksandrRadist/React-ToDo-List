import { loadProjects, loadTasks } from "../api/api"

export const LOAD_PROJECTS= 'LOAD_PROJECTS'
export const LOAD_TASKS = 'LOAD_TASKS'

export const actionLoadProjects = () => (dispatch, getState) => {
    return loadProjects().then((response) => {
            dispatch({
                type : LOAD_PROJECTS,
                payload : response
            });
        return response;
    })
}
export const actionLoadTasks = (projectId) => (dispatch, getState) => {
    return loadTasks(projectId).then((response) => {
            dispatch({
                type : LOAD_TASKS,
                payload : response
            });
        return response;
    })
}