'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import PokemonCardSkeleton from "./pokemon-cards-skeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PokemonCardsProps {
    pokemon: any,
    error: any,
    loading: any
}

const PokemonCards = ({ pokemon, error, loading }: PokemonCardsProps) => {




    return (
        <Link href={`/pokemon/${pokemon.id}`}>

            <div className={cn(
                "bg-gray-400/25 cursor-pointer z-20 h-96 rounded-md shadow-xl  max-w-sm mx-auto  flex flex-col justify-between p-4 hover:shadow-2xl hover:bg-gray-500 transition duration-300 ease-in-out",
            )}
            >
                <Image
                    src={pokemon.image}
                    alt="Pokemon"
                    width={180}
                    height={40}
                    className="rounded-md mx-auto"
                />

                <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {pokemon.name}
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-20 my-4">
                        Card with Author avatar, complete name and time to read - most
                        suitable for blogs.
                    </p>
                </div>
            </div>
        </Link>

    )
}

export default PokemonCards