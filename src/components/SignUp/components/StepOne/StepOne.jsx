import React from 'react'
import style from './StepOne.module.css'
import { Radio, RadioGroup, Form } from 'rsuite'
import TopInfoStep from '../TopInfoStep/TopInfoStep'

const StepOne = ({ idProp }) => {
  return (
    <div className={style.stepOne}>
      <div className={style.innerStepOne}>
        <TopInfoStep idProp={idProp} />
        <div className={style.twoPart}>
          <Form.Group controlId="radioList">
            <RadioGroup name="radioList">
              <p>Выберите роль пользователя</p>

              <Radio value="A">Продавец</Radio>
              <Radio value="B">Пользователь</Radio>
              <p className={style.nameFace}>Вы регистрируетесь как</p>
              <Radio value="C">Юридическое лицо</Radio>

              <Radio value="D">Физическое лицо</Radio>
            </RadioGroup>
          </Form.Group>
        </div>
      </div>
    </div>
  )
}

export default StepOne
