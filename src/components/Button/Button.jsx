import React from 'react'
import styles from './Button.module.css'

const Button = ({btnText,icon,isOutline}) => {
  return (
    <button className={isOutline? styles.outline_btn :  styles.from_btn}>
        {icon}
        {btnText}
    </button>
  )
}

export default Button