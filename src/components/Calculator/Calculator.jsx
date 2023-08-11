import React, { useCallback, useState } from 'react'
import style from './Calculator.module.css'
import { Modal, Button, Placeholder, ButtonToolbar } from 'rsuite'
import { Input } from 'rsuite'
// import StepOne from './components/StepOne/StepOne'
// import StepTwo from './components/StepTwo/StepTwo'
// import StepThree from './components/StepThree/StepThree'
// import StepFour from './components/StepFour/StepFour'
// import StepFive from './components/StepFive/StepFive'

const Calculator = ({ boolModal, handleModal }) => {
  const [cost, setCost] = useState(0)
  // const handleNextStep = () => {
  //   if (stepActive === 5) {
  //     alert('Все, все молодцы, расходимся!')
  //     resetModal()
  //   } else {
  //     setStepActive((res) => ++res)
  //   }
  // }

  const resetModal = () => {
    handleModal(false)
    setCost(1)
  }

  const calculateCost = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Modal
        open={boolModal}
        onClose={resetModal}
        classPrefix="calculator rs-modal"
      >
        <Modal.Header>
          <Modal.Title>Калькулятор стоимости</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={calculateCost}>
            <span>Укажите стаку</span>
            <Input value={cost} onChange={setCost} />
            <span className="minStep"> Минимальный шаг 100$</span>
            <button type="submit">Рассчитать стоимость</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="top">
            <div className="innerTop">
              <span>Приблизительная стоимость</span>
              <span>22000$</span>
            </div>
          </div>

          <ul>
            <li>
              <span>Региональный сбор</span>
              <span>100$</span>
            </li>

            <li>
              <span>Оформление, включая EX</span>
              <span>100$</span>
            </li>
            <li>
              <span>Аукционный сбор</span>
              <span>100$</span>
            </li>
            <li>
              <span>Доставка</span>
              <span>100$</span>
            </li>
          </ul>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Calculator
