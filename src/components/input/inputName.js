import React from 'react'
import './input.css'

const InputName = ({
  onChange, 
  value
}) => {
  return (
    <input name="name"
        value={value}
        onChange={onChange}
        placeholder="Name"
        className='input'
    />
  )
}

export default InputName