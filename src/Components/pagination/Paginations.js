import {useContext} from 'react'
import './pagination.css'

import { Appcontext } from '../../context/context'


const Paginations = () => {
const {getnext, getprev , page, nbPages} = useContext(Appcontext);
  
  return (
    <div className='pagination-btn'>
      <button id='p-btn' onClick={()=>getprev()} >Prev</button>
      <p>{page+1} of {nbPages}</p>
      <button id='p-btn' onClick={()=>getnext()}>Next</button>
    </div>
  )
}

export default Paginations