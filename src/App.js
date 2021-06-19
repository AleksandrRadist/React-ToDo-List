import React from "react"
import { ToDoList } from './components/ToDoList/ToDoList'
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers/reducers'
import thunk from "redux-thunk"
const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return(
      <Provider store={store}>
          <div>
            <ToDoList/>
          </div>
      </Provider>
      )
}
