import { useEffect, useContext } from "react"
import { Appcontext } from "../../context/context";
import './Stories.css'
const Stories = () => {
  const {hits, isLoading,removepost} = useContext(Appcontext);


   if(isLoading){
    return(
      <>
      <h2 id="loading">Loading....</h2>
      </>
      
    );
   } 

  return (
    <div>
      
        <div className="container">
      {
        hits.map((val,idx)=>{
          return(
            <div key={val.objectID} className="boxes">
              <h3>{val.title}</h3>
              
              <div className="desc">
              <p> By <span>{val.author}</span> |</p>
              <p>{val.num_comments}</p>
              </div>
              <div className="btn">
              <a href={val.url} id="read" >Read more</a>
              <a href="#"  onClick={()=>removepost(val.objectID)}  id="remove">Remove</a>
              </div>
              
            </div>
            
          )
        })

      }


    
            
        </div> 

    </div>
  )
}

export default Stories
