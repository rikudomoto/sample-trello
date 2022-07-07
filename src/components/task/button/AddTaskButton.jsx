import React from 'react'
import {v4 as uuid} from "uuid"

const AddTaskButton = ({taskCardList, setTaskCardsList}) => {
  const addTaskCard = () =>{
    const taskCardId = uuid();
    //タスクカードを追加する。
    setTaskCardsList([
      ...taskCardList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      }
    ]) 
  };
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskButton
