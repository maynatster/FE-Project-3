import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductItem from '../../components/ProductItem'
import ProductSearch from '../../components/ProductSearch'
import s from './style.module.css'

export default function ProductsPage() {

    const {categId} = useParams()
    const products = useSelector(
        ({products}) => {
            if(categId === undefined){
                return products
            }else{
                return products.filter(item => item.categoryId === +categId)
            }
        }
    )

    const category = useSelector(
        ({ category }) => {
            if (categId === undefined) {
                return category
            } else {
                return category.find(item => item.id === +categId)
            }
        }
    )

    // {(categId === undefined) ? 'All products' : category.title}

    return (
        <div>
            <h1 className={s.title}>
                {
                    categId === undefined
                    ? 'All products'
                    : category.title
                }
            </h1>  
            <ProductSearch /> 
            <div className={s.product_container}>
                {
                    products.map(item =>
                         item.show.price && 
                         item.show.discont_price && 
                         <ProductItem key={item.id} {...item}/>)
                }
            </div>
        </div>
    )
}

// .filter(({show})=> Object.values(show).every(item => item))
