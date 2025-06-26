import React from 'react'

const MaterialInput = ({icon,placeholder,onChange,value,type,id,name,size,maxlength,min,max,required}) => {
  return (
    <div className='container w-67.5 h-12.5 bg-white border-2 border-black border-solid rounded-lg flex align-center '>
        {
            icon && 
            <span className='w-1/4 bg-[#f0f0f0] rounded-l-lg flex justify-center items-center'>
            <img src={icon} className={`w-7 h-7.5 `} alt="icon" />
            </span>
        }
        <input placeholder={placeholder}
          onChange={onChange} 
          value={value}
          type={type}
          id={id}
          name={name}
          size={size}
          maxLength={maxlength}
          min={min}
          max={max}
          required={required}
          className='focus:outline-none focus:ring-0 focus-border-transparent px-2'/>
    </div>
  )
}

export default MaterialInput
