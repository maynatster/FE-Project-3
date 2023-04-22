import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { basketAddAction } from "../../store/reducers/basketReducer";

export default function ProductDescriptionPage() {
  const { id } = useParams();
  const products = useSelector(({ products }) => products);
  const dispatch = useDispatch();

  const render = () => {
    if (products.length === 0) {
      return <p>data loading</p>;
    } else {
      const { image, price, title, description, discont_price } = products.find(
        (item) => item.id === +id
      )
      const picture = `http://localhost:3333/${image}`

      const discountPercent = 100 - Math.round(price / discont_price * 100)

      return (
        <div>
          <h1 className={s.title}>{title}</h1>
          <div className={s.container}>
                <img src={picture} alt={title}></img>
                <div className={s.info}>
                    {
                        discont_price !== null
                            ?  (
                                <div className={s.price}>
                                    <p className={s.new}>${discont_price}</p>
                                    <p className={s.old}>${price}</p>
                                    <p className={s.percent}>{discountPercent}%</p>
                                </div>
                                )
                            :   (
                                  <p className={s.oldAsRegular}>${price}</p>
                                )
                    }
                    <button type="button" name="to_cart" className={s.to_cart_btn}
                    onClick={() => dispatch(basketAddAction(id))}>To cart</button>
                    <p className={s.description_title}>Description</p>
                    <p className={s.description}>{description}</p>
                </div>
          </div>
        </div>
      );
    }
  };

  return <div>{render()}</div>;
}

