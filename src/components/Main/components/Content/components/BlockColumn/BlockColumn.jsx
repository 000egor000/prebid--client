import React from 'react'
import style from './BlockColumn.module.css'
import Overlay from '../../../../../../assets/Overlay.png'
import { useNavigate, Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

import Marker from '../../../../../../assets/marker.png'
import MarkerActive from '../../../../../../assets/markerActive.png'
const BlockColumn = ({ data }) => {
  // const navigate = useNavigate()

  // const goLink = (id) => navigate(`/productCard/${id}`)

  const styleBtn = {
    backgroundColor: '#D3D8E6',
    color: '#ffff',
  }
  const styleBtnActive = {
    color: '#fff',
    backgroundColor: '#0050cf',
  }

  const handleClick = (id) => alert(`Вы нажали, молодцы! У него ид: ${id}`)

  return (
    <div className={style.blockColumn}>
      <div className={style.innerBlockColumn}>
        {data.map((elem) => {
          return (
            <div className={style.itemBlock} key={elem.id}>
              <div className={style.top}>
                <div className={style.blockImg}>
                  <img src={elem['Фото']} />

                  <span
                    className={style.marker}
                    onClick={() => handleClick(elem.id)}
                  >
                    <img src={elem.status ? MarkerActive : Marker} />
                  </span>
                </div>
              </div>
              <div className={style.groupRest}>
                <div className={style.middle}>
                  <h6>{elem['Марка']}</h6>
                  <ul>
                    <li>
                      <span>Номер лота</span>
                      <span>
                        <Link to={`/productCard/${1}`}>2345678</Link>
                      </span>
                    </li>
                    <li>
                      <span>Дата акциона</span>
                      <span>2345678</span>
                    </li>
                    <li>
                      <span>Объем двигателя </span>
                      <span>2345678</span>
                    </li>
                    <li>
                      <span>Тип топлива </span>
                      <span>2345678</span>
                    </li>
                    <li>
                      <span>Одометр</span>
                      <span>2345678</span>
                    </li>
                  </ul>
                </div>
                <div className={style.bottom}>
                  <div className={style.first}>
                    <p>
                      Текущая ставка <span>{elem['Ставка']}</span>
                    </p>

                    <button
                      disabled={!elem.status}
                      style={elem.status ? styleBtnActive : styleBtn}
                    >
                      Сделать ставку
                    </button>
                  </div>
                  <div className={style.second}>
                    <button>Купить сейчас за 21500$</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlockColumn
