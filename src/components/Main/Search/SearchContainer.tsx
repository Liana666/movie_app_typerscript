import React, { FC } from "react";

import { connect } from "react-redux";

import Search from "./Search";
import {
  getNewMovieAC,
  searchMoviesThunk,
} from "../../../redux/reducers/mainReducer";
import { MovieType } from "../../../types/type";
import { AppStateType } from "../../../redux/store";
import { compose } from "redux";

type PropsType = MapDispatchPropsType & MapStatePropsType;

const SearchContainer: FC<PropsType> = ({
  searchMovie,
  addMovie,
  moviesName,
  currentPage,
}) => {
  return (
    <>
      <Search
        searchMovie={searchMovie}
        addMovie={addMovie}
        moviesName={moviesName}
        currentPage={currentPage}
      />
    </>
  );
};

type MapStatePropsType = {
  currentPage: number;
  movies: Array<MovieType>;
  moviesName: string;
};

type MapDispatchPropsType = {
  searchMovie: (moviesName: string) => void;
  addMovie: (moviesName: string, currentPage: number) => void;
};

const mapStatetoProps = (state: AppStateType): MapStatePropsType => {
  return {
    currentPage: state.MainPage.currentPage,
    movies: state.MainPage.movies,
    moviesName: state.MainPage.moviesName,
  };
};

export default compose<React.ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(
    mapStatetoProps,
    { searchMovie: getNewMovieAC, addMovie: searchMoviesThunk }
  )
)(SearchContainer);
