import { create } from 'zustand';

type PokemonStore = {
    query: string;
    setQuery: (query: string) => void;
    pokemon: [];
    setPokemon: (pokemon: object | null) => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
    query: '',
    setQuery: (query) => set({ query }),
    pokemon: null,
    setPokemon: (pokemon) => set({ pokemon }),
}));
