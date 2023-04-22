import './Header.css'
import logo from '../Images/svg/header_logo.svg'
import shopping_bag from "../Images/svg/icon-shopping_bag.svg"
import { useNavigate } from 'react-router-dom'

function Header() {

    let navigate = useNavigate()

    return(
        <header className='header_wrapper'>
            <div className="header_logo">
                <a href="/" className="header_logo-link">
                    <img src={logo} alt="logo" className="header_logo-pic"/>
                </a>
            </div>
            <button type="submit" className="header_button" onClick={()=> navigate('products')}>Catalogue</button>
            <nav className="header_nav">
                <ul className='header_list'>
                    <li className="header_list_item">
                        <a href='/' className='header_link'>Home</a>
                    </li>
                    <li className="header_list_item">
                        <a href='/products' className='header_link'>All products</a>
                    </li>
                    <li className="header_list_item">
                        <a href='/sales'className='header_link'>All sales</a>
                    </li>
                </ul>
                <a href='/basket'>
                    <img src={shopping_bag} alt="icon" className="header_shopping-bag"/>
                </a>
            </nav>
        </header>
    )
}

export default Header