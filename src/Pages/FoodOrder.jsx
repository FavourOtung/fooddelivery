import React from 'react'
import { useParams } from 'react-router-dom'

const FoodOrder = () => {
const params = useParams();
console.log(params);

  return (
    <div>FoodOrder</div>
  )
}

export default FoodOrder