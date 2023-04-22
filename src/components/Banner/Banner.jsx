import './Banner.css'
import banner_pic from '../Images/svg/banner_pic.svg'
import { useNavigate } from 'react-router-dom'

function Banner() {
    let navigate = useNavigate()
    return(
        <div className="banner">
            <h1 className='banner_title'>New season</h1>
            <h1 className='banner_title2'>sales</h1>
            <button type="submit" className="banner_button1" onClick={()=> navigate('/sales')}>Sale</button>
            <img src={banner_pic} alt='banner' className='banner_pic'/>
        </div>
    )
}

export default Banner