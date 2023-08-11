import React from 'react'
import style from './Filter.module.css'
import { SelectPicker, Input, InputGroup } from 'rsuite'
import ArrowDownIcon from '@rsuite/icons/ArrowDown'

import SearchIcon from '@rsuite/icons/Search'
const Filter = () => {
  const data = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
    'Julia',
    'Albert',
  ].map((item) => ({ label: item, value: item }))

  const searchHandle = (e) => {
    e.preventDefault()
    alert('!!!!')
  }

  return (
    <div className={style.filter}>
      <div className={style.innerFilter}>
        <form onSubmit={searchHandle}>
          <ul>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Все автомобили'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}

                // classPrefix="rs-picker-select filter"
                // rs-picker filter
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Состояние'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Тип'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>

            <li className={style.customLi}>
              <label htmlFor="Odometer">Одометр</label>
              <div id="Odometer">
                <SelectPicker
                  data={data}
                  style={{ width: 65, height: 32 }}
                  searchable={false}
                  caretAs={ArrowDownIcon}
                />

                <SelectPicker
                  data={data}
                  style={{ width: 65, height: 32 }}
                  searchable={false}
                  caretAs={ArrowDownIcon}
                />
              </div>
            </li>
            <li className={style.customLi} style={{ border: 'none' }}>
              <label htmlFor="year">Год</label>
              <div id="year">
                <SelectPicker
                  data={data}
                  style={{ width: 65, height: 32 }}
                  searchable={false}
                  caretAs={ArrowDownIcon}
                />

                <SelectPicker
                  data={data}
                  style={{ width: 65, height: 32 }}
                  searchable={false}
                  caretAs={ArrowDownIcon}
                />
              </div>
            </li>
            <li>
              <InputGroup>
                <Input placeholder="Искать по Vin" />
                <InputGroup.Addon style={{ cursor: 'pointer' }}>
                  <SearchIcon />
                </InputGroup.Addon>
              </InputGroup>
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Марка'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Модель'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Тип двигателя'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Передача'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Тип топлива'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Приводной механизм'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Цилиндр'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Тип кузова'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
            <li>
              <SelectPicker
                data={data}
                placeholder={'Статус'}
                searchable={false}
                appearance="subtle"
                caretAs={ArrowDownIcon}
              />
            </li>
          </ul>
          <button type="submit">Показать результаты</button>
        </form>
      </div>
    </div>
  )
}

export default Filter
