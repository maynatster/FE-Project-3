import React from 'react'
import { useDispatch } from 'react-redux'
import { basketDecrementAction, basketDeleteAction, basketIncrementAction } from '../../store/reducers/basketReducer';
import s from './style.module.css'

export default function BasketItem({id, title, price, discont_price, count, image}) {
    const dispatch = useDispatch();
    const picture = `http://localhost:3333/${image}`
  return (
    <div className={s.item_container}>
        <img src={picture} alt={title} />
        <div className={s.item_descr}>
          <p>{title}</p>        
          <div className={s.btns_container}>
              <button className={s.btn_style} onClick={()=> dispatch(basketDecrementAction(id))}>-</button>
              <p>{count}</p>
              <button className={s.btn_style} onClick={()=> dispatch(basketIncrementAction(id))}>+</button>
          </div>
        </div>
        <div>
            {
              discont_price !== null
                  ?  (
                      <div className={s.price}>
                        <p className={s.price_new}>${discont_price}</p>
                        <p className={s.price_old}>${price}</p>
                      </div>
                      )
                  :   (
                        <p className={s.oldAsRegular}>${price}</p>
                      )
            }             
        </div>
        <button className={s.delete_button} onClick={()=> dispatch(basketDeleteAction(id))}>X</button>
    </div>
  )
}
