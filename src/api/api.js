const BASE_URL = 'http://valerystatinov.com/api'

const request = (url, method = 'GET', body = undefined) => {
    return fetch(`${BASE_URL}${url}`, {
      method,
      headers: {
        Token: 'AleksKhanFinal1',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

export function loadProjects() {
    return request('/projects/').then(res => res.json()).then((response) => {
        return response;
    }).then((response) => {
        const projects = {}
        for (var i in response) {
  
            projects[response[i].id] = {
                id: response[i].id,
                name: response[i].name,
                tasksIds: []
            }
        }
        return projects;
    }).catch(err => {
        console.log(err)
      });
}

export function loadTasks(projectId) {
    return request(`/projects/${projectId}/tasks/`).then(res => res.json()).then((response) => {
        return response;
    }).then((response) => {
        const tasks = {}
        for (var i in response) {
            tasks[response[i].id] = {
                id: response[i].id,
                name: response[i].name,
                description: response[i].description,
                completed: response[i].completed
            }
        }
        tasks['projectId'] = projectId
        return tasks;
    }).catch(err => {
        console.log(err)
      });
}

export function changeTaskStatus(props) {
    const body = {
        name: props.name,
        description: props.description,
        priority: 1,
        completed : !props.completed,
        projectId: Number(props.projectId)
    };
    return request(`/projects/${props.projectId}/tasks/${props.id}/`, 'PUT', body).then((response) => {
        return response;
    }).catch(err => {
        console.log(err)
      });
}
export function uploadProject(newProject) {
    const body  = {
        name: newProject.name
    };
    return request('/projects/', 'POST', body).then(res => res.json()).then((response) => {
        return response;
    }).catch(err => {
        console.log(err)
      });
}

export function uploadTask(props) {
    const body = {
        name: props.name,
        description: props.description,
    };
    return request(`/projects/${props.projectId}/tasks/`, 'POST', body).then(res => res.json()).then((response) => {
        response['projectId'] = props.projectId
        return response;
    }).catch(err => {
        console.log(err)
      });
}