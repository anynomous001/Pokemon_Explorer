'use client'

import { useParams } from 'next/navigation';
import { usePokemon } from '@/hooks/usePokemon'
import Image from 'next/image'
import PokemonDetailsSkeleton from './PokemonDetailsSkeleton';
import { capitalize } from 'lodash';



const PokemonDetailsPage = () => {


    const params = useParams()
    const id = params?.id

    const { pokemonDetails, loading } = usePokemon(id)

    console.log(pokemonDetails)



    if (loading) return <PokemonDetailsSkeleton />

    if (!pokemonDetails) return <p>No Pokémon data found</p>


    return (
        <div className='w-[80vw]  p-4'>
            <div className='flex flex-col items-center space-y-4'>
                <Image className='bg-neutral-500/30 rounded-md shadow-white shadow-sm w-[20rem] h-[20rem]' src={pokemonDetails?.image} alt="pokemon" width={250} height={250} />
                <h1 className='text-9xl font-bold'>{capitalize(pokemonDetails?.name)}</h1>

            </div>
            <div>

                <div className='space-y-4'>
                    <span className=' block text-4xl border-b-white-200/20'>Abilities</span>

                    <div className='grid grid-cols-2 gap-4'>

                        {
                            pokemonDetails?.abilities.map((ability, index) => (
                                <span key={index} className='shadow-[0_0_0_3px_#000000_inset] text-xl px-6 py-2 bg-transparent border border-white dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400'>{ability.ability.name}</span>
                            ))
                        }
                    </div>

                </div>
                <div className='space-y-4' >
                    <span className='text-4xl border-b-white-200/20'>Moves</span>


                    <div className='grid grid-cols-3  gap-4'>

                        {
                            pokemonDetails.moves.map((move, index) => (
                                <span key={index} className=' shadow-[0_0_0_3px_#000000_inset] text-xl px-6 py-2 bg-transparent border border-white dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400'>{move.move.name}</span>
                            ))
                        }
                    </div>
                </div>
                <div className='space-y-4' >
                    <span className='text-4xl border-b-white-200/20 '>Stats</span>
                    <div className="space-y-2">
                        {
                            pokemonDetails.stats.map((stat, index) => (
                                <div key={index} className='flex justify-between '>
                                    <span className='text-xl text-white '>{capitalize(stat.stat.name)}</span>
                                    <span className='shadow-[0_0_0_3px_#000000_inset] text-xl px-6 py-2 bg-transparent border border-white dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400'>{stat.base_stat}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <span className='text-4xl border-b-white-200/20'>Types</span>
                    <div className="space-x-4">
                        {
                            pokemonDetails.types.map((type, index) => (
                                <span key={index} className='shadow-[0_0_0_3px_#000000_inset] text-xl px-6 py-2 bg-transparent border border-white dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400'>{type.type.name}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>)
}

export default PokemonDetailsPage