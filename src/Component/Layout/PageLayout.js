import React from 'react'
import style from "./Layout.module.css"


const PageLayout = ({children, className}) => {
  return (
    <div className={`${style.PageLayout} ${className}`}>{children}</div>
  )
}

export default PageLayout