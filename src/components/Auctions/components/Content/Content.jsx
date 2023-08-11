import React from 'react'
import style from './Content.module.css'

const Content = ({ data }) => {
  const styleCountry = (val) => {
    return {
      backgroundColor: 'Европа' === val ? '#66C314' : '#0092C0',
    }
  }

  return (
    <div className={style.content}>
      <h3>{data.date}</h3>
      <div className={style.innerContent}>
        {data.contents.map((el) => (
          <ul className={style.item} key={el.id}>
            <li>
              <span style={styleCountry(el.country)} className={style.country}>
                {el.country}
              </span>
            </li>
            <li>
              <div className={style.idAuction}>Какое-то название аукциона?</div>
              <div>
                <span>ID аукциона</span>
                <span>{el.idAuction}</span>
              </div>
            </li>
            <li>
              <div>Количество транспортных средств</div>
              <div>
                <span>{el.countCountry} </span>
                <span>автомобиля</span>
              </div>
            </li>
            <li>
              <div>
                <span>Дата окончания </span>
                <span className={style.dataEnd}>{el.dataEnd}</span>
              </div>
              <div>
                <span>Оставшееся время </span>
                <span className={style.dataRest}>{el.dataRest}</span>
              </div>
            </li>
            <li>
              <button>Смотреть подробнее</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Content
