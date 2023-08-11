import React from 'react'
import style from './Footer.module.css'
import FaceBook from '../../assets/socialGroup/faceBook.png'
import Insta from '../../assets/socialGroup/insta.png'
import Vk from '../../assets/socialGroup/vk.png'
import V from '../../assets/socialGroup/v.png'
import YouTube from '../../assets/socialGroup/youTube.png'
import Container from '../Container/Container'

const Footer = () => {
  return (
    <div className={style.footer}>
      <Container>
        <div className={style.innerFooter}>
          <div className={style.top}>
            <div className={style.itemInfo}>
              <p>О компании</p>
              <ul>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
              </ul>
            </div>

            <div className={style.itemInfo}>
              <p>Центр помощи</p>
              <ul>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
              </ul>
            </div>

            <div className={style.itemInfo}>
              <p>Как продать авто</p>
              <ul>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
              </ul>
            </div>

            <div className={style.itemInfo}>
              <p>Как купить авто</p>
              <ul>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
              </ul>
            </div>

            <div className={style.itemInfo}>
              <p>Блок для seo</p>
              <ul>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
                <li>
                  <a>Ссылка на страницу</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={style.bottom}>
            <p>Copyright</p>

            <div className={style.socialGroup}>
              <a>
                <img src={FaceBook}></img>
              </a>
              <a>
                <img src={Insta}></img>
              </a>
              <a>
                <img src={Vk}></img>
              </a>
              <a>
                <img src={V}></img>
              </a>
              <a>
                <img src={YouTube}></img>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
