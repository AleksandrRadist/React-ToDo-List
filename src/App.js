import React from "react"
import { ToDoList } from './components/ToDoList/ToDoList'
import {Provider} from "react-redux"
import {createStore} from 'redux'
import {rootReducer} from './reducers/reducers'

const store = createStore(rootReducer)

export default function App() {
  return(
      <Provider store={store}>
          <div>
            <ToDoList/>
          </div>
      </Provider>
      )
}
