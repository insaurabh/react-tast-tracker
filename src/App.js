import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react';


  function App() {
      // [sateName , function to update the state]
      const [tasks, setTasks] = useState([{
          id: 1,
          text: 'Tech Appointment',
          day: 'Sep 10th, 2021',
          reminder: true
      },
      {
          id: 2,
          text: 'Saurabh Anniversary',
          day: 'Sep 4th, 2021',
          reminder: false
      },
      {
        id: 3,
        text: 'Learning React',
        day: 'Sep 12th, 2021',
        reminder: true
      },
      {
        id: 4,
        text: 'Updating git',
        day: 'Sep 14th, 2021',
        reminder: true
    }
    ])

    // delete task by id
    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId))
      console.log(`Task with ${taskId} is deleted.`);
    };

    // toggle reminder on double click
    const reminderToggle = (taskId) => {
      console.log('Task reminder db clicked on ', taskId);
      setTasks(tasks.map((task) => task.id === taskId ? {
        ...task, reminder: !task.reminder
      }: task))
    }

    // add task when form submitted
     const addTask = (value) => {
       console.log('Task added', value);
       const id = 5;
        const newTask = {
          id, ...tasks
        }

        console.log(tasks)
        setTasks([...tasks, newTask])
     }
  return (
    <div className="container">
      <AddTask onAdd={addTask}/>
      <Header />
      { tasks.length > 0 ? <Tasks tasks={tasks} onToggle={reminderToggle} onDelete={deleteTask}/> : 'No tasks' }
    </div>
  );
}

export default App;
