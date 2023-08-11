import React from 'react'
import style from './Filter.module.css'
import { DateRangePicker, SelectPicker } from 'rsuite'

const styleDateRangePicker = { width: 224, marginRight: 40, border: 'none' }
const styleSelectPicker = { width: 243, borderBottom: '1px solid #D3D8E6' }

const Filter = ({
  active,
  showDate,
  handleChangeActive,
  handleChangeDate,
  dataFilter,
  dataSelect,
}) => {
  const styleFilter = (val) => {
    return {
      color: active.id == val.id ? '#004DD5' : '#6b7a99',
      border: active.id === val.id ? '1px solid #004DD5' : 'none',
      background: active.id == val.id ? 'none' : '#EDEFF3',
    }
  }

  const styleDate = (val) => {
    return {
      color: showDate === val ? '#004DD5' : '#000000',
      borderBottom: showDate === val ? '1px solid #004DD5' : 'none',
    }
  }

  return (
    <div className={style.blockfilter}>
      <ul className={style.filter}>
        {dataFilter.map((el) => (
          <li
            key={el.id}
            style={styleFilter(el)}
            onClick={() => handleChangeActive(el)}
          >
            {el.title}
          </li>
        ))}
      </ul>
      <div className={style.dateFilter}>
        <span onClick={() => handleChangeDate(1)} style={styleDate(1)}>
          Показать за все время
        </span>
        <div onClick={() => handleChangeDate(2)}>
          <label htmlFor="DateRangePicker">
            <span style={styleDate(2)}>Показать за период</span>
          </label>
          <DateRangePicker
            id="DateRangePicker"
            style={styleDateRangePicker}
            placement="autoVerticalEnd"
            placeholder="дд.мм.гггг - дд.мм.гггг"
          />
        </div>
        <SelectPicker
          data={dataSelect}
          style={styleSelectPicker}
          placeholder={'Сначала ближайшие'}
          searchable={false}
          appearance="subtle"
        />
      </div>
    </div>
  )
}

export default Filter
