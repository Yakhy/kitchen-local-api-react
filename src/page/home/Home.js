import './Home.css'
import ReciepeList from '../ReciepeList/ReciepeList';
import { useFetch } from '../../hooks/useFetch'


export default function Home() {
  const url = 'http://localhost:3000/recipes'
  const {data: recipes, error, isPanding, } = useFetch(url)
  return ( 
  <div className="home">
      {isPanding && <p>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {recipes && <ReciepeList recipes={recipes}/>}
    </div>
    )
  
}
