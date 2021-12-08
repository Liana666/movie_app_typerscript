
export type GenreType = {
    id: number
    name: string
}

export type MovieType = {
    title: string
    overview: string
    poster_path: string
    release_date: number
    vote_average: number
    genre_ids: Array<GenreType>
    adult: boolean
    backdrop_path: string
    id: number
    video?: string
    [key: string]: any;
}


export interface MovieProp {
    [key: string]: any;
}

export interface MoviePropNumber {
    [key: number]: any | string
}

export interface MovieProp2 {
    [key: number]: number;
}

export type RatedType = {
    vote: number
    img: string
}

export type ActorsType = {
    name: string
    id: number
    profile_path: string
    character: string
}

export type CrewType = {
    id: number
    job: string
    name: string
}


export type FilterType = {
    changeGenre: (page: any, genre: number, year?: number) => void
    changeYear: (page: number, genre: number, year: number) => void
    currentPage: number

    genre: number
    genres: Array<GenreType>
    year: number
    years: Array<number>
    movies: Array<MovieType>
    totalPages: number
}

export type PopularType = {
    popular: Array<MovieType>
    genre: number
    year: number
    moviesName: string
    totalPages: number
    currentPagePopular: number
    changePage: (page: number) => void
}

export type SearchType = {
    searchMovie: (moviesName: string) => void
    addMovie: (moviesName: string, currentPage: number) => void
    moviesName: string
    currentPage: number
}

export type FavoriteType = {
    movie: string
    voteArray: Array<number>
    viewed: Array<string>
    rated: Array<RatedType>
    assessed: Array<string>
    addViewed: (currentViewed: string) => void
    addRated: (currentRated: RatedType) => void
}


export type MoviesType = {
    favoriteMovies: Array<string>
    viewedMovies: Array<string>
    assessedMovies: Array<string>
}