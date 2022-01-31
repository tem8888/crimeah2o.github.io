import React from "react"
import HomeMenu from "../components/HomeMenu"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo title="Единая доставка воды в Крыму | Доставка питьевой воды в Симферополе" url="/"/>
      <HomeMenu />
      <section className="seo">
        <h1>Доставка воды в офис и на дом «Единая доставка воды в Крыму»</h1>
        <h2>Большой выбор и лучшие цены</h2>
        <p>
          Научно доказано – очищенная вода гораздо лучше усваивается организмом
          человека. Поэтому, заказ качественной воды – это не прихоть, а
          удовлетворение естественной потребности организма.</p>
          <p>
            Мы предлагаем вам, большой ассортимент вкусной и качественной воды,
            которая прекрасно подходит, как для питья, так и для приготовления
            пищи. Покупая у нас воду, вы получаете самые лучшие цены и
            бесплатную доставку.
          </p>
        <h2>Только качественная вода и своевременная доставка</h2>
        <p>
          Покупая у нас воду с бесплатной доставкой по Симферополю, вы будете на 100
          процентов уверены в ее высоком качестве. Наша вода, соответствует всем
          признакам качественной воды в бутылях: указаны данные о дате розлива,
          сроке и условиях хранения, расположении источника, месте розлива,
          номере скважины (если речь идет об артезианской воде), названии фирмы
          и ее месторасположении.</p>
          <p>
            Все виды воды, проходят качественную очистку и разливаются в
            надежную тару. Наша вода кристально чистая и не имеет неприятных
            запахов, а цена в Симферополе одна из самых низких.
          </p>
          <p>
            Если вы еще думаете над тем, стоит ли покупать качественную питьевую
            воду, ответ однозначен – конечно стоит! В свою очередь, мы сделаем
            все, чтобы купив чистую воду, вы получали свои заказы своевременно!
          </p>
        <h2>Комфортное сотрудничество</h2>
        <p>
          Наши специалисты с внимательностью относятся к вашим запросам и
          гарантируют индивидуальный подход в каждом случае. Вам совершенно не
          нужно тратить время на оформление покупки через сайт, любой товар
          можно оперативно заказать по телефону.
        </p>
        <p>
          Наши водители привозят воду именно по тому адресу, который был вами
          указан. С нашей доставкой никогда не бывает хлопот!
        </p>
        <p>
          Покупая воду для своих сотрудников, вы сможете создать более
          позитивную и здоровую атмосферу в коллективе, а доставка воды к себе
          на дом, позволит готовить еще более качественные блюда и напитки.
        </p>
        <p>
          Мы экономим ваше время и силы, делая все, что нужно, чтобы вы получали
          воду в свой офис или на дом, своевременно. Сотрудничество с нами – это
          гарантия получения качественной воды на лучших условиях!
        </p>
      </section>
    </Layout>
  )
}
