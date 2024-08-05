import React from 'react'

function PokeIcon({pokemon,loading,infoPokemon}) {
  
  return (
    <>
    {
      loading ? <img src='./images/loading.gif' className='loading' alt='loading..'/>:
      pokemon.map((item)=>{
        return (
    <div className='icon' key={item.id} onClick={()=>infoPokemon(item)}>
        <div className='circleicon'>
        <img src={item.sprites.front_default} alt='pokemonIcon'/>
        </div>
    </div>
    )
})

}
    </>
  )
}

export default PokeIcon