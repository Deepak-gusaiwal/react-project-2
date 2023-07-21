import React from 'react'
import styles from './Button.module.css'


const Button = ({icon,text,isOutline,...rest}) => {
  return (
    <button {...rest} className={isOutline ? styles.btnOutline:styles.btnPrimary}>
     {icon}
     <span>{text}</span>
    </button>
  )
}

export default Button
