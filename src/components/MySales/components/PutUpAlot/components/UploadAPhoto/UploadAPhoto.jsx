import React, { useState } from 'react'
import style from './UploadAPhoto.module.css'
import drops from '../../../../../../assets/drops.png'
import { DateRangePicker, SelectPicker } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import { Dropdown, IconButton } from 'rsuite'
import MoreIcon from '@rsuite/icons/More'
const UploadAPhoto = () => {
  const [fileGive, setFileGive] = useState('')
  const [dataArrayFile, setDataArrayFile] = useState([])

  const handleFile = (val) => {
    setFileGive(val)
    if (!dataArrayFile.includes(val)) {
      setDataArrayFile((res) => res.concat([val]))
    } else {
      alert('уЖЕ ЕСТЬ ТАКОЙ ФАЙЛ!')
    }
  }
  const removeFile = (id) => {
    const filterRes = dataArrayFile.filter((el) => el !== id)
    setDataArrayFile(filterRes)
  }

  const data = [
    {
      id: 1,
      Фото: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 0,
    },
    {
      id: 2,
      Фото: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 1,
    },
    {
      id: 3,
      Фото: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 1,
    },
    {
      id: 4,
      Фото: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 0,
    },
    {
      id: 5,
      Фото: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 0,
    },
    {
      id: 6,
      Фото: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 1,
    },
    {
      id: 7,
      Фото: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 1,
    },
    {
      id: 8,
      Фото: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 0,
    },
    {
      id: 9,
      Фото: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 1,
    },
    {
      id: 10,
      Фото: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
      '№ Лота': '12345',
      Год: '2020',
      Марка: 'VOLKSWAGEN',
      Объем: '1.5',
      Одометр: '50000 км',
      Дата: '01.07.2023 09.00',
      Ставка: '22000$',
      status: 0,
    },
  ]

  const renderIconButton = (props, ref) => {
    return (
      <IconButton
        {...props}
        ref={ref}
        icon={<MoreIcon size="2em" />}
        appearance="primary"
      />
    )
  }

  return (
    <div className={style.uploadAPhoto}>
      <h6>Загрузить фото</h6>
      <p>Загрузите до 20 фотографий в хорошем качестве</p>
      <div className={style.innerUploadAPhoto}>
        <ul className={style.item}>
          <li>
            <label className={style.groupBtn}>
              <input
                type="file"
                value={fileGive}
                onChange={(e) => handleFile(e.target.value)}
              />
              <span>+ Загрузить фото</span>
            </label>
          </li>
          {dataArrayFile.map((el) => (
            <li>
              <img src="https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg" />
              <div className={style.drop}>
                <Dropdown renderToggle={renderIconButton} placement="bottomEnd">
                  <Dropdown.Item>Сделать фото главным</Dropdown.Item>
                  <Dropdown.Item onClick={() => removeFile(el)}>
                    Удалить фото
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </li>
          ))}
        </ul>
        <button className={style.goToModern}>Отправить на модерацию</button>
      </div>
    </div>
  )
}

export default UploadAPhoto
