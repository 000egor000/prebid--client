import React, { useState } from 'react'
import style from './ContentRates.module.css'
import Overlay from '../../../../../../assets/Overlay.png'
import { useNavigate } from 'react-router-dom'

import Min from '../../../../../../assets/min.png'
import Plus from '../../../../../../assets/plus.png'
import { Input } from 'rsuite'

const ContentRates = ({ data }) => {
  const navigate = useNavigate()
  // const [count, setCount] = useState(0)
  const goLink = (id) => navigate(`/productCard/${id}`)

  // const handleCountPlus = () => setCount((val) => ++val)
  // const handleCountMinus = () => setCount((val) => --val)

  const styleStatys = (val) => {
    return {
      backgroundColor: val === 'Winning' ? '#66c314' : '#B9212E',
    }
  }

  return (
    <div className={style.contentRates}>
      <div className={style.innerContentRates}>
        <div className={style.left} onClick={() => goLink(data.id)}>
          <img src={data['Фото']} alt="photo" />
        </div>
        <div className={style.right}>
          <div className={style.top}>
            <h3>2020 VOLKSWAGENGolf Sportsvan VII</h3>
            <p>Активный лот</p>
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
            <div className={style.dateBuy}>
              Дата аукциона <span>01.01.24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentRates
