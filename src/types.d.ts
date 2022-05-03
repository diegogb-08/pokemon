
interface ResultUrl {
  name: string,
  url: string
}

export interface PokemonList {
  count: number
  next: string | null
  previous: string | null
  results: ResultUrl[]
}

export interface PokemonListResult {
  results: Pokemon[]
  count: number
  next: string | null
  previous: string | null
}

export interface Pokemon {
  abilities: Abilitiy[]
  base_experience: number
  forms: ResultUrl[]
  game_indices: { game_index: number, version: ResultUrl }
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  past_types: Array
  species: ResultUrl
  sprites: Sprites
  stats: Stat[]
  types: PokemonType[]
  weight: number
}

interface Abilitiy {
  ability: ResultUrl
  is_hidden: boolean
  slot: number
}

interface Move {
  move: ResultUrl
  version_group_details: {
    level_learned_at: number
    move_learn_method: ResultUrl
    version_group: ResultUrl
  }
}

interface Sprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

interface Stat {
  base_stat: number
  effort: number
  stat: ResultUrl
}

interface PokemonType {
  slot: number
  type: ResultUrl
}