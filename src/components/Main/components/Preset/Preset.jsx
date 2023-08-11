import React, { useState } from 'react'
import style from './Preset.module.css'
import Column from '../../../../assets/positionPng/column.png'
import Grid from '../../../../assets/positionPng/grid.png'
import ColumnActive from '../../../../assets/positionPng/columnActive.png'
import GridActive from '../../../../assets/positionPng/gridActive.png'

const Preset = ({ activePosition, changeActivePosition }) => {
  const [valSetting, setValSetting] = useState(1)

  const [dataArray, setDataArray] = useState([
    { id: 1, title: 'Предустановка 1' },
    { id: 2, title: 'Предустановка 2' },
    { id: 3, title: 'Предустановка 3' },
    { id: 4, title: 'Предустановка 4' },
  ])

  const styleElemBtn = (id) => {
    return {
      color: valSetting === id ? '#004DD5' : '#d3d8e6',
      borderBottom:
        valSetting === id ? '2px solid #004DD5' : '2px solid #d3d8e6',
      fontFamily: valSetting === id ? 'Circe Bold' : 'Circe',
    }
  }
  const handleBlockChange = (id) => setValSetting(id)
  const addPreset = () =>
    setDataArray((item) =>
      item.concat([{ id: Date.now(), title: 'Предустановка XX' }])
    )

  return (
    <div className={style.preset}>
      <div className={style.innerPreset}>
        <div className={style.left}>
          {dataArray.map(({ id, title }) => (
            <div
              className={style.elemBtn}
              style={styleElemBtn(id)}
              key={id}
              onClick={() => handleBlockChange(id)}
            >
              <span> {title}</span>
            </div>
          ))}
          <button className={style.addBtn} onClick={addPreset}>
            + Добавить свой фильтр
          </button>
        </div>
        <div className={style.right}>
          <div className={style.positionPng}>
            <button onClick={() => changeActivePosition(false)}>
              <img src={activePosition ? Column : ColumnActive} alt="img" />
            </button>
            <button onClick={() => changeActivePosition(true)}>
              <img src={activePosition ? GridActive : Grid} alt="img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preset
