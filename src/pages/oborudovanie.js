import React from "react"
import ItemEquipment from "../components/ItemEquipment"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function oborudovanie() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Оборудование</title>
        <link rel="canonical" href="https://crimea-h2o.ru/oborudovanie" />
        <meta name="description" content="Доставка воды и оборудования в Крыму"/>
        <meta name="keywords" content="вода, доставка, раздатчик воды, симферополь, крым"/>
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Оборудование</h1>
      <ItemEquipment />
    </Layout>
  )
}
