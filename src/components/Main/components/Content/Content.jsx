import React from 'react'
import style from './Content.module.css'
import TopInfo from './components/TopInfo/TopInfo'
import BlockColumn from './components/BlockColumn/BlockColumn'
import BlockGrid from './components/BlockGrid/BlockGrid'

import PaginationBlock from './components/PaginationBlock/PaginationBlock'
import { useCallback } from 'react'

const Content = ({ activePosition, isScreenMd }) => {
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
      status: 0,
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
      status: 1,
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
      status: 1,
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
      status: 0,
    },
    {
      id: 5,
      Фото: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 0,
    },
    {
      id: 6,
      Фото: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 1,
    },
    {
      id: 7,
      Фото: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 1,
    },
    {
      id: 8,
      Фото: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 0,
    },
    {
      id: 9,
      Фото: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 1,
    },
    {
      id: 10,
      Фото: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 0,
    },
  ]

  const blockView = useCallback(() => {
    if (isScreenMd) {
      if (activePosition) {
        return <BlockGrid data={data} />
      } else return <BlockColumn data={data} />
    }
    return <BlockColumn data={data} />
  }, [activePosition, isScreenMd])

  return (
    <div className={style.content}>
      <TopInfo />
      {blockView()}
      {/* {activePosition ? <BlockColumn data={data} /> : } */}
      <PaginationBlock />
    </div>
  )
}

export default Content
