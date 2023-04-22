import './Discount.css'
import gnome from '../Images/svg/gnome.svg'
import { useState } from 'react';

function Discount() {
    const [phone] = useState("+49")
    const onSubmit = event => {
        event.preventDefault();
    
        fetch('http://localhost:3333/sale/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({phone})
        })
        .then(() => {
          console.log('Data is sent')
        })
        .catch(error => {
          console.log(error.message)
        })

    }
    return(
        <div className='discount_wrapper'>
            <img src={gnome} alt='gnome' className='gnome_pic'/>
            <div className='discount_input_wrapper'>
                <h2 className='discount_title'>5 % off</h2>
                <h2 className='discount_title2'>on first order</h2>
                <form onSubmit={onSubmit}>
                    <input type='phone' defaultValue="+49" className='input_phone'/>
                    <button type='button' className='discount_button'>Get discount</button>
                </form>
            </div>
        </div>
    )
}

export default Discount