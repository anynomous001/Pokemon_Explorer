import { create } from 'zustand';
import { Pokemon } from '../components/card-container';




interface PokemonState {
    allPokemon: Pokemon[];
    setAllPokemon: (pokemon: Pokemon[]) => void;

    query: string;
    setQuery: (query: string) => void;

    filteredPokemon: Pokemon[];
    setFilteredPokemon: (pokemon: Pokemon[]) => void;
}

const usePokemonStore = create<PokemonState>((set) => ({
    allPokemon: [],
    setAllPokemon: (pokemon) => set({ allPokemon: pokemon }),

    query: '',
    setQuery: (query) => set({ query }),

    filteredPokemon: [],
    setFilteredPokemon: (pokemon) => set({ filteredPokemon: pokemon }),
}));

export default usePokemonStore;