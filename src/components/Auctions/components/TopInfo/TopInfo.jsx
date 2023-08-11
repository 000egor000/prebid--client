import React from 'react'
import style from './TopInfo.module.css'

const TopInfo = ({ count }) => {
  return (
    <div className={style.topInfo}>
      <div className={style.innerTopInfo}>
        Найдено <span>{count} результатов</span>
      </div>
    </div>
  )
}

export default TopInfo
