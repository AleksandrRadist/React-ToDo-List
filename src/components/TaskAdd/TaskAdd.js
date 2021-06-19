import React from "react"
import InputName from '../input/inputName'
import InputDescription from '../input/inputDescription'
import Button from '../button/button.js'
import styles from './TaskAdd.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
import { connect } from "react-redux"
import { actionLoadTasks } from '../../actions/actionsServer';
import { uploadTask } from "../../api/api"

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchTasks: (projectId) => dispatch(actionLoadTasks(projectId)),
});

class TaskAddComponent extends React.Component {
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
        event.preventDefault()
        uploadTask({
            name: this.state.name,
            description: this.state.description,
            projectId: this.props.projectId
        }).then((response) => {
            this.props.fetchTasks(this.props.projectId);
        });
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
export const TaskAdd = connect(mapStateToProps, mapDispatchToProps)(TaskAddComponent)