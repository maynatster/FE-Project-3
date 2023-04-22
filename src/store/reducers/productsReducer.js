const PRODUCTS_LOAD = 'PRODUCTS_LOAD'
const PRODUCTS_DISCOUNT = 'PRODUCTS_DISCOUNT'
const PRODUCTS_SORT = 'PRODUCTS_SORT'
const PRODUCTS_PRICE_FILTER = 'PRODUCTS_PRICE_FILTER'

export const loadProductsAction = (payload) => ({type: PRODUCTS_LOAD, payload})
export const productsDiscountAction = (payload) => ({ type: PRODUCTS_DISCOUNT, payload })
export const sortProductsAction = (payload) => ({type: PRODUCTS_SORT, payload})
export const priceFilterProductsAction = (payload) => ({type: PRODUCTS_PRICE_FILTER, payload})

export const productsReducer = (state = [], action) => {
    if(action.type === PRODUCTS_LOAD){
        return action.payload.map(item => ({...item, show: {price: true, discont_price: true}}))
    }else if (action.type === PRODUCTS_DISCOUNT) {
        if (action.payload) {
            return state.map(item => {
                item.show.discont_price = item.discont_price !== null;
                return item
            })
        }else {
            return state.map(item => {
                item.show.discont_price = true;
                return item
            })
        }
    }else if(action.type === PRODUCTS_SORT){
        if (+action.payload === 1){
            state.sort((a, b) => a.price - b.price)
        }else{
            state.sort((a, b) => b.price - a.price)
        }
        return [...state]  
    }else if(action.type === PRODUCTS_PRICE_FILTER){
        const {min, max} = action.payload;
        return state.map(elem=> 
            {elem.show.price =
            elem.price >= min && elem.price <= max;
            return elem}
            )
    }
    return state
}