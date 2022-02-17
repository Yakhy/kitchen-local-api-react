import React from 'react';
import { Link } from 'react-router-dom';
import Reciepe from '../reciepe/Reciepe';
import './ReciepeList.css'



export default function ReciepeList({recipes}) {
  return (
    <div className="recipe-list">
      {recipes.map((reciepe)=> {
        return (
         <div className="card"  key={reciepe.id}>
            <h3 className="page-title">{reciepe.title}</h3>
            <p>{reciepe.cookingTime}-to cook</p>
            <div>{reciepe.ingredients}</div>
            <div>{reciepe.method.substring(0, 100)}...</div>
            <Link to={`/recipes/${reciepe.id}`}>cook this</Link>
         </div>
  )
         
          
        
      })}
  </div>
  )
}

/*

<h3>{recipe.id}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{reciepe.method.substring(0, 100)}</div>
*/