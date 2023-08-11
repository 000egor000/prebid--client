import React, { useCallback, useState } from 'react'
import style from './ProductCard.module.css'
// import { Modal, Button, Placeholder, ButtonToolbar } from 'rsuite'
import TopInfo from './components/TopInfo/TopInfo'
import Container from '../Container/Container'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import PhotoBlock from './components/PhotoBlock/PhotoBlock'
import DataAuto from '../ProductCard/components/DataAuto/DataAuto'
import OtherNotes from '../ProductCard/components/OtherNotes/OtherNotes'

const ProductCard = ({}) => {
  return (
    <div className={style.productCard}>
      <Container>
        <BreadCrumb />
        <TopInfo />
        <div className={style.innerProductCard}>
          <div className={style.one}>
            <PhotoBlock />
          </div>
          <div className={style.blockInfo}>
            <div className={style.two}>
              <DataAuto />
            </div>
            <div className={style.three}>
              <OtherNotes />
            </div>
          </div>

          {/* <div className={style.left}> */}

          {/* </div> */}
          {/* <div className={style.right}> */}

          {/* </div> */}
        </div>
      </Container>
    </div>
  )
}

export default ProductCard
