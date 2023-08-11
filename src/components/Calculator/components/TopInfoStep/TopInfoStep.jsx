import React from 'react'
import style from './TopInfoStep.module.css'

const TopInfoStep = ({ idProp }) => {
  const stepSignUp = [
    { id: 1, step: 'Шаг 1', title: 'Выберите тип пользователя' },
    { id: 2, step: 'Шаг 2', title: 'Заполните необходимые данные' },
    { id: 3, step: 'Шаг 3', title: 'Загрузите необходимые документы' },
    { id: 4, step: 'Шаг 4', title: 'Придумайте логин и пароль' },
    { id: 5, step: 'Шаг 5', title: 'Выберите тарифный план' },
  ]
  const { title, step } = stepSignUp.find((el) => el.id === idProp)

  return (
    <div className={style.topInfoStep}>
      <div className={style.itemStep}>{step}</div>
      <div className={style.itemInfo}>{title}</div>
    </div>
  )
}

export default TopInfoStep
