import React, { Component } from 'react';

export default class TaskField extends Component {
  render() {
    return (
      <input
        type="text"
        className={this.props.setTaskState(this.props.index)}
        onClick={(e) => this.props.markTask(e, this.props.index)}
        value={this.props.item}
        readOnly
      />
    );
  }
}