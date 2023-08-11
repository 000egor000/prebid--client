import React from 'react'
import style from './TopInfo.module.css'
import AddSelect from '../../../../assets/addSelect.png'
import Share from '../../../../assets/share.png'
import Container from '../../../Container/Container'
const TopInfo = () => {
  return (
    <div className={style.topInfo}>
      {/* <Container> */}
      <div className={style.innerTopInfo}>
        <div className={style.left}>
          <h2>2021 VOLKSWAGEN Golf Sportsvan VII</h2>
        </div>
        <div className={style.right}>
          <label>
            <img src={AddSelect} alt="addSelect" width="15px" height="15px" />
            <button>Добавить в избранное</button>
          </label>
          <label>
            <img src={Share} alt="share" width="15px" height="15px" />
            <button>Поделиться</button>
          </label>
        </div>
      </div>
      {/* </Container> */}
    </div>
  )
}

export default TopInfo
