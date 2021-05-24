import React from 'react'
import styles from './input.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
const cx = classnames.bind(styles)

const InputName = ({
  onChange, 
  value
}) => {
  return (
    <ThemeContext.Consumer>{
      theme => (
    <input name="name"
        value={value}
        onChange={onChange}
        className={cx("input", {[`input-theme-${theme}`]: true})}
    />
      )}
    </ThemeContext.Consumer>
  )
}

export default InputName