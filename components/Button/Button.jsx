import React from 'react'
import styles from './Button.module.css'


const Button = ({icon,text,isOutline}) => {
  return (
    <button  className={isOutline ? styles.btnOutline:styles.btnPrimary}>
     {icon}
     <span>{text}</span>
    </button>
  )
}

export default Button
