import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function dostavka() {
  return (
    <Layout>
      <Seo title="Доставка и оплата" description="Предлагаем своим клиентам доставку воды и других товаров по
        Симферополю. Доставка воды осуществляется оперативно и бесплатно!
        Заказывать у нас выгодно!"/>
      <h1 style={{ textAlign: "center" }}>Доставка и оплата</h1>
      <p style={{ color: "red", fontWeight: "bold" }}>
        Мы предлагаем своим клиентам доставку воды и других товаров по
        Симферополю. Доставка воды осуществляется оперативно и бесплатно!
        Заказывать у нас выгодно!
      </p>

      <p>
        Чтоб заказать воду и ее доставку, вам нужно лишь связаться с нашим
        менеджером по любому из указанных на сайте телефонов.</p>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          {" "}
          Мы работаем даже в выходные дни!
        </p>

      <p>
        Сделайте звонок и получите вкусную питьевую воду по самой выгодной цене!
        В случае если вы сделали свой заказ до 10:00, он будет выполнен в тот же
        день. Если вы сделали заказ после 10:00, вода будет доставлена вам на
        следующий день.
      </p>

      <p>
        Мы просим Вас, во время получения своей питьевой воды, не задерживать
        водителя больше 20 минут. В случае, если он не сможет вручить вам заказ
        в течение этого времени, ему придется уехать, чтобы успеть доставить
        вкусную питьевую воду остальным клиентам. Мы доставляем воду не только
        по Симферополю, но и по Симферопольскому району. Залог нужно оплатить в
        первую поставку, он будет полностью возвращен в случае расторжении
        договора на поставки.
      </p>

      <p>
        Передав нам свои контактные данные, постарайтесь обеспечить возможность
        связи с вами, в день доставки. В случае, если водителю не удастся
        связаться с клиентом, выполнение заказа на воду с оперативной доставкой
        будет затруднительно.
      </p>
    </Layout>
  )
}
