import React from 'react'

const PokemonCardSkeleton = () => {
    return (
        <div>
            <div className="bg-gray-200 rounded-lg p-4">
                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto"></div>
                <div className="w-32 h-4 bg-gray-300 rounded mx-auto mt-4"></div>
                <div className="w-20 h-4 bg-gray-300 rounded mx-auto mt-2"></div>
            </div>
        </div>
    )
}

export default PokemonCardSkeleton