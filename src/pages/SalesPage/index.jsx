import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { priceFilterProductsAction, sortProductsAction } from '../../store/reducers/productsReducer'
import ProductItem from '../../components/ProductItem'


export default function SalesPage() {

    const products = useSelector(
        ({ products }) => {
          return products.filter(item => item.discont_price !== null)
        }
      )
  
  const [price, setPrice] = useState({min: -Infinity, max: Infinity})

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

  return (
    <div>
        <h1 className={s.title}>Products with sale</h1>
        <div className={s.block}>
            <p className={s.price}>Price 
                <input type='number' placeholder='from' onChange={setMinPrice}/>
                <input type='number' placeholder='to' onChange={setMaxPrice}/>
            </p>
            <p className={s.sorted}>Sorted
                <select onChange={onChangeOrder}>
                    <option value='1'>price (increasing)</option>
                    <option value='2'>price (decreasing)</option>
                </select>
            </p>       
        </div>
        <div className={s.product_container}>
                {
                    products.map(item =>
                         item.show.price &&
                         <ProductItem key={item.id} {...item}/>)
                }
        </div>
    </div>
  )
}