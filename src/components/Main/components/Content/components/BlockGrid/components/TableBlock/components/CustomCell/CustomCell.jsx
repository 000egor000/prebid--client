import React from 'react'
import style from './CustomCell.module.css'
import { Table } from 'rsuite'

const { Cell } = Table

const styleCell = {
  backgroundColor: '#F8F9FB',
}
const styleCellActive = {
  backgroundColor: '#ffff',
}

const CustomCell = (props) => {
  return (
    <Cell
      {...props}
      style={{
        ...props.style,
        ...(props.rowData.status ? styleCellActive : styleCell),
      }}
    >
      {props.children}
    </Cell>
  )
}

export default CustomCell
