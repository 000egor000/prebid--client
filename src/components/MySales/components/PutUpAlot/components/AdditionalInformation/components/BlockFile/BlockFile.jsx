import React from 'react'
import style from './BlockFile.module.css'

import AttachmentIcon from '@rsuite/icons/Attachment'
import ImageIcon from '@rsuite/icons/Image'

import CloseIcon from '@rsuite/icons/Close'

const BlockFile = ({ fileAdd, fileName, AllFile, removeItem }) => {
  return (
    <div className={style.blockFile}>
      <label>
        <AttachmentIcon width="15" height="15" />

        <input
          type="file"
          value={fileName}
          onChange={(e) => fileAdd(e.target.value)}
        />
        <span>Прикрепить файл</span>
      </label>

      {/* <ul>
        {AllFile.map((el) => {
          return (
            <li key={el}>
              <ImageIcon width="15" height="15" />

              <div className={style.itemFile}>
                <span>{el}</span>
                <CloseIcon onClick={() => removeItem(el)} />
              </div>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default BlockFile
