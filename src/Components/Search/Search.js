import React from 'react'
import './search.css'
import { useContext } from 'react'
import { Appcontext } from '../../context/context'

const Search  = () => {
  const {query,searchpost} = useContext(Appcontext)
  return (
    <div className='search-box'>
      <h2>NEWS INDIA</h2>
      <form action="">
        <div >
        <input className='search' placeholder='Search News' type="text" 
         onChange={(e)=>searchpost(e.target.value)}
        />

        </div>
      </form>
    </div>
  )
}

export default  Search