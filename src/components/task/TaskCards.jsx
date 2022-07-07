import React from 'react'
import TaskCard from './TaskCard'
import AddTaskButton from './button/AddTaskButton'

const TaskCards = () => {
  return (
    <div className='taskCardsArea'>
      <TaskCard />
      <AddTaskButton />
    </div>
  )
}

export default TaskCards