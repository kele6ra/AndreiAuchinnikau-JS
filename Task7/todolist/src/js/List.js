import React, { Component } from 'react';
import '../css/List.css';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            itemsState: []
        };
    }

    buttonOnClick = (event) => {
        let items = this.state.items;
        let itemsState = this.state.itemsState;
        let taskIndex = event.target.getAttribute('todoid');
        items.splice(taskIndex,1);
        itemsState.splice(taskIndex,1);
        this.setState({ items: items, itemsState: itemsState});
    }

    taskOnClick = (event) => {
        let taskIndex = event.target.getAttribute('todoid');
        let itemsState = this.state.itemsState;
        event.target.classList.contains('tsk7-todo-list__task_line-through')?itemsState[taskIndex]="":itemsState[taskIndex]="isMarked";
        this.setState({ itemsState: itemsState});
    }

    setTaskState = (taskID) => {
        if (this.state.itemsState[taskID] === "isMarked"){
            return("tsk7-todo-list__task tsk7-todo-list__task_line-through");
        } 
        else{
            return ("tsk7-todo-list__task");
        }
    }

    getTaskCount = () => {
        let count = 0;
        for (let i=0; i< this.state.items.length; i++){
            if (this.state.itemsState[i]!=="isMarked") count++;
        }
        return (count);
    }

    render() {
        return (
            <div className="tsk7-todo-list">
                <div className="tsk7-todo-list__wrap">
                    {this.state.items && this.state.items.map((item, index) => 
                        <div key={index} className="tsk7-todo-list__task-wrap">
                            <input 
                                type="text" 
                                className={this.setTaskState(index)}
                                todoid={index}
                                onClick={this.taskOnClick}
                                value={item} 
                                readOnly 
                            />
                            <button 
                                todoid={index} 
                                className="tsk7-todo-list__button"
                                onClick={this.buttonOnClick}
                            >
                                &#9746;
                            </button>
                        </div>
                    )}
                    Осталось выполнить {this.getTaskCount()}
                </div>       
            </div>
        );
    }

}
