import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'

export default function BasketCalculation() {
    const {products, basket} = useSelector(state => state)

    const data = basket.map(item => {
        const product = products.find(({id}) => id === item.id)
        return {...product, ...item}
    })

    const totalSum = data.reduce((acc, {price, count}) => acc + price*count, 0 )

  return (
    <div className={s.container}>
        <p className={s.total}>Total</p>
        <p className={s.total_sum}>{totalSum}$</p>
    </div>
  )
}