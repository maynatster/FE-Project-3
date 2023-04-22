import './Categories.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CategoryItem from '../CategoryItem'


function Categories() {
    const categories = useSelector(state => state.category)

    let navigate = useNavigate()

    return(
        <div>
            <div className='title_wrapper'>
                <h2 className='title_catalogue'>Catalogue</h2>
                <button type="button" className="title_button" onClick={()=> navigate('categories')}>All categories</button>
            </div>
            
            <div className='categories_container'>
                {categories.slice(0, 4).map(item => <CategoryItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default Categories
