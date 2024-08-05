import React from 'react'
import '../App.css'


function PokemonData({data}) {

    
  return (
    <>
    {

      (!data)?"": (
          <div className='card' key={data.id}>
          <div className='card-side front'>
            <div>
                <h1> {data.id} {data.name}</h1>
                <img src={data.sprites.other.dream_world.front_default} alt=''/>
            </div>
            <div className='type'>Type:
              <div>{data.types[0].type.name}</div>
              </div>
              <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                  
          </div>
          <div className='card-side back'>
          <h3>Height:{data.height}</h3> <h3>Weight:{data.weight}</h3>
          <div className="base-stat">
            {
              data.stats.map(poke=>{
                return(
                  <>
                  <div className='stats'>
                  <h3>{poke.stat.name}:{poke.base_stat}</h3>
                  </div>
                  </>
                )
              })
            }
            </div>
          </div>
        </div>
        )
    }
        
        </>
  )
}

export default PokemonData