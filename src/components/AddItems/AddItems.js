import React, { Component } from 'react';
import './AddItems.css';
class AddItems extends Component {
    state = {
        name: '',
        age: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value === '') {
            return false;
        } else {
            this.props.addItem(this.state)
             this.setState({
                name: '',
                age: ''
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" autoFocus placeholder="Enter Name ..." id="name" onChange={this.handleChange} value={this.state.name} required />
                    <input type="number" placeholder="Enter Age ..." id="age" onChange={this.handleChange} value={this.state.age} required />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}
export default AddItems