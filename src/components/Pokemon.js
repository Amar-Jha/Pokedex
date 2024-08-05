import React from 'react'
import PokemonData from './PokemonData'
import '../App.css'
import PokeIcon from './PokeIcon'
import { useEffect,useState } from 'react';
import axios from 'axios';

function Pokemon() {
  const[pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const fetchApiData= async ()=>{
        try {
            setLoading(true);
            const res= await axios.get(url);
            setNextUrl(res.data.next);
            setPrevUrl(res.data.previous);
            getPokemon(res.data.results)
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    const getPokemon= async(res)=>{
        res.map(async(item)=>{
            const result=await axios.get(item.url)
           setPokeData(state=>{
            state=[...state,result.data]
            state.sort((a,b)=>a.id>b.id?1:-1)
            return state;
           })
        })
    }

    useEffect(() => {
      
      fetchApiData(); // eslint-disable-next-line 
    }, [url])

  return (
    
    <>
      <div className='container'>
        <div className='left-side'>
        <PokeIcon pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
          <div className='btn'>
          {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
          </div>
        </div>
          <div className='right-side'>
          <PokemonData data={pokeDex}/>
          </div>
      </div>
     </> 
  )
}

export default Pokemon