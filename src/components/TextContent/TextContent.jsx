import React from 'react'
import style from './TextContent.module.css'
import Container from '../Container/Container'
const TextContent = () => {
  return (
    <div className={style.textContent}>
      <Container>
        <div className={style.innerTextContent}>
          <p>
            На аукционах продаются легковые, грузовые автомобили и мотоциклы.
            Здесь Вы найдете не только автомобили с пробегом в прекрасном
            состоянии, но и автомобили после аварий или с техническими
            неполадками. Мы гарантируем качество продаваемых на аукционах
            автомобилей, поскольку все они подвергаются проверке со стороны
            независимых экспертов. Предоставляется информация о каждом б/у
            автомобиле: его пробег, история технического обслуживания, точный
            отчет о дефектах. У некоторых транспортных средств имеется заводская
            гарантия. Каждый аукцион автомобилей обновляется ежедневно, в неделю
            поступает более 7000 объявлений о транспортных средствах. Большой
            выбор автомобилей Audi, BMW, Renault, Toyota, Volkswagen,
            Mercedes-Benz, Škoda, Opel, Ford, Peugeot, Lexus, Citroen и
            автомобилей других производителей. Посредством платформы
            Exleasingcar транспортные средства продаются на автомобильных
            аукционах трех различных видов: Aукцион фиксированной цены: Вы
            соглашаетесь с ценой, предлагаемой продавцом Закрытый аукцион: Вы
            предлагаете свою цену, но не видите предложений других участников
            торгов Oткрытый аукцион: Вы предлагаете на 100 евро больше, чем
            имеющаяся и видимая участникам торгов самая высокая на тот момент
            цена.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default TextContent
