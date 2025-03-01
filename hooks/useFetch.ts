'use client'

import usePokemonStore from '@/app/store/pokemonState';
import axios from 'axios'
import { useState, useEffect } from 'react'

export const useFetch = () => {


    const { allPokemon, setAllPokemon, setFilteredPokemon, filteredPokemon } = usePokemonStore();
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`)

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


                setFilteredPokemon(pokemonDetails)
                setAllPokemon(pokemonDetails)
                setLoading(false)

                console.log(pokemonDetails)



            } catch (error) {
                console.log(error)
                setError(error)
                setLoading(false)
            }
        }

        fetchData()

    }, [setAllPokemon, setFilteredPokemon])

    return { allPokemon, error, loading }

}