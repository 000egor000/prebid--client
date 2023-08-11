import React from 'react'
import style from './FilterStatus.module.css'
import widgetAds from '../../../../assets/widgetAds.png'

const FilterStatus = ({ status, handleChangeStatus }) => {
  const dataStatus = [
    { id: 5, title: 'Выставить лот', img: widgetAds },
    { id: 4, title: 'Мои лоты' },
    { id: 2, title: 'Ждут ответ продавца' },
    { id: 1, title: 'Проданные авто' },
  ]
  return (
    <div className={style.filterStatus}>
      <div className={style.innerFilterStatus}>
        {dataStatus.map(({ id, title, img }) => (
          <div
            className={style.item}
            key={id}
            onClick={() => handleChangeStatus(id)}
          >
            <span>{img ? <img src={img} alt={img} /> : id}</span>
            <span>{title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterStatus
