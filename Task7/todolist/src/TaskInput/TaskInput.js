import React, { Component } from 'react';

export default class TaskInput extends Component {
  render() {
    return (
      <input className="tsk7-todo__add-task-input" value={this.props.term} onChange={this.props.onChange} />
    );
  }
}


