import React from 'react'
// import style from './Tooltip.module.css'
import { Tooltip, Whisper } from 'rsuite'

const TooltipBlock = ({ img, title }) => {
  return (
    <Whisper
      placement="top"
      // classPrefix="key rs-tooltip"
      speaker={
        <Tooltip>
          <img src={img} alt="copy" width="260px" />
        </Tooltip>
      }
    >
      <span>{title}</span>
    </Whisper>
  )
}

export default TooltipBlock
