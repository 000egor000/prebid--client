import React, { useState } from 'react'
import style from './ContentRates.module.css'
import Overlay from '../../../../../../assets/Overlay.png'
import { useNavigate } from 'react-router-dom'

import Min from '../../../../../../assets/min.png'
import Plus from '../../../../../../assets/plus.png'
import { Input } from 'rsuite'

const ContentRates = ({ data }) => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const goLink = (id) => navigate(`/productCard/${id}`)

  const handleCountPlus = () => setCount((val) => ++val)
  const handleCountMinus = () => setCount((val) => --val)

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
            <ul>
              <li>
                <span>{data['№ Лота']}</span>
                <span>123456</span>
              </li>
              <li>
                <span>До завершения торгов </span>
                <span>1 ч 20 мин</span>
              </li>
            </ul>
          </div>
          <div className={style.bottom}>
            <ul className={style.first}>
              <li>
                <span style={styleStatys(data['status'])}>
                  {data['status']}
                </span>
                <span>
                  Моя ставка <span>{data['Ставка']}</span>
                </span>
              </li>
            </ul>
            <div className={style.second}>
              <Input value={count} onChange={setCount} />
              <button onClick={handleCountMinus} className={style.btnMinus}>
                <img src={Min} alt="CalculatorImg" width="40px" height="40px" />
              </button>
              <button onClick={handleCountPlus} className={style.btnPlus}>
                <img
                  src={Plus}
                  alt="CalculatorImg"
                  width="40px"
                  height="40px"
                />
              </button>

              <button>Увеличить ставку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentRates
