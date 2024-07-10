import React from 'react'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  // icon?: IconType
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <button
      type={type}
      className="rounded-md bg-white px-4 py-2 flex items-center space-x-2 border-2"
      onClick={onClick}
    >
      {/* {Icon && <Icon className="w-5 h-5" />} */}
      <span className="underline-magical">{text}</span>
    </button>
  )
}

export default Button
