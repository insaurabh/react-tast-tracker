import {useState} from 'react'
const AddTask = ({ onAdd  }) =>  {
        const [text, setText] = useState('');
        const [reminder, setReminder] = useState(false);
        const [day, setDay] = useState('');

        const onSubmit = (e) => {
            e.preventDefault();
            console.log('Submit triggered')
            if(!text) {
                alert('Add task name please.');
                return false;
            }
            // pass all the states
            onAdd({text, day, reminder});

            // empty old states to clear the form

            setText('');
            setDay('');
            setReminder(false);

        }
        return (
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="add-task">Task
                        <input type="text" id="add-task" placeholder="Add Task"
                        value={text}
                        onChange={(e) => setText(e.target.value)}/>
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor="add-date-time">Day & Time
                        <input type="text" id="add-date-time" placeholder="Add Date & Time"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}/>
                    </label>
                </div>
                <div className="form-control form-control-check">
                    <label htmlFor="set-reminder">
                        <input type="checkbox" id="set-reminder"
                        value={reminder}
                        checked={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)} />
                    </label>
                </div>

                <input type="submit" className="btn btn-block" id="submit-task" value="Save Task " />

            </form>
        )
}

export default AddTask
