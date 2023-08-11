import React, { useState } from 'react'
import style from './BreadCrumb.module.css'
import Container from '../Container/Container'
import { Link, useNavigate } from 'react-router-dom'

import PagePreviousIcon from '@rsuite/icons/PagePrevious'

const ChartIcon = ({ size, color }) => (
  <PagePreviousIcon style={{ fontSize: size, color }} />
)

const BreadCrumb = ({ separator }) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(-1)} className={style.breadCrumb}>
      {/* <Container> */}
      <div className={style.innerBreadCrumb}>
        <ChartIcon color="#0065B0" size="1em" />
        <span>Назад к результатам</span>
      </div>
      {/* </Container> */}
    </div>
  )
}

export default BreadCrumb
