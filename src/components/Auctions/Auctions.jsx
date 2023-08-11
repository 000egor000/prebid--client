import React, { useState } from 'react'
import style from './Auctions.module.css'
import Container from '../Container/Container'
import PageTitle from '../PageTitle/PageTitle'
import Content from './components/Content/Content'
import TopInfo from './components/TopInfo/TopInfo'
import Filter from './components/Filter/Filter'

const Auctions = () => {
  const dataFilter = [
    { id: 1, title: 'Все' },
    { id: 2, title: 'Европа' },
    { id: 3, title: 'США' },
  ]

  const [active, setActive] = useState(dataFilter[0])
  const [showDate, setShowDate] = useState(1)

  const handleChangeActive = (val) => setActive(val)
  const handleChangeDate = (val) => setShowDate(val)

  const dataSelect = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
    'Julia',
    'Albert',
  ].map((item) => ({ label: item, value: item }))

  const data = [
    {
      id: 1,
      date: '01.08.2024',
      contents: [
        {
          id: 1,
          country: 'Европа',
          idAuction: '123456',
          countCountry: 152,
          dataEnd: '01.08.2023',
          dataRest: '20 ч. 50 мин.',
        },
        {
          id: 2,
          country: 'США',
          idAuction: '123456',
          countCountry: 152,
          dataEnd: '01.08.2023',
          dataRest: '20 ч. 50 мин.',
        },
        {
          id: 3,
          country: 'Европа',
          idAuction: '123456',
          countCountry: 152,
          dataEnd: '01.08.2023',
          dataRest: '20 ч. 50 мин.',
        },
      ],
    },
    {
      id: 2,
      date: '25.08.2024',
      contents: [
        {
          id: 1,
          country: 'США',
          idAuction: '123456',
          countCountry: 152,
          dataEnd: '01.08.2023',
          dataRest: '20 ч. 50 мин.',
        },
        {
          id: 2,
          country: 'США',
          idAuction: '123456',
          countCountry: 152,
          dataEnd: '01.08.2023',
          dataRest: '20 ч. 50 мин.',
        },
        {
          id: 3,
          country: 'Европа',
          idAuction: '123456',
          countCountry: 152,
          dataEnd: '01.08.2023',
          dataRest: '20 ч. 50 мин.',
        },
      ],
    },
  ]

  // const getArrayFilter = () =>
  //   data.filter((el) => (active.id === 1 ? el : el.res.id === active.id))

  return (
    <div className={style.auctions}>
      <Container>
        <PageTitle title="Аукционы" />

        <div className={style.innerAuctions}>
          <Filter
            active={active}
            showDate={showDate}
            handleChangeActive={handleChangeActive}
            handleChangeDate={handleChangeDate}
            dataFilter={dataFilter}
            dataSelect={dataSelect}
          />
          <TopInfo count={120} />

          <div className={style.content}>
            {data.map((el) => (
              <Content data={el} key={el.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Auctions
