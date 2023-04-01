import React from 'react'
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd"

const Drag = () => {
  return (
    <div className='flex justify-center h-full'>
     
        <DragDropContext onDragEnd={result=>console.log(result)}>
    
        </DragDropContext>
    </div>
  )
}

export default Drag