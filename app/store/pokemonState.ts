import { create } from 'zustand';

interface PokemonState {
    allPokemon: any[];
    setAllPokemon: (pokemon: any[]) => void;

    query: string;
    setQuery: (query: string) => void;

    filteredPokemon: any[];
    setFilteredPokemon: (pokemon: any[]) => void;
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