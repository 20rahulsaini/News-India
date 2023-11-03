//context creation
//provider
//usercontext hook
import React from 'react'
import { useReducer , useEffect } from 'react';
import reducer from './Reducer'

const Appcontext = React.createContext();

const AppProvider = ({children})=>{

    const initialState = {
    isLoading:true,
    query:"HTML",
    hits:[],
    page:0,
    nbPages:0

    }

    const [state,dispatch] = useReducer(  reducer ,initialState)

    const fun = async()=>{
    const  API = "https://hn.algolia.com/api/v1/search?"
    dispatch({
        type:"Set_Loading",
       
      })
    try {
        const res = await fetch(`${API}query=${state.query}&page=${state.page}`);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          dispatch({
            type:"Get_Stories",
             payload:{
                hits:data.hits,
                nbPages:data.nbPages
             }
          })
        

        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }


  const removepost =(objectID)=>{
    dispatch({type:"Remove_Post" , 
          payload:objectID
  })
  }




  const searchpost =(query)=>{
       dispatch({
        type:"Search_Post",
        payload:query
       })
  }


  const getnext =()=>{
    dispatch({type:'Get_Next'})
  }


  const getprev =()=>{
    dispatch({type:'Get_Prev'})
  }


    useEffect (()=>{
        fun()
    },[state.query, state.page]) 





return <Appcontext.Provider value={{...state,removepost,searchpost,getnext,getprev}} >{children}</Appcontext.Provider>
}



export{Appcontext,AppProvider}