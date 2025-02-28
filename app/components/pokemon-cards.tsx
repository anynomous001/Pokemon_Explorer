'use client'

import { Card, CardDescription, CardSkeletonContainer, CardTitle, Skeleton } from "@/components/cards-demo-3";
import { useFetch } from "@/hooks/useFetch";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PokemonCardSkeleton from "./pokemon-cards-skeleton";

interface PokemonCardsProps {
    pokemon: any,
    error: any,
    loading: any
}

const PokemonCards = ({ pokemon, error, loading }: PokemonCardsProps) => {


    if (loading) return <PokemonCardSkeleton />

    return (
        <div className="">
            <div
                className={cn(
                    "bg-gray-400/25 cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-url(pokemon.image) bg-cover"
                )}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

                <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {pokemon.name}
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        Card with Author avatar, complete name and time to read - most
                        suitable for blogs.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default PokemonCards