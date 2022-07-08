import React from 'react'

const TaskCardDeleteButton = ({taskCardsList,setTaskCardsList,taskCard}) => {
  const taskCardDeleteButton = (id) => {
    // タスクカード削除
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button 
      className='taskCardDeleteButton' 
      onClick={()=>taskCardDeleteButton(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
