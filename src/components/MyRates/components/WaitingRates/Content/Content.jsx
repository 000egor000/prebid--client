import React, { useState } from 'react'
import style from './ContentRates.module.css'

import { useNavigate } from 'react-router-dom'

const ContentRates = ({ data }) => {
  const navigate = useNavigate()

  const goLink = (id) => navigate(`/productCard/${id}`)

  return (
    <div className={style.contentRates}>
      <div className={style.innerContentRates}>
        <div className={style.left} onClick={() => goLink(data.id)}>
          <img src={data['Фото']} alt="photo" width={100} height={100} />
        </div>
        <div className={style.right}>
          <div className={style.top}>
            <h3>2020 VOLKSWAGENGolf Sportsvan VII</h3>
            <ul>
              <li>
                <span> Номер лота</span>
                <span>{data['№ Лота']}</span>
              </li>
              <li>
                <span>До завершения торгов </span>
                <span>1 ч 20 мин</span>
              </li>
            </ul>
          </div>
          <div className={style.bottom}>
            <span>Статус: </span>
            <span>Ожидается решение продавца</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentRates
