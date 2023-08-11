import React, { useCallback, useState } from 'react'
import style from './SignUp.module.css'
import { Modal, Button, Placeholder, ButtonToolbar } from 'rsuite'

import StepOne from './components/StepOne/StepOne'
import StepTwo from './components/StepTwo/StepTwo'
import StepThree from './components/StepThree/StepThree'
import StepFour from './components/StepFour/StepFour'
import StepFive from './components/StepFive/StepFive'

const SignUp = ({ boolModal, handleModal }) => {
  const [stepActive, setStepActive] = useState(1)
  const handleNextStep = () => {
    if (stepActive === 5) {
      alert('Все, все молодцы, расходимся!')
      resetModal()
    } else {
      setStepActive((res) => ++res)
    }
  }

  const blockControlStep = useCallback(
    (id) => {
      switch (id) {
        case 1:
          return <StepOne idProp={id} />
        case 2:
          return <StepTwo idProp={id} />
        case 3:
          return <StepThree idProp={id} />
        case 4:
          return <StepFour idProp={id} />
        case 5:
          return <StepFive idProp={id} />

        default:
          return <StepOne idProp={id} />
      }
    },
    [stepActive]
  )
  const resetModal = () => {
    handleModal(false)
    setStepActive(1)
  }

  return (
    <>
      <Modal
        open={boolModal}
        onClose={resetModal}
        classPrefix="signUp rs-modal"
      >
        <Modal.Header>
          <Modal.Title>Регистрация в личном кабинете</Modal.Title>
        </Modal.Header>
        <Modal.Body>{blockControlStep(stepActive)}</Modal.Body>
        <Modal.Footer>
          <button type="submit" onClick={handleNextStep}>
            {stepActive !== 5 ? 'Продолжить' : 'Создать учетную запись'}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SignUp
