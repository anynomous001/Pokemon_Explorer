'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { capitalize } from "lodash";




interface PokemonCardsProps {
    pokemon: {
        name: string,
        id: number,
        image: string
    },
    error: Error,
    loading: boolean
}

const PokemonCards = ({ pokemon }: PokemonCardsProps) => {




    return (
        <Link href={`/pokemon/${pokemon.id}`}>

            <div className={cn(
                "flex flex-col items-center space-y-10 bg-gray-400/25 cursor-pointer z-20 h-96 rounded-md shadow-xl  max-w-sm mx-auto   p-4 hover:shadow-2xl hover:bg-gray-500 transition duration-300 ease-in-out",
            )}
            >


                <Image
                    className=''
                    src={pokemon.image}
                    alt="pokemon"
                    width={150}
                    height={150}
                />


                <div className="text content ">
                    <h1 className="font-bold  text-4xl md:text-4xl text-neutral-100/70 relative z-10">
                        {capitalize(pokemon.name)}
                    </h1>
                    {/* <p className="font-normal text-sm text-gray-50 relative z-20 my-4">
                        Card with Author avatar, complete name and time to read - most
                        suitable for blogs.
                    </p> */}
                </div>
            </div>
        </Link>

    )
}

export default PokemonCards