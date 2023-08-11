import React, { useState } from 'react'
import style from './DefaultNav.module.css'
import BurgerImg from '../../../../../../assets/burger.png'
import { Input, InputGroup, SelectPicker } from 'rsuite'
import { Dropdown, IconButton } from 'rsuite'
import { Link, useNavigate } from 'react-router-dom'
import MoreIcon from '@rsuite/icons/More'
const DefaultNav = () => {
  return (
    <nav className={style.defaultNav}>
      <ul>
        <li>
          <Link to="">Каталог</Link>
        </li>

        <li>
          <Link to="/auctions">Аукционы</Link>
        </li>
        {/* <li>
          <Link to="/myRates">Мои ставки</Link>
        </li> */}
        {/* <li>
          <Link to="/myBuy">Мои покупки</Link>
        </li> */}
        {/* <li>
          <Link to="/mySales">Мои продажи</Link>
        </li> */}

        <li>
          <Link to="">Тарифы</Link>
        </li>
        <li>
          <Link to="">Как это работает</Link>
        </li>
      </ul>
    </nav>
  )
}

export default DefaultNav
