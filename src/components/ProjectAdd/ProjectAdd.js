import React from "react"
import InputName from '../input/inputName'
import Button from '../button/button.js'
import styles from './ProjectAdd.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
import { connect } from "react-redux"
import { actionLoadProjects } from "../../actions/actionsServer"
import { uploadProject } from "../../api/api"
const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(actionLoadProjects())
});
class ProjectAddComponent extends React.Component {
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
        uploadProject({name: this.state.name}).then((response) => {
            this.props.fetchProjects();
        });
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
export const ProjectAdd = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent)