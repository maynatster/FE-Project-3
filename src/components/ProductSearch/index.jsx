import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { priceFilterProductsAction, productsDiscountAction, sortProductsAction } from '../../store/reducers/productsReducer'


export default function ProductSearch() {
  
  const [price, setPrice] = useState({min:-Infinity, max:Infinity})
  const [discount, setDiscount] = useState(false)

  const setMaxPrice = (event)=> {
    setPrice(pre => ({ ...pre, max: +event.target.value || Infinity}))
  }  
  const setMinPrice = (event)=> {
    setPrice(pre => ({ ...pre, min: +event.target.value || -Infinity}))
  }

  useEffect(()=>{dispatch(priceFilterProductsAction(price));
  }, [price])

  const dispatch = useDispatch();
  
  const onChangeOrder = event => {
    const value = event.target.value;
    dispatch(sortProductsAction(value))
  }

  useEffect(() => {
    dispatch(productsDiscountAction(discount));
  }, [discount])

  return (
    <div className={s.block}>
        <p className={s.price}>Price 
          <input type='number' placeholder='from' onChange={setMinPrice}/>
          <input type='number' placeholder='to' onChange={setMaxPrice}/>
        </p>
        <p className={s.discount}>Discounted items
         <input type='checkbox' checked={discount} onChange={(elem) => setDiscount(elem.target.checked)}/>
        </p>
        <p className={s.sorted}>Sorted
          <select onChange={onChangeOrder}>
            <option value='1'>price (increasing)</option>
            <option value='2'>price (decreasing)</option>
          </select>
        </p>       
    </div>
  )
}