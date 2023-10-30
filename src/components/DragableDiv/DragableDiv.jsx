import React, { useState } from 'react'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const DragableDiv = ({children,onDragEnd , isCombineEnabled,containerHeight, withScrollableColumns}) => {
  console.log(onDragEnd)

  return (

    <DragDropContext onDragEnd={onDragEnd} >
    <Droppable
          droppableId="board"
          type="COLUMN"
          direction="horizontal"
          ignoreContainerClipping={Boolean(containerHeight)}
          isCombineEnabled={isCombineEnabled}
        >
           {children}
     </Droppable>
    </DragDropContext>
 
  )
}

export default DragableDiv