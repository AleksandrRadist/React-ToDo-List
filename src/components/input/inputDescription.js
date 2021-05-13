import React from 'react'
import styles from './input.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const InputDesciption = ({
  onChange, 
  value,
  theme
}) => {
  return (
    <input name="description"
        value={value}
        onChange={onChange}
        placeholder="Description"
        className={cx("input", {[`input-theme-${theme}`]: true})}
    />
  )
}

export default InputDesciption