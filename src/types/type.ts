
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

export type PaginationType = {
    getNeewMoviesPage: (moviesName: string, currentPage: number, genre: number, year: number) => void
    moviesName: string
    currentPage: number
    genre: number
    year: number
}


export interface MovieProp {
    [key: string]: any;
}

export interface MoviePropNumber {
    [key: number]: any | string
}

export interface MovieProp2 {
    [key: number]: string;
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
    popular: Array<MovieType>
    totalPages: number
    isAddPopular: boolean
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

export type SingleMovieType = {
    title: string
    back: string
    poster: string
    vote_average: number
    overview: string
    id: number
    release_date: number
    single_genres: Array<string>
    key_video: any
    actors: Array<ActorsType>
    crew: Array<CrewType>
}

export type ActorsCardType = {
    profile_path: string
    name: string
    character: string
}

export type VideoType = {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string

}

/***********************TYPE RESPONSE************************/
// type resultType = {
//     adult: boolean
//     backdrop_path: string
//     genre_ids: Array<number>
//     id: number
//     original_language: string
//     original_title: string
//     overview: string
//     popularity: number
//     poster_path: string
//     release_date: number
//     title: string
//     video: boolean
//     vote_average: number
//     vote_count: number
// }

export type filterGenresMoviesType = {
    page: number
    results: Array<MovieType>
    total_pages: number
    total_results: number
}

export type getGenresType = {
    genres: Array<GenreType>
}

export type getCastType = {
    id: number
    cast: Array<ActorsType>
    crew: Array<CrewType>
}