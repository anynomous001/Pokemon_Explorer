'use client'

import { useFetch } from "@/hooks/useFetch";
import PokemonCards from "@/app/components/pokemon-cards";
import { nanoid } from "nanoid";
import HomePageSkeleton from "./HomePageSkeleton";
import { useRecoilState } from "recoil";
import usePokemonStore, { searchQueryState } from "../store/pokemonState";


const CardContainer = () => {

    const { pokemon, error, loading } = useFetch()

    const { filteredPokemon } = usePokemonStore();




    if (loading) {
        return <HomePageSkeleton />
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {
                filteredPokemon.map((pokemon: any) => {
                    console.log(pokemon.image)
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