'use client'

import Link from 'next/link'
import React from 'react'
import SearchBar from '@/app/components/searchbar'
import usePokemonStore from '../store/pokemonState'

const Navbar = () => {

    const { allPokemon, setFilteredPokemon } = usePokemonStore()

    const handleClick = () => {
        setFilteredPokemon(allPokemon)
    }

    return (
        <nav className="  w-full text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
                <Link onClick={handleClick} href="/pokemon">
                    <h1 className='font-bold text-3xl'>Pokedex</h1>
                </Link>
            </div>
            <SearchBar />
        </nav>
    )
}

export default Navbar