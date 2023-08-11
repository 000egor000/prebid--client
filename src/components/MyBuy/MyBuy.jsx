import React, { useState, useCallback } from 'react'
import style from './MyBuy.module.css'

import Container from '../Container/Container'
import PageTitle from '../PageTitle/PageTitle'
import FilterStatus from './components/FilterStatus/FilterStatus'
import WinRates from './components/WinRates/WinRates'
import Received from './components/Received/Received'
import Lost from './components/Lost/Lost'

const MyBuy = () => {
  const [status, setStatus] = useState(3)

  const handleChangeStatus = (val) => setStatus(val)

  const blockControl = useCallback(
    (id) => {
      switch (id) {
        case 1:
          return <Lost />
        case 2:
          return <Received />
        case 3:
          return <WinRates />

        default:
          return <WinRates />
      }
    },
    [status]
  )

  return (
    <div className={style.main}>
      <Container>
        <PageTitle title="Мои заказы (покупки)" />
        <FilterStatus status={status} handleChangeStatus={handleChangeStatus} />

        <div className={style.innerMain}>{blockControl(status)}</div>
      </Container>
    </div>
  )
}

export default MyBuy
