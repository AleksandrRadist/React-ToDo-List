import React from 'react'
import styles from './button.module.scss'
import classnames from 'classnames/bind'
import { ThemeContext } from "../Context/ThemeContext"
const cx = classnames.bind(styles)

const Button = ({
  onClick,
  value
}) => {
    return (
      <ThemeContext.Consumer>{
        theme => (
        <button className={cx("button", {[`button-theme-${theme}`]: true})} onClick={onClick}>{value}</button>
        )}
      </ThemeContext.Consumer>
    )
}

export default Button