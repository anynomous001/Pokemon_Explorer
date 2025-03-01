
import PokemonDetailsPage from '@/app/components/pokemon-details'
import { GridBackgroundDemo } from '@/components/grid-background-demo'
import React from 'react'



const PokemonDetails = () => {



    return (
        <GridBackgroundDemo>
            <div className='h-full flex justify-center  antialiased'>
                <PokemonDetailsPage />
            </div>
        </GridBackgroundDemo>
    )
}

export default PokemonDetails