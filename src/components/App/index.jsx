import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import BasketPage from '../../pages/BasketPage'
import CategoriesPage from '../../pages/CategoriesPage'
import HomePage from '../../pages/HomePage'
import NotFoundPage from '../../pages/NotFoundPage'
import ProductDescriptionPage from '../../pages/ProductDescriptionPage'
import ProductsPage from '../../pages/ProductsPage'
import { loadCategories } from '../../store/asyncActions/loadCategories'
import { loadProducts } from '../../store/asyncActions/loadProducts'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './index.css'
import "@fontsource/montserrat"
import SalesPage from '../../pages/SalesPage'

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadCategories);
        dispatch(loadProducts);
    }, [])

  return (
    <div>
      <Header />
        <Routes>
            <Route path="/" element = {<HomePage />}/>
            <Route path="/categories" element = {<CategoriesPage />}/>
            <Route path="/categories/:categId" element = {<ProductsPage />}/>
            <Route path="/products" element = {<ProductsPage />}/>
            <Route path="/product/:id" element = {<ProductDescriptionPage />}/>
            <Route path="/sales" element = {<SalesPage/>}/>
            <Route path="/basket" element = {<BasketPage/>}/>
            <Route path="*" element = {<NotFoundPage />}/>
        </Routes>
      <Footer />
    </div>
  )
}
