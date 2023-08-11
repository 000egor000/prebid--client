import React from 'react'
import 'rsuite/dist/rsuite.min.css'
import { Loader } from 'rsuite'
import style from './LoaderBlock.module.css'

const LoaderBlock = () => {
  return (
    <div className={style.loader}>
      <Loader size="lg" center speed="slow" vertical />
    </div>
  )
}

export default LoaderBlock
