import React, { useState } from 'react'
import style from './Navigation.module.css'
import { Input, InputGroup, SelectPicker } from 'rsuite'
import SearchIcon from '@rsuite/icons/Search'
import Container from '../../../Container/Container'
import Logo from '../../../../assets/logo.png'
import LogIn from '../../../LogIn/LogIn'
import Burger from './components/Burger/Burger'
import DefaultNav from './components/DefaultNav/DefaultNav'

import { Link, useNavigate } from 'react-router-dom'

const Navigation = ({ data }) => {
  const styles = {
    maxWidth: '454px',
    with: '100%',
  }
  const stylesBtn = {
    backgroundColor: '#66c314',
  }

  const [boolModalLogIn, setBoolModalLogIn] = React.useState(false)
  const handleModalLogIn = (val) => setBoolModalLogIn(val)
  const navigate = useNavigate()
  const handleLink = () => navigate('/')

  return (
    <div className={style.navigation}>
      <LogIn boolModal={boolModalLogIn} handleModal={handleModalLogIn} />

      <Container>
        <div className={style.innerNavigation}>
          <div className={style.logo} onClick={handleLink}>
            <img src={Logo} alt="logo" />
          </div>

          <DefaultNav />
          {/* <div className={style.groupBtn}> */}
          <InputGroup inside style={styles}>
            <Input type="text" />
            <InputGroup.Button style={stylesBtn}>
              <SearchIcon color="#ffff" />
            </InputGroup.Button>
          </InputGroup>
          <div className={style.btnGrp}>
            <button
              className={style.entrance}
              onClick={() => handleModalLogIn(true)}
            >
              Вход / Регистрация
            </button>
            <Burger />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navigation
