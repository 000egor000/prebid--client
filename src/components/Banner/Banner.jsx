import React, { useState } from 'react'
import style from './Banner.module.css'

import Container from '../Container/Container'
import SignUp from '../../components/SignUp/SignUp'
import LogIn from '../../components/LogIn/LogIn'
import test from '../../assets/test.png'

const Banner = () => {
  const [boolModalSignUp, setBoolModalSignUp] = useState(false)
  const handleModalSignUp = (val) => setBoolModalSignUp(val)
  const [boolModalLogIn, setBoolModalLogIn] = useState(false)
  const handleModalLogIn = (val) => setBoolModalLogIn(val)

  const styleInnerBanner = {
    backgroundImage: `url(${test})`,
    backgroundSize: 'contain',
    backgroundPosition: '100% 100%',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div className={style.banner}>
      <SignUp boolModal={boolModalSignUp} handleModal={handleModalSignUp} />
      <LogIn boolModal={boolModalLogIn} handleModal={handleModalLogIn} />
      <Container>
        <div className={style.innerBanner} style={styleInnerBanner}>
          <div className={style.left}>
            <h2>Надежный способ продажи и покупки авто через аукцион</h2>
            <div className={style.groupBtn}>
              <button onClick={() => handleModalSignUp(true)}>
                Зарегистрироваться
              </button>
              <button onClick={() => handleModalLogIn(true)}>Войти</button>
            </div>
          </div>
          {/* <div className={style.right}>
            <img className={style.right} src={AutoTest} alt="auto" />
          </div> */}
        </div>
      </Container>
    </div>
  )
}

export default Banner
