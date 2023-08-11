import React, { useState } from 'react'
import style from './OtherNotes.module.css'
import Carfa from '../../../../assets/carfa.png'
import CalculatorImg from '../../../../assets/calculatorImg.png'
import Min from '../../../../assets/min.png'
import Plus from '../../../../assets/plus.png'
import { Input } from 'rsuite'
import Calculator from '../../../Calculator/Calculator'
// import Container from '../../../Container/Container'

const OtherNotes = () => {
  const [count, setCount] = useState(0)
  const handleCountPlus = () => setCount((val) => ++val)
  const handleCountMinus = () => setCount((val) => --val)

  const [boolModalCalculator, setBoolModalCalculator] = useState(false)
  const handleModalCalculator = (val) => setBoolModalCalculator(val)

  return (
    <div className={style.otherNotes}>
      <Calculator
        boolModal={boolModalCalculator}
        handleModal={handleModalCalculator}
      />
      <div className={style.innerOtherNotes}>
        <div className={style.top}>
          <div className={style.partOne}>
            <div className={style.innerPartOne}>
              <h3>Текущая ставка</h3>
              <div className={style.groupBtn}>
                <Input value={count} onChange={setCount} />
                <button onClick={handleCountMinus}>
                  <img
                    src={Min}
                    alt="CalculatorImg"
                    width="48px"
                    height="48px"
                  />
                </button>
                <button onClick={handleCountPlus}>
                  <img
                    src={Plus}
                    alt="CalculatorImg"
                    width="48px"
                    height="48px"
                  />
                </button>
              </div>
              <button className={style.makeIns}>Сделать ставку</button>
              <div className={style.infoTime}>
                <span>До завершения торгов:</span>
                <span>7ч 59 мин</span>
              </div>
            </div>
          </div>
          <div className={style.partTwo}>
            <div className={style.titleName}>
              <span>Winning bid</span>
              <span>Outbid</span>
            </div>
            <button>Купить сейчас за 22000$</button>
          </div>
        </div>
        {/* <Container> */}
        <div className={style.middle}>
          <label onClick={() => handleModalCalculator(true)}>
            <img
              src={CalculatorImg}
              alt="CalculatorImg"
              width="20px"
              height="20px"
            />
            <button>Калькулятор стоимости</button>
          </label>
        </div>
        <div className={style.bottom}>
          <div className={style.item}>
            <ul>
              <li>
                <span>Статус</span>
                <span>В транзите</span>
              </li>

              <li>
                <span>Порт назначения</span>
                <span>Клайпеда, Литва, если будет длинная строка</span>
              </li>
              <li>
                <span>Место назначения</span>
                <span>Вильнюс, Литва</span>
              </li>
              <li>
                <span>Дата доставки</span>
                <span>20.06.2023</span>
              </li>
              <li>
                <span>Дата торгов</span>
                <span>20.06.2023 09.00</span>
              </li>
              <li>
                <span>
                  <img src={Carfa} alt="Carfa" width="120px" height="35px" />
                </span>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
        {/* </Container> */}
      </div>
    </div>
  )
}

export default OtherNotes
