import React, { useState } from 'react'
import style from './StepFive.module.css'

import { Radio, RadioGroup, Form } from 'rsuite'
import TopInfoStep from '../TopInfoStep/TopInfoStep'

const StepFive = ({ idProp }) => {
  return (
    <div className={style.stepFive}>
      <div className={style.innerStepFive}>
        <TopInfoStep idProp={idProp} />
        <div className={style.twoPart}>
          <Form.Group controlId="radioList">
            <RadioGroup name="radioList">
              <Radio value="A">
                <div className={style.itemInfo}>
                  <div className={style.top}>
                    <span>Тарифный план 1 </span>
                    <span>100$ в месяц</span>
                  </div>
                  <div className={style.bottom}>
                    <span>Здесь будет располагаться краткое описание </span>
                  </div>
                </div>
              </Radio>
              <Radio value="B">
                <div className={style.itemInfo}>
                  <div className={style.top}>
                    <span>Тарифный план 2 </span>
                    <span>200$ в месяц</span>
                  </div>
                  <div className={style.bottom}>
                    <span>Здесь будет располагаться краткое описание </span>
                  </div>
                </div>
              </Radio>
              <Radio value="C">
                <div className={style.itemInfo}>
                  <div className={style.top}>
                    <span>Тарифный план 3 </span>
                    <span>300$ в месяц</span>
                  </div>
                  <div className={style.bottom}>
                    <span>Здесь будет располагаться краткое описание </span>
                  </div>
                </div>
              </Radio>
            </RadioGroup>
          </Form.Group>
        </div>
      </div>
    </div>
  )
}

export default StepFive
