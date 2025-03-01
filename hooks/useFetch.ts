'use client'

import axios from 'axios'
import { useState, useEffect } from 'react'

export const useFetch = () => {

    const [pokemon, setPokemon] = useState([])
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`)
                // console.log(response?.data)
                // setPokemon(response?.data)


                const pokemonDetails: any[] = await Promise.all(
                    response?.data.results.map(async (pokemon: any) => {
                        const res = await axios.get(pokemon.url);
                        const details = res.data;
                        return {
                            name: details.name,
                            id: details.id,
                            image: details.sprites.front_default
                        };
                    })
                );


                setPokemon(pokemonDetails)
                setLoading(false)

                console.log(pokemonDetails)



            } catch (error) {
                console.log(error)
                setError(error)
                setLoading(false)
            }
        }

        fetchData()

    }, [])

    return { pokemon, error, loading }

}