'use client'

import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

interface PokemonDetailsType {
    name: string,
    id: number,
    image: string,
    abilities: any[],
    moves: any[],
    stats: any[],
    types: any[]
}



export const usePokemon = (id: string | string[] | undefined) => {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsType | null>(null)
    const [error, setError] = useState<null | Error>(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${id}`)
                setPokemonDetails(response?.data)

                const details = {
                    name: response.data.name,
                    id: response.data.id,
                    image: response.data.sprites.front_default,
                    abilities: response.data.abilities,
                    moves: response.data.moves,
                    stats: response.data.stats,
                    types: response.data.types
                };

                setPokemonDetails(details);
                setLoading(false)

            } catch (error) {
                if (error instanceof AxiosError) {
                    console.error("Network error:", error.message);
                    setError(error);
                } else if (error instanceof TypeError) {
                    console.error("Type error:", error.message);
                    setError(error);
                } else {
                    console.error("Unexpected error:", error);
                    setError(error as Error);
                }
                setLoading(false)
            }

        }



        fetchData()

    }, [])





    return { pokemonDetails, error, loading }

}

