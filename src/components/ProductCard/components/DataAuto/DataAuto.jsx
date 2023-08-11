import React, { useState } from 'react'
import style from './DataAuto.module.css'
import Copy from '../../../../assets/copy.png'
import Key from '../../../../assets/key.png'
import TooltipBlock from './components/TooltipBlock/TooltipBlock'
import { useResize } from '../../../../hooks/useResize'
import ArrowUpLineIcon from '@rsuite/icons/ArrowUpLine'
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine'
import Container from '../../../Container/Container'

const DataAuto = () => {
  const [show, setShow] = useState(false)
  const { width, isScreenMd } = useResize()

  const dataCopy = (val) => {
    const data = val.parentNode.children[0].textContent

    async function copy(data) {
      await navigator.clipboard.writeText(data)
      alert('Ура, текст скопирован!')
    }

    try {
      copy(data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleShow = () => setShow(!show)

  return (
    <div className={style.dataAuto}>
      {/* <Container> */}
      <div className={style.innerDataAuto}>
        <button className={style.viewBlock} onClick={handleShow}>
          <span>Смотреть характеристики</span>
          {show ? (
            <ArrowUpLineIcon color="#0065b0" />
          ) : (
            <ArrowDownLineIcon color="#0065b0" />
          )}
        </button>
        {(show || isScreenMd) && (
          <div className={style.characteristics}>
            <div className={style.item}>
              <h3>Основные характеристики</h3>
              <ul>
                <li>
                  <span>Лот</span>
                  <span>12345678</span>
                </li>
                <li>
                  <span>VIN</span>
                  <span
                    className={style.vinCopy}
                    onClick={(e) => dataCopy(e.target)}
                  >
                    <span>WAUZZZF45KA061298</span>
                    <img src={Copy} alt="copy" width="16px" height="16px" />
                  </span>
                </li>
                <li>
                  <span>Объем ДВС</span>
                  <span>2997</span>
                </li>
                <li>
                  <span>Тип топлива</span>
                  <span>Бензин</span>
                </li>
                <li>
                  <span>Трансмиссия</span>
                  <span>Автоматическая</span>
                </li>
                <li>
                  <span>Привод</span>
                  <span>Полный</span>
                </li>

                <li>
                  <span>Тип кузова</span>
                  <span>4-door sedan, hardtop</span>
                </li>
                <li>
                  <span>Цвет кузова</span>
                  <span>Серый</span>
                </li>
                <li>
                  <span>Пробег</span>
                  <span>6.543 км</span>
                </li>
              </ul>
            </div>
            <div className={style.item}>
              <h3>Дополнительные сведения</h3>
              <ul>
                <li>
                  <span>Тип поврежения</span>
                  <span>Вода</span>
                </li>

                <li>
                  <span>Тип документа</span>
                  <span>Salvage title</span>
                </li>
                <li>
                  <span>Ключи</span>
                  <span className={style.key}>
                    <TooltipBlock img={Key} title="Есть" />
                  </span>
                </li>
                <li>
                  <span>Состояние</span>
                  <span>Заводится и едет</span>
                </li>
                <li>
                  <span>Отчет</span>
                  <span className={style.report}>Доступен</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* </Container> */}
    </div>
  )
}

export default DataAuto
