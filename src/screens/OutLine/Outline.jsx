import React, { useCallback, useState } from 'react'
import data from "../../constant/dummy.json"
import Header from '../../components/Header/Header'
import DragableDiv from '../../components/DragableDiv/DragableDiv'


import DragableContainer from '../../components/DragableContainer/DragableContainer'


const Outline = () => {
  const [outlineData, setOutlineData] = useState(data)

  const onDragEnd = (result) => {
    if (result.combine) {
      
    }
  }
    
 
  return (
    <div className='d-flex flex-column justify-content-center align-items-sm-center  p-5'>
        <h3>Content Outline</h3>
        <div className='d-flex flex-column justify-content-center align-items-sm-center mainContainer'>
        <Header>{outlineData.heading}</Header>
        <DragableDiv onDragEnd={onDragEnd}>
          <div>
           {outlineData.data.map((item, index)=> {
            return <DragableContainer index={index} item={item} />
          })}
          </div>
        </DragableDiv>
        </div>

    </div>
  )
}

export default Outline