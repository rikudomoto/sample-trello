import React, { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskButton from './button/AddTaskButton'

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id: 0,
    draggableId: "item0",
  }]);
  return (
    <div className='taskCardsArea'>
      {taskCardsList.map(taskCard => (
        <TaskCard 
        key = {taskCard.id}
        taskCardsList = {taskCardsList}
        setTaskCardsList = {setTaskCardsList}
        taskCard = {taskCard}
        />
      ))}
      <TaskCard />
      <AddTaskButton 
        taskCardsList={taskCardsList} 
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  )
}

export default TaskCards