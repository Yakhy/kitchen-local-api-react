import './Create.css'

import { useState, useEffect } from 'react'
import {useFetch} from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'



export default function Create() {
const [title, setTitle] = useState('')
const [method, setMethod] = useState('')
const [cookingTime, setCookingTime] = useState('')
const [newIngredient, setNewIngredient] = useState('')
const [ingredients, setIngredients] = useState([])
const history = useHistory()

const {postData,  data, } = useFetch('http://localhost:3000/recipes', 'POST')


const handleSubmit = (e) =>{
  e.preventDefault()
  postData({title, method, cookingTime: cookingTime+'minutes', ingredients})
}


useEffect(() =>{
  if(data) {
    history.push()
  }
},  [data, history]
)



const addItem = (e) =>{
  e.preventDefault()
 const ing = newIngredient.trim()
 if (ing && !ingredients.includes(ing)){
   setIngredients((prev) => [...prev, ing])
 }
 setNewIngredient('')
}

  return(
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>
        <span>Recipe title:</span>
          <input type="text" onChange={(e) =>{
            setTitle(e.target.value)
          }}
          value={title}
            required
          />
        </label>


        <label>
          <span>Add ingredients:</span>
          <div className="ingredients">
            <input type="text" onChange={(e)=>  {setNewIngredient(e.target.value)
            }}
            value={newIngredient}/>
            <button onClick={addItem}>Add</button>
          </div>
        </label>
        <p>
          Ingredients:
          {ingredients.map((i) =>(
            <em key={i}>{i},</em>
          ))}
        </p>

        <label>
          <span>Method:</span>
          <textarea type="text"  
            onChange={(e) =>{
              setMethod(e.target.value)
          }}
          value={method}
          />
        </label>


        <label>
        <span>Cooking time:</span>
          <input type="number" 
           onChange={(e) =>{
            setCookingTime(e.target.value)
          }}
          value={cookingTime}
            required/>
        </label>
        
        <button type="submit">submit</button>
      </form>
    </div>
  )
   
}
