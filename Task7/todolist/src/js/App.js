import React, { Component } from 'react';
import '../css/App.css';
import List from './List';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        let items = this.state.items;
        items.push(this.state.term);
        this.setState({ items: items, term: "" });
    }

    render() {
        return (
            <div className="tsk7-todo">
                <div className="tsk7-todo__wrap">
                    <form className="tsk7-todo__add-task-wrap" onSubmit={this.onSubmit}>
                        <input className="tsk7-todo__add-task-input" value={this.state.term} onChange={this.onChange} />
                        <button className="tsk7-todo__add-task-button">&#9745;</button>
                    </form>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
}