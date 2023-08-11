import React, { useState } from 'react'
import style from './WaitingRates.module.css'
import Content from './Content/Content'

const WaitingRates = () => {
  const dataFilter = [
    { id: 1, title: 'Все' },
    { id: 2, title: 'Выигранные' },
    { id: 3, title: 'Проигранные' },
  ]
  const [active, setActive] = useState(dataFilter[0])

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
    },
  ]

  const getArrayFilter = () =>
    data.filter((el) => (active.id === 1 ? el : el.status === active.title))

  return (
    <div className={style.waitingRates}>
      <div className={style.innerWaitingRates}>
        <div className={style.content}>
          {getArrayFilter().map((el) => (
            <Content data={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WaitingRates
