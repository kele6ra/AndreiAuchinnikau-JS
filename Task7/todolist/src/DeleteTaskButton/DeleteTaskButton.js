import React, { Component } from 'react';

export default class DeleteTaskButton extends Component {
  render() {
    return (
      <button
        className="tsk7-todo-list__button"
        onClick={(e) => this.props.deleteTask(e, this.props.index)}
      >
        &#9746;
      </button>
    );
  }
}