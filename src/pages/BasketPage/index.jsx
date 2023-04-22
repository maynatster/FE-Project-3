import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import BasketCalculation from '../../components/BasketCalculation';
import BasketItem from '../../components/BasketItem'
import s from './style.module.css'

export default function BasketPage() {
    const {basket, products} = useSelector((state) => state);
    const data = basket.map(item => {
        const product = products.find(({id}) => id === item.id)
        return {...item, ...product}
    })

    const link = `/products`

    const onSubmit = event => {
        event.preventDefault()
        const {phone} = event.target
    
        fetch('http://localhost:3333/order/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({phone})
        })
        .then(() => {
          console.log('Data is sent')
        })
        .catch(error => {
          console.log(error.message)
        })
      }

  return (
    <div>
      <h1 className={s.title}>Shopping cart</h1>
      <Link to={link} className={s.link}>
        <p className={s.link_style}>Back to the store </p>
      </Link>
      <div className={s.wrapper}>
        <div className={s.item_container}>
          {
            data.length === 0
              ? <p className={s.message}>Cart is empty</p>
              : data.map((item) => <BasketItem key={item.id} {...item} />)  
          }        
        </div>

        <div className={s.order_input_container}>
                <p className={s.discount_title}>Order details</p>
                <BasketCalculation />
                <form onSubmit={onSubmit}>
                  <input type='phone' placeholder='Phone number' className={s.input_phone}/>
                  <button type='button' placeholder='Phone number' className={s.order_button}>Order</button>
                </form>
            </div>
      </div>
    </div>
  )
}