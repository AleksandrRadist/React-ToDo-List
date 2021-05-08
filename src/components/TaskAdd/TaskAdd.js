import React from "react"
import InputName from '../input/inputName'
import InputDescription from '../input/inputDescription'
import Button from '../button/button.js'
import './TaskAdd.css';
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
                <form onSubmit={this.handleSubmit} className='form'>
                    <InputName
                        value = {this.state.name}
                        onChange = {this.handleChangeName}
                    />
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
        )
    }
}
export default AddTask