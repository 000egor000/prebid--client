import React, { useState } from 'react'
import style from './Main.module.css'
import Preset from './components/Preset/Preset'
import Filter from './components/Filter/Filter'
import Content from './components/Content/Content'
import Container from '../Container/Container'
import Banner from '../Banner/Banner'
import TextContent from '../TextContent/TextContent'
import { useResize } from '../../hooks/useResize'

const Main = () => {
  const [activePosition, setActivePosition] = useState(false)

  const changeActivePosition = (id) => setActivePosition(id)
  const { width, isScreenMd } = useResize()

  return (
    <div className={style.main}>
      <Banner />
      <Container>
        <Preset
          activePosition={activePosition}
          changeActivePosition={changeActivePosition}
        />
        <div className={style.innerMain}>
          <div className={style.left}>
            <Filter />
          </div>
          <div className={style.right}>
            <Content activePosition={activePosition} isScreenMd={isScreenMd} />
          </div>
        </div>
      </Container>
      <TextContent />
    </div>
  )
}

export default Main
