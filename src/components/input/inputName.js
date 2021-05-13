import React from 'react'
import styles from './input.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const InputName = ({
  onChange, 
  value,
  theme
}) => {
  return (
    <input name="name"
        value={value}
        onChange={onChange}
        placeholder="Name"
        className={cx("input", {[`input-theme-${theme}`]: true})}
    />
  )
}

export default InputName