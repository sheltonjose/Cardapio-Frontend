import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { FoodData } from './interface/FoodData';

function App() {
  const data: FoodData =[];  // dados que vem da API

  return (
    <div className="container">
      <h1>Cardápio</h1>
        <div className="card-grid">
          {data.map(foodData=><Card price={foodData.price} title={foodData.title} image={foodData.image}/>)}
        </div>





    </div>
  )
}

export default App
