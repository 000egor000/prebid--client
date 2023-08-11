import React from 'react'
import { Pagination, SelectPicker } from 'rsuite'
import style from './PaginationBlock.module.css'

const PaginationBlock = () => {
  const data = [30, 40, 50, 60, 70, 80, 90, 100].map((item) => ({
    label: item,
    value: item,
  }))
  const [layout, setLayout] = React.useState(['pager'])
  const [activePage, setActivePage] = React.useState(1)
  const [size, setSize] = React.useState('xs')
  const [maxButtons, setMaxButtons] = React.useState(5)
  const [total, setTotal] = React.useState(600)
  const [limit, setLimit] = React.useState(data[0]['value'])
  const [boundaryLinks, setBoundaryLinks] = React.useState(true)

  // const style = { width: 65 }

  return (
    <div className={style.paginationBlock}>
      <Pagination
        layout={layout}
        prev
        next
        maxButtons={3}
        size={size}
        limit={limit}
        total={total}
        activePage={activePage}
        onChangePage={setActivePage}
        ellipsis
        boundaryLinks
      />
      <div className={style.limit}>
        <label htmlFor="limit">Отображать по</label>
        <SelectPicker
          id="limit"
          searchable={false}
          placeholder={data[0]['value']}
          value={limit}
          onChange={setLimit}
        />
      </div>
    </div>
  )
}

export default PaginationBlock
