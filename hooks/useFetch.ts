'use client'

import usePokemonStore from '@/app/store/pokemonState';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { AxiosError } from 'axios';

export const useFetch = () => {


    const { allPokemon, setAllPokemon, setFilteredPokemon } = usePokemonStore();
    const [error, setError] = useState<Error | null>(null);
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

    }, [setAllPokemon, setFilteredPokemon])

    return { allPokemon, error, loading }

}