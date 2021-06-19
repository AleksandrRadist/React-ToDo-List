export const ADD_TASK = 'ADD_TASK'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const THEME_CHANGE = 'THEME_CHANGE'
export const ADD_PROJECT = 'ADD_PROJECT'
export const UPDATE_PROJECT = 'UPDATE_PROJECT'

export const handleAddTask = (props) => {
    return {
        type: ADD_TASK,
        payload: props
    }
}
export const handleChangeStatus = (taskId) => ({
    type: CHANGE_STATUS,
    payload: taskId
})
export const handleThemeChange = (theme) => ({
    type: THEME_CHANGE,
    payload: theme
})

export const handleAddProject = (project) => {
    return {
        type: ADD_PROJECT,
        payload: project
    }
}

export const handleUpdateProject = (id) => {
    return {
        type: UPDATE_PROJECT,
        payload: id
    }
}