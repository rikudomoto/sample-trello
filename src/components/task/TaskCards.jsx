import React, { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskButton from './button/AddTaskButton'

const TaskCards = () => {
  const [taskCardList, setTaskCardsList] = useState([{
    id: 0,
    draggableId: "item0",
  }]);
  return (
    <div className='taskCardsArea'>
      {taskCardList.map(taskCardList => (
        <TaskCard key={taskCardList.id}/>
      ))}
      <TaskCard />
      <AddTaskButton 
        taskCardList={taskCardList} 
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  )
}

export default TaskCards