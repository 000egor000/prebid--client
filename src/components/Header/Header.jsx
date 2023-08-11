import React from 'react'
import style from './Header.module.css'
import Navigaton from './components/Navigation/Navigation'
import Container from '../Container/Container'
import { SelectPicker } from 'rsuite'

const Header = () => {
  const data = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
    'Julia',
    'Albert',
  ].map((item) => ({ label: item, value: item }))

  return (
    <div className={style.header}>
      <Container>
        <div className={style.innerHeader}>
          <div className={style.leftSpace}>
            <span>Название страны, город, номер телефона</span>
          </div>
          <div className={style.rightSpace}>
            <label>
              <span>Регион</span>
              <SelectPicker
                data={data}
                // style={stylesSelectPicker}
                placeholder={'Аукционы'}
                searchable={false}
              />
            </label>
            <label>
              <span>Язык</span>
              <SelectPicker
                data={data}
                // style={stylesSelectPicker}
                placeholder={'Аукционы'}
                searchable={false}
              />
            </label>
            <label>
              <span>Валюта</span>
              <SelectPicker
                data={data}
                // style={stylesSelectPicker}
                placeholder={'Аукционы'}
                searchable={false}
              />
            </label>
          </div>
        </div>
      </Container>
      <Navigaton data={data} />
    </div>
  )
}
export default Header
