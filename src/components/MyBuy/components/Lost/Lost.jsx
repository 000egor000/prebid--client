import React, { useState } from 'react'
import style from './Lost.module.css'

import Filter from './components/Filter/Filter'

const Lost = () => {
  const dataFilter = [
    { id: 1, title: 'Все' },
    { id: 2, title: 'Выигранные' },
    { id: 3, title: 'Проигранные' },
  ]

  const [active, setActive] = useState(dataFilter[0])
  const [showDate, setShowDate] = useState(1)

  const handleChangeActive = (val) => setActive(val)
  const handleChangeDate = (val) => setShowDate(val)

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

  return (
    <div className={style.completedRates}>
      <div className={style.innerCompletedRates}>
        <Filter
          active={active}
          showDate={showDate}
          handleChangeActive={handleChangeActive}
          handleChangeDate={handleChangeDate}
          dataFilter={dataFilter}
        />

        <div className={style.content}></div>
      </div>
    </div>
  )
}

export default Lost
