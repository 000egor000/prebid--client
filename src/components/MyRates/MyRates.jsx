import React, { useState, useCallback } from 'react'
import style from './MyRates.module.css'

import Container from '../Container/Container'
import PageTitle from '../PageTitle/PageTitle'
import FilterStatus from './components/FilterStatus/FilterStatus'
import ActiveRates from './components/ActiveRates/ActiveRates'
import WaitingRates from './components/WaitingRates/WaitingRates'
import CompletedRates from './components/CompletedRates/CompletedRates'

const MyRates = () => {
  const [status, setStatus] = useState(3)

  const handleChangeStatus = (val) => setStatus(val)

  const blockControl = useCallback(
    (id) => {
      switch (id) {
        case 1:
          return <CompletedRates />
        case 2:
          return <WaitingRates />
        case 3:
          return <ActiveRates />

        default:
          return <ActiveRates />
      }
    },
    [status]
  )

  return (
    <div className={style.main}>
      <Container>
        <PageTitle title="Мои ставки" />
        <FilterStatus status={status} handleChangeStatus={handleChangeStatus} />

        <div className={style.innerMain}>{blockControl(status)}</div>
      </Container>
    </div>
  )
}

export default MyRates
