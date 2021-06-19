import React from "react"
import InputName from '../input/inputName'
import InputDescription from '../input/inputDescription'
import Button from '../button/button.js'
import styles from './TaskAdd.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"

const cx = classnames.bind(styles)
class AddTask extends React.Component {
    state = {
        name: '',
        description: ''
    }

    handleChangeName = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeDescription = event => {
        this.setState({
            description: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            description: this.state.description,
            completed: false,
            id: this.props.tasksLen + 1,
            projectId: this.props.projectId
        })
        this.setState({
            name: '',
            description: ''
        })
    }
    render() {
        return (
            <ThemeContext.Consumer>{
                theme => (
            <div>
                <form onSubmit={this.handleSubmit} className={cx("form", {[`form-theme-${theme}`]: true})}>
                    <div className={cx("line", {[`line-theme-${theme}`]: true})}>Name</div>
                    <InputName
                        value = {this.state.name}
                        onChange = {this.handleChangeName}
                        theme={theme}
                    />
                    <div className={cx("line", {[`line-theme-${theme}`]: true})}>Description</div>
                    <InputDescription
                        value = {this.state.description}
                        onChange = {this.handleChangeDescription}
                    />
                    <Button 
                        onClick = {this.handleSubmit}
                        value = 'Add new task'
                    />
                </form>
            </div> 
                )}
            </ThemeContext.Consumer>
        )
    }
}
export default AddTask