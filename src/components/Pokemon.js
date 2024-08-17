import React, { useState, useEffect } from 'react'
import Pokecard from './Pokecard'
import axios from 'axios';
import Pokedetails from './Pokedetails'



const Pokemon = () => {
  const [details,setDetails]=useState([]);
  const [pokeDex,setPokeDex]=useState();
  const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
  const [loading,setLoading]=useState(false);

  const fetchApi= async ()=>{
    setLoading(true)
    const res=await axios.get(url);
    const data=res.data.results;
    getPokemon(data)
    setLoading(false)
    setUrl(res.data.next)
    
  }

  const getPokemon= async(res)=>{
    res.map(async(item)=>{
        const result=await axios.get(item.url)
       setDetails(state=>{
        state=[...state,result.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
        return state;
       })
    })
}


  useEffect(() => {
    fetchApi() // eslint-disable-next-line
  }, [])
  
  const[hideComponent,setHideCoomponent]=useState(true);

const handleClick = () => {
  setHideCoomponent(!hideComponent);
};
 
const click=()=>{
  setHideCoomponent(!hideComponent);
}
  return (
    
    <div className='flex-[1] md:mx-24 mx-1  bg-gray-100'>
      
      <div className='card' onClick={handleClick}>
      {hideComponent && <Pokecard details={details} loading={loading}  infoPokemon={poke=>setPokeDex(poke)}/>}
      </div>
      <div className=' flex justify-center'>
      <button className='border rounded m-1 p-1 text-white w-fit bg-purple-600' onClick={()=> fetchApi()}>Load more</button> 
      </div>
      <div className='details' onClick={click}>
      <Pokedetails data={pokeDex}/>
      </div>
    </div>
    
  )
  
}

export default Pokemon