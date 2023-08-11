import React, { useState } from 'react'
import style from './PutUpAlot.module.css'

import MainСharacteristics from './components/MainСharacteristics/MainСharacteristics'
import AdditionalInformation from './components/AdditionalInformation/AdditionalInformation'
import UploadAPhoto from './components/UploadAPhoto/UploadAPhoto'

const PutUpAlot = () => {
  const [dataAdditionalInformation, setDataAdditionalInformation] = useState({
    documentType: '',
    state: '',
    keys: '',
    report: '',
  })

  const [dataMainСharacteristics, setDataMainСharacteristics] = useState({
    carMark: '',
    carModel: '',
    year: '',
    vin: '',
    volume: '',
    transmission: '',
    fuelType: '',
    drive: '',
    bodyType: '',
    bodyColor: '',
    run: '',
    typeOfDamage: '',
  })

  const [dataUploadAPhoto, setDataUploadAPhoto] = useState({
    dataArrayFile: '',
  })

  return (
    <div className={style.putUpAlot}>
      <div className={style.innerPutUpAlot}>
        <div className={style.content}>
          <MainСharacteristics data={dataMainСharacteristics} />
          <AdditionalInformation data={dataAdditionalInformation} />
          <UploadAPhoto data={dataUploadAPhoto} />
        </div>
      </div>
    </div>
  )
}

export default PutUpAlot
