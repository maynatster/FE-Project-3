import React from 'react'
import s from './style.module.css'
import not_found from '../../components/Images/png/not_found.png'

export default function NotFoundPage() {
  return(
    <div className={s.not_found_page}> 
        <img src={not_found} alt='not_found' className={s.not_found_pic}/>
    </div>
  )
}
