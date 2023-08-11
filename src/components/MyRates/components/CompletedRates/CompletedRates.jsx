import React, { useState } from 'react'
import style from './CompletedRates.module.css'
import Content from './Content/Content'
import { DateRangePicker } from 'rsuite'

const CompletedRates = () => {
  const dataFilter = [
    { id: 1, title: 'Все' },
    { id: 2, title: 'Выигранные' },
    { id: 3, title: 'Проигранные' },
  ]

  const [active, setActive] = useState(dataFilter[0])
  const [showDate, setShowDate] = useState(1)

  const handleChangeActive = (val) => setActive(val)
  const handleChangeDate = (val) => setShowDate(val)

  const styleFilter = (val) => {
    return {
      color: active.id == val.id ? '#004DD5' : '#6b7a99',
      border: active.id === val.id ? '1px solid #004DD5' : 'none',
      background: active.id == val.id ? 'none' : '#EDEFF3',
    }
  }

  const styleDate = (val) => {
    return {
      color: showDate === val ? '#004DD5' : '#000000',
      borderBottom: showDate === val ? '1px solid #004DD5' : 'none',
    }
  }

  const data = [
    {
      id: 1,
      Фото: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 'Outbid',
      res: { id: 2, title: 'Лот выигран' },
    },
    {
      id: 2,
      Фото: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 'Winning',
      res: { id: 3, title: 'Лот проигран' },
    },
    {
      id: 3,
      Фото: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 'Winning',
      res: { id: 3, title: 'Лот проигран' },
    },
    {
      id: 4,
      Фото: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 'Winning',
      res: { id: 2, title: 'Лот выигран' },
    },
  ]

  const getArrayFilter = () =>
    data.filter((el) => (active.id === 1 ? el : el.res.id === active.id))

  return (
    <div className={style.completedRates}>
      <div className={style.innerCompletedRates}>
        <div className={style.blockfilter}>
          <ul className={style.filter}>
            {dataFilter.map((el) => (
              <li
                key={el.id}
                style={styleFilter(el)}
                onClick={() => handleChangeActive(el)}
              >
                {el.title}
              </li>
            ))}
          </ul>
          <div className={style.dateFilter}>
            <span onClick={() => handleChangeDate(1)} style={styleDate(1)}>
              Показать за все время
            </span>
            <div onClick={() => handleChangeDate(2)}>
              <label htmlFor="DateRangePicker">
                <span style={styleDate(2)}>Показать за период</span>
              </label>
              <DateRangePicker
                // showOneCalendar
                id="DateRangePicker"
                style={{ width: 224 }}
                placement="autoVerticalEnd"
                placeholder="дд.мм.гггг - дд.мм.гггг"
              />
            </div>
          </div>
        </div>

        <div className={style.content}>
          {getArrayFilter().map((el) => (
            <Content data={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompletedRates
