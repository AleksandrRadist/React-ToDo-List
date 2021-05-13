import React from 'react'
import styles from './input.module.scss'
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
        className={cx("input", {[`input-theme-${theme}`]: true})}
    />
  )
}

export default InputDesciption