import React, { useState } from 'react'

import { Modal } from 'rsuite'

const ModalShowPhotoFull = ({ boolModal, handleModal, data }) => {
  return (
    <>
      <Modal
        overflow={false}
        open={boolModal}
        onClose={() => handleModal(false)}
        classPrefix="photoFull rs-modal"
      >
        <Modal.Body>
          <div className="itemPhotos">
            {data.map((el) => (
              <img src={el.img} alt="photo" />
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalShowPhotoFull
