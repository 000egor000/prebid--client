import React, { useState, useCallback } from 'react'
import style from './MySales.module.css'

import Container from '../Container/Container'
import PageTitle from '../PageTitle/PageTitle'
import FilterStatus from './components/FilterStatus/FilterStatus'

import PutUpAlot from './components/PutUpAlot/PutUpAlot'
import MyLots from './components/MyLots/MyLots'
import WaitingForAnAnswer from './components/WaitingForAnAnswer/WaitingForAnAnswer'
import СarsSold from './components/СarsSold/СarsSold'

const MySales = () => {
  const [status, setStatus] = useState(5)
  const handleChangeStatus = (val) => setStatus(val)

  const blockControl = useCallback(
    (id) => {
      switch (id) {
        case 1:
          return <СarsSold />
        case 2:
          return <WaitingForAnAnswer />
        case 4:
          return <MyLots />
        case 5:
          return <PutUpAlot />

        default:
          return <PutUpAlot />
      }
    },
    [status]
  )

  return (
    <div className={style.main}>
      <Container>
        <PageTitle title="Мои продажи" />
        <FilterStatus status={status} handleChangeStatus={handleChangeStatus} />

        <div className={style.innerMain}>{blockControl(status)}</div>
      </Container>
    </div>
  )
}

export default MySales
