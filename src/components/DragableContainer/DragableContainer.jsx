
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

const ItemTypes = {
    CARD: 'card',
  }
  
  const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
  }

const DragableContainer = ({item, index}) => {
    
    return (
        <div key={id}>
            <h2>{heading}</h2>
            <div>
            {
                headingTwo?.map(i =>  <h3 ref={ref} style={{ ...style }} data-handler-id={handlerId}>{i}</h3>)
            }
            </div>
        </div>
    )
}

export default DragableContainer