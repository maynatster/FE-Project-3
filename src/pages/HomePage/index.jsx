import React from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import Discount from '../../components/Discount/Discount'
import Sale from '../../components/Sale/Sale'


export default function HomePage() {
  return (
    <main>
        <Banner />
        <Categories />
        <Discount />
        <Sale />
    </main>
  )
}
