import React from 'react'
import './button.css'

const Button = ({
  onClick,
  id,
  value
}) => {
    return (
        <button className='button' onClick={onClick}>{value}</button>
    )
}

export default Button