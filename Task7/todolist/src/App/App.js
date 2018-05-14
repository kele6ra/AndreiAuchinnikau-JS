import React, { Component } from 'react';
import './App.css';
import List from '../List/List';
import TaskInput from '../TaskInput/TaskInput';
import AddTaskButton from '../AddTaskButton/AddTaskButton';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: localStorage.items ? localStorage.items.split(',') : []
        };

    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        let items = this.state.items;
        items.push(this.state.term);
        localStorage.setItem('items', items.join());
        this.setState({ items: items, term: "" });
    }

    render() {
        return (
            <div className="tsk7-todo">
                <div className="tsk7-todo__wrap">
                    <form className="tsk7-todo__add-task-wrap" onSubmit={this.onSubmit}>
                        <TaskInput term={this.state.term} onChange={this.onChange.bind(this)}/>
                        <AddTaskButton />
                    </form>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
}