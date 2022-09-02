const PokeData = ({pokeData}) => {

    return (
        <div className='poke-data-box bg-gray-100 md:border border-gray-300 md:rounded-md md:w-1/2 md:mx-auto p-4'>
            <div>
                <img className='mx-auto' src={pokeData.pokeSprite} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>{pokeData.pokeName}</h3>
            <p className='text-xl mb-2'>Height: {pokeData.pokeHeight} Decimeters</p>
            <p className='text-xl mb-2'>Weight: {pokeData.pokeWeight} Hectograms</p>
        </div>
    )
    
}

export default PokeData