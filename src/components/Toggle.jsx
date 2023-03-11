import React from 'react'
import style from './Toggle.module.css'

const Toggle = () => {
  return (
    <div
    className={style.container}>

<ul>
        <li>
        <Link to="/" >
          Home
        </Link>
        </li>
        <li>
        <Link to="/Collection">
          Collection
        </Link>
        </li>
        <li>
        <Link to="/CreatePage" >
          Create
        </Link>
        </li>
        <li>
        <Link to="/" >
          Log out
        </Link>
        </li>

        
      </ul>

    </div>
  )
}

export default Toggle;