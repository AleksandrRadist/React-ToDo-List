import React from "react"
import InputName from '../input/inputName'
import Button from '../button/button.js'
import styles from './ProjectAdd.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"

const cx = classnames.bind(styles)
class AddProject extends React.Component {
    state = {
        name: '',
    }

    handleChangeName = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            id: this.props.projectsLen + 1
        })
        this.setState({
            name: '',
        })
    }
    render() {
        return (
            <ThemeContext.Consumer>{
                theme => (
            <div>
                <form onSubmit={this.handleSubmit} className={cx("form", {[`form-theme-${this.theme}`]: true})}>
                    <div className={cx("line", {[`line-theme-${this.props.theme}`]: true})}>Name</div>
                    <InputName
                        value = {this.state.name}
                        onChange = {this.handleChangeName}
                    />
                    <Button 
                        onClick = {this.handleSubmit}
                        value = 'Add new project'
                    />
                </form>
            </div> 
                )}
            </ThemeContext.Consumer>
        )
    }
}
export default AddProject