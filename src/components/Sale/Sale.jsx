import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem'
import './Sale.css'

function Sale() {

    const products = useSelector(
        ({ products }) => {
          return products.filter(item => item.discont_price !== null)
        }
      )

    return(
        <div>
            <h2 className='sale-title'>Sale</h2>
            <div className='sale-container'>
                {
                    products.slice(0, 3).map(item => <ProductItem key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default Sale