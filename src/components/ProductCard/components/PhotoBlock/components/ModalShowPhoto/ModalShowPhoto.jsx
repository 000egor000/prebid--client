import React, { useState } from 'react'

import { Modal } from 'rsuite'

const ModalShowPhoto = ({
  boolModal,
  handleModal,
  data,
  dataCurrentImg,
  handleChangePrev,
  handleChangeNext,
}) => {
  return (
    <>
      <Modal
        overflow={false}
        open={boolModal}
        onClose={() => handleModal(false)}
        classPrefix="photo rs-modal"
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <span className="left" onClick={handleChangePrev} />
          <span className="right" onClick={handleChangeNext} />
          <div>
            <img src={dataCurrentImg.img} alt="photo" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalShowPhoto
