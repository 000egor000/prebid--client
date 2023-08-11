import React from 'react'
import style from './PageTitle.module.css'

const PageTitle = ({ title }) => {
  return (
    <div className={style.pageTitle}>
      <div className={style.innerPageTitle}>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default PageTitle
