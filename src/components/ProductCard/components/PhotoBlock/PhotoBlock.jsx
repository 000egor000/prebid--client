import React, { useEffect, useState } from 'react'
import style from './PhotoBlock.module.css'
import ArrowDownIcon from '@rsuite/icons/ArrowDown'
import ModalShowPhoto from './components/ModalShowPhoto/ModalShowPhoto'
import ModalShowPhotoFull from './components/ModalShowPhotoFull/ModalShowPhotoFull'
import Container from '../../../Container/Container'

const PhotoModal = () => {
  const dataPhoto = [
    {
      id: 1,
      img: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
    },
    {
      id: 2,
      img: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
    },
    {
      id: 3,
      img: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
    },
    {
      id: 4,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
    },
    {
      id: 5,
      img: 'https://avcdn.av.by/wisiwigimage/0001/6240/9291.jpeg',
    },
    {
      id: 6,
      img: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
    },
    {
      id: 7,
      img: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
    },
    {
      id: 8,
      img: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
    },
    {
      id: 9,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
    },
    {
      id: 10,
      img: 'https://avcdn.av.by/wisiwigimage/0001/6240/9291.jpeg',
    },
    {
      id: 11,
      img: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
    },
    {
      id: 12,
      img: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
    },
    {
      id: 13,
      img: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
    },
    {
      id: 14,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
    },
    {
      id: 15,
      img: 'https://avcdn.av.by/wisiwigimage/0001/6240/9291.jpeg',
    },
    {
      id: 16,
      img: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
    },
    {
      id: 17,
      img: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
    },
    {
      id: 18,
      img: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
    },
    {
      id: 19,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
    },
    {
      id: 20,
      img: 'https://avcdn.av.by/wisiwigimage/0001/6240/9291.jpeg',
    },
    {
      id: 21,
      img: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
    },
    {
      id: 22,
      img: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
    },
    {
      id: 23,
      img: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
    },
    {
      id: 24,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
    },
    {
      id: 25,
      img: 'https://avcdn.av.by/wisiwigimage/0001/6240/9291.jpeg',
    },
    {
      id: 26,
      img: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
    },
    {
      id: 27,
      img: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
    },
    {
      id: 28,
      img: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
    },
    {
      id: 29,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
    },
    {
      id: 30,
      img: 'https://avcdn.av.by/wisiwigimage/0001/6240/9291.jpeg',
    },
    {
      id: 31,
      img: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
    },
    {
      id: 32,
      img: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
    },
    {
      id: 33,
      img: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
    },
    {
      id: 34,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
    },
    {
      id: 35,
      img: 'https://avcdn.av.by/wisiwigimage/0001/6240/9291.jpeg',
    },
    {
      id: 36,
      img: 'https://www.ixbt.com/img/n1/news/2022/2/3/bmw_large.jpeg',
    },
    {
      id: 37,
      img: 'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
    },
    {
      id: 38,
      img: 'https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52',
    },
    {
      id: 39,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/22/755720013501225.jpg',
    },
    {
      id: 40,
      img: 'https://avcdn.av.by/wisiwigimage/0001/6240/9291.jpeg',
    },
  ]
  const [currentImg, setCurrentImg] = useState(dataPhoto[0])
  const [viewImgCount, setViewImgCount] = useState(10)

  const [boolModalShowPhoto, setBoolModalShowPhoto] = useState(false)
  const handleModalShowPhoto = (val) => setBoolModalShowPhoto(val)
  const [boolModalPhotoFull, setBoolModalPhotoFull] = useState(false)
  const handleModalPhotoFull = (val) => setBoolModalPhotoFull(val)

  const handleChangeNext = () => {
    let findNextId = dataPhoto.find((el) => el.id === currentImg.id + 1)

    setCurrentImg(findNextId ? findNextId : dataPhoto[0])
  }
  const handleChangePrev = () => {
    let findNextId = dataPhoto.find((el) => el.id === currentImg.id - 1)

    setCurrentImg(findNextId ? findNextId : dataPhoto[0])
  }

  const handlePhotoClick = (val) => setCurrentImg(val)
  const handleViewImgCount = () => setViewImgCount((res) => res + 10)

  return (
    <div className={style.photoModal}>
      <ModalShowPhoto
        boolModal={boolModalShowPhoto}
        handleModal={handleModalShowPhoto}
        data={dataPhoto}
        dataCurrentImg={currentImg}
        handleChangePrev={handleChangePrev}
        handleChangeNext={handleChangeNext}
      />
      <ModalShowPhotoFull
        boolModal={boolModalPhotoFull}
        handleModal={handleModalPhotoFull}
        data={dataPhoto}
      />
      {/* <Container></Container> */}
      <div className={style.innerPhotoModal}>
        <div className={style.top}>
          <span
            className={style.zoom}
            onClick={() => setBoolModalShowPhoto(true)}
          />

          <img src={currentImg.img} alt="Auto" />
          <span className={style.left} onClick={handleChangePrev} />
          <span className={style.right} onClick={handleChangeNext} />
        </div>

        <div className={style.bottom}>
          <ul>
            {dataPhoto.slice(0, viewImgCount).map((el) => {
              return (
                <li key={el.id} onClick={() => handlePhotoClick(el)}>
                  <img src={el.img} alt="Auto" width="125px" height="67px" />
                </li>
              )
            })}
          </ul>
          <div className={style.groupBtn}>
            <div className={style.one} onClick={handleViewImgCount}>
              <span>Еще фото (10 шт)</span>
              <ArrowDownIcon />
            </div>
            <div className={style.two}>
              <button onClick={() => setBoolModalPhotoFull(true)}>
                Все фото в одном окне
              </button>
              <button> Скачать фото </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoModal
