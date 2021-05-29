import React from "react"
import InputName from '../input/inputName'
import Button from '../button/button.js'
import styles from './ProjectAdd.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
import { connect } from "react-redux"
import { handleAddProject } from '../../actions/actions';
const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  projectsLen : Object.keys(state.projects.projectsById).length,
  state: state.projects
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnAddProject: (newProject) => dispatch(handleAddProject(newProject))
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
        this.props.dispatchOnAddProject({
            name: this.state.name,
            id: this.props.projectsLen + 1,
            tasksIds: []
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
export const ProjectAdd = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent)