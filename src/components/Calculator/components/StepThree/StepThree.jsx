import React, { useState } from 'react'
import style from './StepThree.module.css'

import TopInfoStep from '../TopInfoStep/TopInfoStep'
import BlockFile from './components/BlockFile'

const StepThree = ({ idProp }) => {
  const [fileGive, setFileGive] = useState('')
  const [dataArrayFile, setDataArrayFile] = useState([])

  const [fileGiveMore, setFileGiveMore] = useState('')
  const [dataArrayFileMore, setDataArrayFileMore] = useState([])

  const handleFile = (val) => {
    setFileGive(val)
    if (!dataArrayFile.includes(val)) {
      setDataArrayFile((res) => res.concat([val]))
    }
  }

  const handleFileMore = (val) => {
    setFileGiveMore(val)
    if (!dataArrayFileMore.includes(val)) {
      setDataArrayFileMore((res) => res.concat([val]))
    }
  }
  const removeFile = (id) => {
    const filterRes = dataArrayFile.filter((el) => el !== id)
    setDataArrayFile(filterRes)
  }
  const removeFileMore = (id) => {
    const filterRes = dataArrayFileMore.filter((el) => el !== id)
    setDataArrayFileMore(filterRes)
  }

  return (
    <div className={style.stepThree}>
      <div className={style.innerStepThree}>
        <TopInfoStep idProp={idProp} />
        <div className={style.twoPart}>
          <div className={style.top}>
            <p>Загрузите лицензию?</p>
            <BlockFile
              fileAdd={handleFile}
              fileName={fileGive}
              AllFile={dataArrayFile}
              removeItem={removeFile}
            />
          </div>
          <div className={style.bottom}>
            <p>Загрузите еще какой-нибудь файл</p>
            <BlockFile
              fileAdd={handleFileMore}
              fileName={fileGiveMore}
              AllFile={dataArrayFileMore}
              removeItem={removeFileMore}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree
