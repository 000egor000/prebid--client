import React, { useState } from 'react'
import style from './AdditionalInformation.module.css'
import { SelectPicker } from 'rsuite'

import BlockFile from './components/BlockFile/BlockFile'

const AdditionalInformation = () => {
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
    <div className={style.additionalInformation}>
      <h6>Дополнительная информация</h6>
      <div className={style.innerAdditionalInformation}>
        <ul>
          <li>
            <label htmlFor="documentType">Тип документа</label>
            <SelectPicker data={data} id="documentType" searchable={false} />
          </li>
          <li>
            <label htmlFor="state">Состояние</label>
            <SelectPicker data={data} id="state" searchable={false} />
          </li>

          <li className={style.addFile}>
            <div className={style.first}>
              <label htmlFor="keys">Ключи</label>
              <SelectPicker data={data} id="keys" searchable={false} />
            </div>
            <div className={style.second}>
              {dataArrayFile.length > 0 ? (
                <label className={style.info}>{dataArrayFile[0]}</label>
              ) : (
                <BlockFile
                  fileAdd={handleFile}
                  fileName={fileGive}
                  AllFile={dataArrayFile}
                  removeItem={removeFile}
                />
              )}
            </div>
          </li>
        </ul>
        <ul>
          <li className={style.addFile}>
            <div className={style.first}>
              <label htmlFor="report">Отчет</label>
              <SelectPicker data={data} id="report" searchable={false} />
            </div>
            <div className={style.second}>
              {dataArrayFileMore.length > 0 ? (
                <label className={style.info}>{dataArrayFileMore[0]}</label>
              ) : (
                <BlockFile
                  fileAdd={handleFileMore}
                  fileName={fileGiveMore}
                  AllFile={dataArrayFileMore}
                  removeItem={removeFileMore}
                />
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdditionalInformation
