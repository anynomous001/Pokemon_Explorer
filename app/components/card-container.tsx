'use client'

import { useFetch } from "@/hooks/useFetch";
import PokemonCards from "@/app/components/pokemon-cards";
import { nanoid } from "nanoid";
import HomePageSkeleton from "./HomePageSkeleton";
import usePokemonStore from "../store/pokemonState";
import { FocusCards } from "@/components/ui/focus-cards";


import Link from "next/link";
import { useState } from "react";

export interface Pokemon {
    name: string,
    id: number,
    image: string
}


const CardContainer = () => {

    const { error, loading } = useFetch()
    const { filteredPokemon } = usePokemonStore();
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);





    if (loading) {
        return <HomePageSkeleton />
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {
                filteredPokemon.map((pokemon: Pokemon, idx) => {
                    console.log(pokemon)
                    return <Link
                        href={`/pokemon/${pokemon.id}`}
                        key={nanoid()}
                    >

                        <PokemonCards
                            key={nanoid()}
                            pokemon={pokemon}
                            error={error as Error}
                            loading={loading}
                        />
                    </Link>



                })
            }


        </div>
    )
}

export default CardContainer