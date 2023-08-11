import React from 'react'
import style from './FilterStatus.module.css'

const FilterStatus = ({ status, handleChangeStatus }) => {
  const dataStatus = [
    { id: 3, title: 'Выигранные' },
    { id: 2, title: 'Полученные' },
    { id: 1, title: 'Проигранные' },
  ]
  return (
    <div className={style.filterStatus}>
      <div className={style.innerFilterStatus}>
        {dataStatus.map(({ id, title }) => (
          <div
            className={style.item}
            key={id}
            onClick={() => handleChangeStatus(id)}
          >
            <span>{id}</span>
            <span>{title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterStatus
