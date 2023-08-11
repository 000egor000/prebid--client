import React, { useState } from 'react'
import style from './StepFour.module.css'
import { InputGroup, Input, Form, Checkbox } from 'rsuite'
import EyeIcon from '@rsuite/icons/legacy/Eye'
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash'
import TopInfoStep from '../TopInfoStep/TopInfoStep'
const StepFour = ({ idProp }) => {
  const [visible, setVisible] = useState(false)
  const [visibleRepeat, setVisibleRepeat] = useState(false)

  const handleChange = () => {
    setVisible(!visible)
  }
  const handleChangeRepeat = () => {
    setVisibleRepeat(!visibleRepeat)
  }
  return (
    <div className={style.stepFour}>
      <div className={style.innerStepFour}>
        <TopInfoStep idProp={idProp} />
        <div className={style.twoPart}>
          <label>
            <span>Ваш логин</span>
            <Input placeholder="Default Input" />
          </label>
          <label>
            <span>Пароль</span>
            <InputGroup inside>
              <Input type={visible ? 'text' : 'password'} />
              <InputGroup.Button onClick={handleChange}>
                {visible ? <EyeIcon /> : <EyeSlashIcon />}
              </InputGroup.Button>
            </InputGroup>
          </label>
          <label>
            <span>Повторите пароль</span>
            <InputGroup inside>
              <Input type={visibleRepeat ? 'text' : 'password'} />
              <InputGroup.Button onClick={handleChangeRepeat}>
                {visibleRepeat ? <EyeIcon /> : <EyeSlashIcon />}
              </InputGroup.Button>
            </InputGroup>
          </label>
        </div>
      </div>
    </div>
  )
}

export default StepFour
