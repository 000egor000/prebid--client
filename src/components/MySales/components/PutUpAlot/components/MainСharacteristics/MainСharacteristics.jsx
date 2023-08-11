import React, { useState } from 'react'
import style from './MainСharacteristics.module.css'
import { DateRangePicker, SelectPicker } from 'rsuite'
// import Overlay from '../../../../../../assets/Overlay.png'
// import { useNavigate } from 'react-router-dom'

const MainСharacteristics = () => {
  // const navigate = useNavigate()

  // const goLink = (id) => navigate(`/productCard/${id}`)

  const data = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
    'Julia',
    'Albert',
  ].map((item) => ({ label: item, value: item }))

  return (
    <div className={style.mainСharacteristics}>
      <h6>Основные характеристики</h6>
      <div className={style.innerMainСharacteristics}>
        <ul className={style.oneBlock}>
          <li>
            <label htmlFor="carMark">Марка автомобиля</label>
            <SelectPicker data={data} id="carMark" searchable={false} />
          </li>
          <li>
            <label htmlFor="carModel">Модель</label>
            <SelectPicker data={data} id="carModel" searchable={false} />
          </li>
          <li>
            <label htmlFor="year">Год выпуска</label>
            <SelectPicker data={data} id="year" searchable={false} />
          </li>
          <li>
            <label htmlFor="vin">VIN номер</label>
            <SelectPicker data={data} id="vin" searchable={false} />
          </li>
        </ul>
        <ul className={style.twoBlock}>
          <li>
            <label htmlFor="volume">Объем ДВС</label>
            <SelectPicker data={data} id="volume" searchable={false} />
          </li>
          <li>
            <label htmlFor="transmission">Трансмиссия</label>
            <SelectPicker data={data} id="transmission" searchable={false} />
          </li>
          <li>
            <label htmlFor="fuelType">Тип топлива</label>
            <SelectPicker data={data} id="fuelType" searchable={false} />
          </li>
          <li>
            <label htmlFor="drive">Привод</label>
            <SelectPicker data={data} id="drive" searchable={false} />
          </li>
        </ul>
        <ul className={style.threeBlock}>
          <li>
            <label htmlFor="bodyType">Тип кузова</label>
            <SelectPicker data={data} id="bodyType" searchable={false} />
          </li>
          <li>
            <label htmlFor="bodyColor">Цвет кузова</label>
            <SelectPicker data={data} id="bodyColor" searchable={false} />
          </li>
          <li>
            <label htmlFor="run">Пробег</label>
            <SelectPicker data={data} id="run" searchable={false} />
          </li>
          <li>
            <label htmlFor="typeOfDamage">Тип повреждения</label>
            <SelectPicker data={data} id="typeOfDamage" searchable={false} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainСharacteristics
