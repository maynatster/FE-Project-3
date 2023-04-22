import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { basketAddAction } from '../../store/reducers/basketReducer'
import s from './style.module.css'

export default function ProductItem({id, image, title, price, discont_price}) {
  const dispatch = useDispatch()
  const link = `/product/${id}`
  const picture = `http://localhost:3333/${image}`

  const discountPercent = 100 - Math.round(price / discont_price * 100)

  const priceDisplay = () => {
    if (discont_price !== null){
      return(
            <div className={s.price}>
              <p className={s.new}>${discont_price}</p>
              <p className={s.old}>${price}</p>
              <p className={s.percent}>{discountPercent}%</p>
            </div>
            )
      }else{
        return(
            <p className={s.oldAsRegular}>${price}</p>
            )
      }
  }

  return (
        <div className={s.item}>
            <Link to={link}>
                <img width={300} height={300} src={picture} alt={title}/>                
            </Link>
            <button type="button" name="to_cart" className={s.item_btn}
            onClick={() => dispatch(basketAddAction(id))}>Add to cart</button>  
            <div className={s.price}>{priceDisplay()}</div>
            <p className={s.title}>{title}</p>               
        </div>
  )
}

// (((price - discont_price) / price * 100)).toFixed()
