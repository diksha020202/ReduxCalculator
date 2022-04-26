const mult=(state=5, action)=>{
    if(action.type==='mult'){
        return state * action.payload
    }
    else if(action.type==='divide'){
     return state / action.payload
 }
 else{
     return state;
 }
 }
 
 export default mult;