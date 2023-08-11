import React from 'react'
import style from './BlockFile.module.css'

import AttachmentIcon from '@rsuite/icons/Attachment'
import ImageIcon from '@rsuite/icons/Image'

import CloseIcon from '@rsuite/icons/Close'

const BlockFile = ({ fileAdd, fileName, AllFile, removeItem }) => {
  const sliceText = (val) => {
    const [a, b, title] = val.split('\\')
    return String(title).length > 25
      ? String(title).slice(0, 25) + '...'
      : title
  }

  return (
    <div className={style.blockFile}>
      <label>
        <AttachmentIcon width="15" height="15" color="#0050CF" />

        <input
          type="file"
          value={fileName}
          onChange={(e) => fileAdd(e.target.value)}
        />
        <span>Прикрепить файл</span>
      </label>
      <ul>
        {AllFile.map((el) => {
          return (
            <li key={el}>
              <ImageIcon width="15" height="15" color="#6B7A99" />

              <div className={style.itemFile}>
                <span>{sliceText(el)}</span>
                <CloseIcon
                  width="15"
                  height="15"
                  color="#6B7A99"
                  onClick={() => removeItem(el)}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BlockFile
