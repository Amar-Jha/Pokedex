import React from 'react'

const Pokedetails = ({data}) => {
  // COLORS
  const colours = {
    normal: "#aab09f",
    fire: "#ea7a3c",
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
    {data &&
        <div className='flex items-center justify-center h-[500px] w-auto' >
        <div className='flex min-[300px]:w-full mx-8 my-8 sm:w-auto h-[300px] border border-black border-solid'>
          <div className='flex'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} style={{backgroundColor:colours[data.types[0].type.name]}} className=' items-center' alt='Pokemon' />
            </div>
            <div className=' ml-3 pl-1 pt-2 w-full'>
            {
                            data.types.map(poke=>{
                                return(
                                    <>
                                     <div className="group rounded text-center " style={{backgroundColor:colours[poke.type.name]}}>
                                        <h2 className=''>{poke.type.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                
                <div className='flex flex-row justify-around mt-1 mb-1'>
                {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group mx-1">
                                        <h2 className='rounded border border-black'>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                </div>
                <div className='base-stat '>
                {
              data.stats.map(poke=>{
                return(
                  <>
                  <div className='stats '>
                  <h3>{poke.stat.name}:{poke.base_stat}</h3>
                  </div>
                  </>
                )
              })
            }
                </div>
                <div className='flex justify-evenly my-2 '>
                  <h3 className='rounded border border-black'>Height:{data.height}</h3> <h3 className='rounded border border-black'>Weight:{data.weight}</h3>
                </div>
            </div>
        </div>
    </div>
    
    
  }
</>
    
  )
}

export default Pokedetails