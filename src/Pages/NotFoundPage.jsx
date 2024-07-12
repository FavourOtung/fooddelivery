import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <div>404 Not Found</div>
        <Link to="/">Home</Link>
    </div>
    
  )
}

export default NotFoundPage