import React from 'react'

const Button = ({children,onClick,variant="primary",btncolor="blue"}) => {
    const base = "font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:-translate-y-1 transition-all transform duration-300 ease-in-out"
    const colorMap={
        blue:{
            bg:"bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
            shadow:"shadow-blue-500/50 hover:shadow-blue-600/50"
        },
        red:{
            bg:"bg-gradient-to-r from-red-500 via-red-600 to-red-700",
            shadow:"shadow-red-500/50 hover:shadow-red-600/50"
        },
        yellow:{
            bg:"bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700",
            shadow:"shadow-yellow-500/50 hover:shadow-yellow-600/50"
        },
        pink:{
            bg:"bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700",
            shadow:"shadow-pink-500/50 hover:shadow-pink-600/50"
        },
        purple:{
            bg:"bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700",
            shadow:"shadow-purple-500/50 hover:shadow-purple-600/50"
        },
        instagram:{
            bg:"bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400",
            shadow:"shadow-pink-500/50 hover:shadow-pink-600/50"
        },
        violet:{
            bg:"bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700",
            shadow:"shadow-violet-500/50 hover:shadow-violet-600/50"
        },
        green:{
            bg:"bg-gradient-to-r from-green-500 via-green-600 to-green-700",
            shadow:"shadow-green-500/50 hover:shadow-green-600/50"
        },
        black:{
            bg:"bg-gradient-to-r from-black via-black to-purple-900",
            shadow:"shadow-purple-500/50 hover:shadow-purple-600/50"
        },
    }
    const color=colorMap[btncolor];
    const styles={
        primary:`${color.bg} text-white hover:bg-gradient-to-br shadow-lg ${color.shadow} transition-all transform duration-300 ease-in-out`,
        secondary_black:"bg-black text-white border border-black border-2 hover:bg-[#e8e8e8] hover:text-black",
        secondary_white:"bg-[#e8e8e8] text-black border border-black border-2 hover:bg-black hover:text-white",
    }
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
        {children}
    </button>
  )
}

export default Button;
