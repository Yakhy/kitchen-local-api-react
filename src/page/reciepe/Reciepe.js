 import { useParams } from 'react-router-dom';
 import { useFetch } from '../../hooks/useFetch';
import './Reciepe.css'



export default function Reciepe() {
   const {id} = useParams()
   const {data: Reciepe, error, isPanding } = useFetch(`http://localhost:3000/recipes/${id}`)
   console.log(Reciepe);
  return( <div>
   <div className="recipe">
      {isPanding && <p>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {Reciepe && (
        <div >
          <h3 className="page-title">
            {Reciepe.title}
          </h3>
          <p>{Reciepe.cookingTime}to cook</p>
          <ul>
            {Reciepe.ingredients.map((ing) =>{
              return <li key={ing}>{ing}</li>
            })}
          </ul>
          <div>{Reciepe.method}</div>
        </div>
      )}
    </div>
  </div>
  )
}
