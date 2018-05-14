import React, { Component } from 'react';
import DeleteTaskButton from '../DeleteTaskButton/DeleteTaskButton';
import TaskField from '../TaskField/TaskField';
import './List.css';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      itemsState: localStorage.itemsState ? localStorage.itemsState.split(',') : []
    };
  }

  buttonOnClick = (event, taskIndex) => {
    let items = this.state.items;
    let itemsState = this.state.itemsState;
    items.splice(taskIndex, 1);
    itemsState.splice(taskIndex, 1);
    localStorage.setItem('items', items.join());
    localStorage.setItem('itemsState', itemsState.join());
    this.setState({ items: items, itemsState: itemsState });
  }

  taskOnClick = (event, taskIndex) => {
    let itemsState = this.state.itemsState;
    event.target.classList.contains('tsk7-todo-list__task_line-through') ? itemsState[taskIndex] = "" : itemsState[taskIndex] = "isMarked";
    localStorage.setItem('itemsState', itemsState.join());
    this.setState({ itemsState: itemsState });
  }

  setTaskState = (taskID) => {
    if (this.state.itemsState[taskID] === "isMarked") {
      return ("tsk7-todo-list__task tsk7-todo-list__task_line-through");
    }
    else {
      return ("tsk7-todo-list__task");
    }
  }

  getTaskCount = () => {
    let count = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.itemsState[i] !== "isMarked") count++;
    }
    return (count);
  }

  render() {
    return (
      <div className="tsk7-todo-list">
        <div className="tsk7-todo-list__wrap">
          {this.state.items && this.state.items.map((item, index) =>
            <div key={index} className="tsk7-todo-list__task-wrap">
              <TaskField setTaskState={this.setTaskState.bind(this)} markTask={this.taskOnClick.bind(this)} index={index} item={this.state.items[index]}/>
              <DeleteTaskButton deleteTask={this.buttonOnClick.bind(this)} index={index} />
            </div>
          )}
          Осталось выполнить {this.getTaskCount()}
        </div>
      </div>
    );
  }

}
