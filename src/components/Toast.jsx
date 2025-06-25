import React from 'react'
import tick from '../assets/tick.svg'
import cross from '../assets/cross.svg'
import warning from '../assets/warning.svg'
import notice from '../assets/notice.svg'

const Toast = ({variant,title,subtitle}) => {
    const variants={
        success:{
            style:"text-green-500",
            icon:tick,
            iconStyle:""
        },
        error:{
            style:"text-red-500",
            icon:cross,
            iconStyle:"p-2"
        },
        warning:{
            style:"text-yellow-500",
            icon:warning,
            iconStyle:"p-3"
        },
        notice:{
            style:"text-[#20c4cb]",
            icon:notice,
            iconStyle:"p-3"
        }
    }
  return (
    <div className="container w-64 h-20 bg-white rounded-lg flex flex-col justify-center overflow-hidden">
        <div className='flex items-center'>
            <img src={variants[variant].icon} className={` ${variants[variant].iconStyle} w-17 h-17`} alt="tick" />
            <div className="text">
                <h3 className={`${variants[variant].style} font-bold`}>{title}</h3>
                <p className='text-gray-500 text-sm leading-none'>{subtitle}</p>
            </div>
        </div>
    </div>
  )
}

export default Toast
