import React, { useState } from 'react'

import { Modal } from 'rsuite'
import { Input, InputGroup } from 'rsuite'
import EyeIcon from '@rsuite/icons/legacy/Eye'
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash'
const LogIn = ({ boolModal, handleModal }) => {
  const [visible, setVisible] = useState(false)

  const dataArray = [
    { id: 1, title: 'Я продавец' },
    { id: 2, title: 'Я пользователь' },
  ]

  const handleChange = () => {
    setVisible(!visible)
  }

  const styleElemBtn = (id) => {
    return {
      color: valSetting === id ? '#004DD5' : '#d3d8e6',
      borderBottom:
        valSetting === id ? '2px solid #004DD5' : '2px solid #d3d8e6',
      backgroundColor: valSetting === id ? '#ffff' : '#EDEFF3',
    }
  }

  const [valSetting, setValSetting] = useState(1)

  const handleBlockChange = (id) => setValSetting(id)

  return (
    <>
      <Modal
        open={boolModal}
        onClose={() => handleModal(false)}
        classPrefix="logIn rs-modal"
      >
        <Modal.Header>
          <Modal.Title>Вход в личный кабинет</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="groupIdentification">
            {dataArray.map(({ id, title }) => (
              <div
                className="Iam"
                style={styleElemBtn(id)}
                key={id}
                onClick={() => handleBlockChange(id)}
              >
                {title}
              </div>
            ))}
          </div>
          <div className="groupInput">
            <label className="notAccount">
              <span>Еще нет аккаунта?</span>
              <button type="button">Зарегистрироваться</button>
            </label>

            <label>
              <span>Электронная почта</span>
              <Input placeholder="Default Input" />
            </label>

            <label>
              <span>Пароль</span>
              <InputGroup inside>
                <Input type={visible ? 'text' : 'password'} />
                <InputGroup.Button
                  onClick={handleChange}
                  style={{ height: '50px' }}
                >
                  {visible ? <EyeIcon /> : <EyeSlashIcon />}
                </InputGroup.Button>
              </InputGroup>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => handleModal(false)} appearance="primary">
            Ok
          </Button>
          <Button onClick={() => handleModal(false)} appearance="subtle">
            Cancel
          </Button> */}
          <div className="groupBtn">
            <button type="submit">Продолжить</button>
            <button type="button">Забыли пароль</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LogIn
