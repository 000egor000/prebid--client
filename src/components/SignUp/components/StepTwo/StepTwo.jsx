import React from 'react'
import style from './StepTwo.module.css'
import { Input, Checkbox } from 'rsuite'
import TopInfoStep from '../TopInfoStep/TopInfoStep'
const StepTwo = ({ idProp }) => {
  const styleInput = { borderRadius: '4px' }

  return (
    <div className={style.stepTwo}>
      <div className={style.innerStepTwo}>
        <TopInfoStep idProp={idProp} />
        <div className={style.twoPart}>
          <label>
            <span>Название компании</span>
            <Input placeholder="Default Input" style={styleInput} />
          </label>
          <label>
            <span>Имя</span>
            <Input placeholder="Default Input" style={styleInput} />
          </label>
          <label>
            <span>Фамилия</span>
            <Input placeholder="Default Input" style={styleInput} />
          </label>
          <label>
            <span>Электронная почта</span>
            <Input placeholder="Default Input" style={styleInput} />
          </label>
          <div className={style.noteItem}>
            <Checkbox />
            <span>
              Выбирая это поле, я подтверждаю, что мой возраст не менее 18 лет,
              и что мною прочитаны и приняты
              <a>Условия сотрудничества между участниками и Prebid</a>,
              <a>Политика конфиденциальности</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwo
