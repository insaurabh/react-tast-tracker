import React, { Component } from 'react'

export class AddTask extends Component {
    render() {
        return (
            <form className="add-form">
                <div className="form-control">
                    <label for="add-task">Task
                        <input type="text" id="add-task" placeholder="Add Task" />
                    </label>
                </div>
                <div className="form-control">
                    <label for="add-date-time">Day & Time
                        <input type="text" id="add-date-time" placeholder="Add Date & Time" />
                    </label>
                </div>
                <div className="form-control form-control-check">
                    <label for="set-reminder">
                        <input type="checkbox" id="set-reminder" />
                    </label>
                </div>

                <input type="submit" className="btn btn-block" id="submit-task" value="Save Task " />

            </form>
        )
    }
}

export default AddTask
