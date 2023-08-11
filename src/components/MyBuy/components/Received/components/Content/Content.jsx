import React, { useState } from 'react'
import style from './ContentRates.module.css'

import { useNavigate } from 'react-router-dom'

import FileInput from '../../../../../../assets/fileInput.png'

const ContentRates = ({ data }) => {
  const navigate = useNavigate()

  const goLink = (id) => navigate(`/productCard/${id}`)

  const styleStatys = (val) => {
    return {
      backgroundColor: val === 'Winning' ? '#66c314' : '#B9212E',
    }
  }

  return (
    <div className={style.contentRates}>
      <div className={style.innerContentRates}>
        <div className={style.first}>
          <div className={style.left} onClick={() => goLink(data.id)}>
            <img src={data['Фото']} alt="photo" />
          </div>
          <div className={style.right}>
            <div className={style.top}>
              <h3>2020 VOLKSWAGEN Golf Sportsvan VII</h3>

              <div className={style.middle}>
                <div className={style.one}>
                  <div className={style.item}>
                    <span>Номер лота</span>
                    <span className={style.value}>123456</span>
                  </div>
                  <div className={style.item}>
                    <span>Объем двигателя</span>
                    <span className={style.value}>2997</span>
                  </div>
                </div>
                <div className={style.two}>
                  <div className={style.item}>
                    <span>Тип топлива</span>
                    <span className={style.value}>Бензин</span>
                  </div>
                  <div className={style.item}>
                    <span>Одометр</span>
                    <span className={style.value}>31 068 км</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.bottom}>
              <div className={style.rates}>
                Сумма покупки <span>20 000</span> $
              </div>
              <div className={style.dateBuy}>
                Дата покупки <span>01.01.24</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.second}>
          <ul className={style.item}>
            <li>
              <img src={FileInput} alt="png" />
              <span>Подтверждение заказа</span>
            </li>
            <li>
              <img src={FileInput} alt="png" />
              <span>Счет-фактура</span>
            </li>
            <li>
              <img src={FileInput} alt="png" />
              <span>Сертификат о доставке</span>
            </li>
          </ul>
          <ul className={style.item}>
            <li>
              <img src={FileInput} alt="png" />
              <span>Разрешение на выдачу</span>
            </li>
            <li>
              <img src={FileInput} alt="png" />
              <span>EX</span>
            </li>
            <li>
              <img src={FileInput} alt="png" />
              <span>Бриф</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContentRates
