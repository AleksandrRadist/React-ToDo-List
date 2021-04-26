import React from 'react'
import './input.css'

const InputDesciption = ({
  onChange, 
  value
}) => {
  return (
    <input name="description"
        value={value}
        onChange={onChange}
        placeholder="Description"
        className="input"
    />
  )
}

export default InputDesciption