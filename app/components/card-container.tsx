'use client'

import { useFetch } from "@/hooks/useFetch";
import PokemonCards from "@/app/components/pokemon-cards";
import { nanoid } from "nanoid";


const CardContainer = () => {

    const { pokemon, error, loading } = useFetch()

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {
                pokemon.map((pokemon: any) => {
                    return <PokemonCards
                        key={nanoid()}
                        pokemon={pokemon}
                        error={error}
                        loading={loading}
                    />
                })
            }


        </div>
    )
}

export default CardContainer