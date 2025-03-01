'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { types } from "util"

export const usePokemon = (id: string | string[] | undefined) => {
    const [pokemonDetails, setPokemonDetails] = useState({})
    const [error, setError] = useState({})
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
                console.log(error)
                setLoading(false)
                setError(error)
            }

        }



        fetchData()

    }, [])





    return { pokemonDetails, error, loading }

}

