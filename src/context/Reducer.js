function Reducer(state, action) {
   switch(action.type){
    case 'Get_Stories':
      return {
        ...state , 
        hits:action.payload.hits,
        nbPages:action.payload.nbPages,
        isLoading:false,
      };
    case 'Set_Loading':
        return{
            ...state ,
            isLoading:true,

        }  

    case 'Remove_Post':
      return{
        ...state,
        hits:state.hits.filter((val)=>{
         return(
          val.objectID !== action.payload
         )
        })
      }
     case 'Search_Post':
      return{
        ...state,
        query:action.payload
      }

     case 'Get_Next':
      let pagenext = state.page+1;
      if(pagenext >= state.nbPages){
        pagenext=0;
      }
      return{
        ...state,
        page:pagenext
      }

      case 'Get_Prev':
        let pageprev = state.page-1;
        if(pageprev<=0){
          pageprev = 0;
        }
        return{
          ...state,
         page:pageprev
         
         
        } 
         
   }

   return state;
  }

  export default Reducer;