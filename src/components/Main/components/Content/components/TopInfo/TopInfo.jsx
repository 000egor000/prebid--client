import React from 'react'
import style from './TopInfo.module.css'
import Close from '../../../../../../assets/close.png'
import Filter from '../../../../../../assets/filter.png'
const TopInfo = () => {
  return (
    <div className={style.topInfo}>
      <div className={style.innerTopInfo}>
        <div className={style.left}>
          <button>
            Фильтр <img src={Filter} alt="Filter" />
          </button>
          Найдено <span> 120 результатов</span>
        </div>
        <div className={style.right}>
          <ul>
            <li>
              <span> Автомобиль</span>
              <img src={Close} alt="close" />
            </li>
            <li>
              <span> Автомобиль</span>
              <img src={Close} alt="close" />
            </li>
            <li>
              <span> Автомобиль</span>
              <img src={Close} alt="close" />
            </li>
            <li className={style.later}>...</li>

            <li> Сбросить все</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopInfo
