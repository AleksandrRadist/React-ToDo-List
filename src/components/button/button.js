import React from 'react'
import styles from './button.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const Button = ({
  onClick,
  value,
  theme
}) => {
    return (
        <button className={cx("button", {[`button-theme-${theme}`]: true})} onClick={onClick}>{value}</button>
    )
}

export default Button