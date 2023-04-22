import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'

export default function CategoryItem({id, image, title}) {
    const picture = `http://localhost:3333/${image}`
    const link = `/categories/${id}`
  return (
    <Link to={link} className={s.item} >
        <img width={318} height={350} src={picture} alt={title}/>
        <p className={s.categories_title}>{title}</p>
    </Link>
  )
}
