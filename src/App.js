import Header from "./components/Header";
import Tasks from './components/Tasks'
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
      }])

    const deleteTask = (taskId) => {
      console.log('Delete Task Action Called', taskId)
    };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
