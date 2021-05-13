import React from "react"
import InputName from '../input/inputName'
import InputDescription from '../input/inputDescription'
import Button from '../button/button.js'
import styles from './TaskAdd.scss'
import classnames from 'classnames/bind'

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
            id: this.props.tasksLen + 1
        })
        this.setState({
            name: '',
            description: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={cx("form", {[`form-theme-${this.props.theme}`]: true})}>
                    <InputName
                        value = {this.state.name}
                        onChange = {this.handleChangeName}
                        theme={this.props.theme}
                    />
                    <InputDescription
                        value = {this.state.description}
                        onChange = {this.handleChangeDescription}
                        theme={this.props.theme}
                    />
                    <Button 
                        onClick = {this.handleSubmit}
                        value = 'Add new task'
                        theme={this.props.theme}
                    />
                </form>
            </div> 
        )
    }
}
export default AddTask