import React, { useState } from 'react'
import style from './Burger.module.css'
import BurgerImg from '../../../../../../assets/burger.png'

import { Dropdown, IconButton } from 'rsuite'
import { Link, useNavigate } from 'react-router-dom'

const Burger = () => {
  const navigate = useNavigate()

  const goToLink = (link) => navigate(link)

  const renderIconButton = (props, ref) => {
    return (
      <IconButton
        {...props}
        ref={ref}
        icon={<img src={BurgerImg} width={22} height={22} />}
        appearance="primary"
      />
    )
  }

  return (
    <div className={style.burger}>
      <Dropdown
        renderToggle={renderIconButton}
        placement="bottomEnd"
        trigger="click"
      >
        <Dropdown.Item onClick={() => goToLink('/')}>Каталог </Dropdown.Item>

        <Dropdown.Item onClick={() => goToLink('/auctions')}>
          Аукционы
        </Dropdown.Item>

        <Dropdown.Item onClick={() => goToLink('/myRates')}>
          Мои ставки
        </Dropdown.Item>

        <Dropdown.Item onClick={() => goToLink('/myBuy')}>
          Мои покупки
        </Dropdown.Item>

        <Dropdown.Item onClick={() => goToLink('/mySales')}>
          Мои продажи
        </Dropdown.Item>

        <Dropdown.Item onClick={() => goToLink('/')}>Тарифы</Dropdown.Item>

        <Dropdown.Item onClick={() => goToLink('/')}>
          Как это работает
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default Burger
