import React from 'react'
import style from './BlockGrid.module.css'
import TableBlock from './components/TableBlock/TableBlock'

const BlockGrid = ({ data }) => {
  return (
    <div className={style.blockGrid}>
      <TableBlock data={data} />
    </div>
  )
}

export default BlockGrid
