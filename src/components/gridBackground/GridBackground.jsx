import React from 'react'
const gridBackground = ({variant="dark"}) => {
  const styles={
    dark:"bg-black",
    light:"bg-white",
    beige:"bg-[#f5f5dc]",
  }
  return (
    <div className={`Grid ${styles[variant]}`}>
      
    </div>
  )
}

export default gridBackground
