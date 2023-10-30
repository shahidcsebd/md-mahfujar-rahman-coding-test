import React from 'react'

const customeInput = ({labelTitle, labelClass, inputType, handleChnage, inputClass, inputName,
     inputPlaceholder }) => {
    
  return (
    <div className='d-flex flex-column my-4'>
        <label className={`${labelClass}`} >{labelTitle}</label>
        <input name={inputName} placeholder={`${inputPlaceholder}`} type={inputType ?inputType : "text"} onChange={handleChnage}  className={`${inputClass}`} />
    </div>
  )
}

export default customeInput