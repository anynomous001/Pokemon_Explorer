import Link from 'next/link'
import React from 'react'
import SearchBar from '@/app/components/searchbar'

const Navbar = () => {
    return (
        <nav className="  w-full text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
                <Link href="/pokemon">
                    <h1 className='font-bold text-3xl'>Pokedex</h1>
                </Link>
            </div>
            <SearchBar />
        </nav>
    )
}

export default Navbar