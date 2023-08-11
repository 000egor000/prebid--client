import React from 'react'
import style from './TableBlock.module.css'
import { Button, Table } from 'rsuite'
import Marker from '../../../../../../../../assets/marker.png'
import MarkerActive from '../../../../../../../../assets/markerActive.png'
import { Link } from 'react-router-dom'
import CustomCell from './components/CustomCell/CustomCell'
const { Column, HeaderCell, Cell } = Table

const styleTable = {
  cursor: 'pointer',
  borderRadius: '4px',
}
const styleHeaderCell = {
  backgroundColor: '#F0F5FF',
  color: '#000',
  fontSize: '16px',
  fontWeight: '400',
}
const styleBtn = {
  backgroundColor: '#D3D8E6',
  color: '#ffff',
}
const styleBtnActive = {
  color: '#fff',
  backgroundColor: '#0050cf',
}
const styleCustomCell = {
  padding: 0,
  margin: 0,
}

const styleLot = {
  textDecoration: 'underline',
}

const TableBlock = ({ data }) => {
  const handleClick = (id) => alert(`Вы нажали, молодцы! У него ид: ${id}`)
  return (
    <Table
      data={data}
      autoHeight
      rowHeight={90}
      headerHeight={60}
      cellBordered
      bordered
      style={styleTable}
      // onRowClick={(rowData) => {
      //   console.log(rowData)
      // }}
    >
      <Column flexGrow={1} align="center" verticalAlign="middle">
        <HeaderCell style={styleHeaderCell}>Фото</HeaderCell>
        <CustomCell style={styleCustomCell}>
          {(rowData, rowIndex) => {
            return (
              <div className={style.blockImg}>
                <img src={rowData['Фото']} />

                <span
                  className={style.marker}
                  onClick={() => handleClick(rowData.id)}
                >
                  <img src={rowData.status ? MarkerActive : Marker} />
                </span>
              </div>
            )
          }}
        </CustomCell>
      </Column>
      <Column flexGrow={1} align="center" verticalAlign="middle">
        <HeaderCell style={styleHeaderCell}>№ Лота</HeaderCell>
        <CustomCell>
          {(rowData, rowIndex) => (
            <Link to={`/productCard/${rowData.id}`} style={styleLot}>
              {rowData['№ Лота']}
            </Link>
          )}
        </CustomCell>
      </Column>
      <Column flexGrow={1} align="center" verticalAlign="middle" sortable>
        <HeaderCell style={styleHeaderCell}>Год</HeaderCell>
        <CustomCell>{(rowData, rowIndex) => rowData['Год']}</CustomCell>
      </Column>

      <Column flexGrow={1} verticalAlign="middle">
        <HeaderCell style={styleHeaderCell}>Марка</HeaderCell>

        <CustomCell>{(rowData, rowIndex) => rowData['Марка']}</CustomCell>
      </Column>

      <Column flexGrow={1} sortable verticalAlign="middle">
        <HeaderCell style={styleHeaderCell}>Объем</HeaderCell>
        <CustomCell>{(rowData, rowIndex) => rowData['Объем']}</CustomCell>
      </Column>

      <Column flexGrow={1} sortable verticalAlign="middle">
        <HeaderCell style={styleHeaderCell}>Одометр</HeaderCell>
        <CustomCell>{(rowData, rowIndex) => rowData['Объем']}</CustomCell>
      </Column>
      <Column flexGrow={1} sortable verticalAlign="middle">
        <HeaderCell style={styleHeaderCell}>Дата</HeaderCell>
        <CustomCell>{(rowData, rowIndex) => rowData['Дата']}</CustomCell>
      </Column>
      <Column flexGrow={1} sortable verticalAlign="middle">
        <HeaderCell style={styleHeaderCell}>Ставка</HeaderCell>
        <CustomCell>{(rowData, rowIndex) => rowData['Ставка']}</CustomCell>
      </Column>
      <Column flexGrow={2} verticalAlign="middle">
        <HeaderCell style={styleHeaderCell}>Действие</HeaderCell>
        <CustomCell>
          {(rowData, rowIndex) => (
            <div className={style.groupBtn}>
              <button
                disabled={!rowData.status}
                style={rowData.status ? styleBtnActive : styleBtn}
              >
                Сделать ставку
              </button>
              <button disabled={!rowData.status}>
                Купить сейчас за 21500$
              </button>
            </div>
          )}
        </CustomCell>
      </Column>
    </Table>
  )
}

export default TableBlock
