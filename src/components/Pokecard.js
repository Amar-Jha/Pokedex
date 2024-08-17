import React from 'react'



const Pokecard = ({details,loading,infoPokemon}) => {
  // COLORS
  const colours = {
    normal: "#aab09f",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
 
  return (

   <>
   {loading && <img src='./images/loading.gif' className='loading' alt='loading..'/>}
   {details.map((item)=>(
    
       <div className='inline-flex ml-4 m-0.5 w-auto'  key={item.id}>
    
       <div className='flex w-[11.5rem] hover:cursor-pointer'>
           <div className=" m-2 rounded shadow-lg " style={{backgroundColor:colours[item.types[0].type.name]}} onClick={()=>infoPokemon(item)} >
           <img className=" justify-center" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt="Pokemon"/>
             <div className="px-6 py-4">
               <div className="font-bold text-nowrap text-lg text-center mb-2">{item.id} {item.name} </div>
             </div>
         </div>
       </div>
          
       </div>
       
   ))
  }
  
    </>
  )
}

export default Pokecard