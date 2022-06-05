import React, { FC } from "react";

import filter from "./Filter.module.css";

import PagintationContainer from "../../../common/Pagination/PagintationContainer";

import { FilterType } from "../../../types/type";
import MovieCardContainer from "../../../common/MovieCard/MovieCardContainer";

const Filter: React.FC<FilterType> = ({
  changeGenre,
  currentPage,
  changeYear,
  genre,
  genres,
  year,
  popular,
  years,
  movies,
  totalPages,
  isAddPopular,
}) => {
  const changeGenreOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Добавляем в state выбранный жанр и делаем запрос на фильмы (при запросе указываем страницу и жанр)
    let optionGenres = +e.target.value;
    changeGenre(currentPage, optionGenres);
  };

  const changeYearOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Добавляем в state выбранный год и делаем запрос на фильмы (при запросе указываем страницу, жанр и год)
    let optionYears = +e.target.value;
    changeYear(currentPage, genre, optionYears);
  };

  return (
    <>
      <div className={filter.filterWrapper}>
        <select
          value={genre}
          onChange={changeGenreOption}
          style={{ marginLeft: 0 }}
          className={filter.select}
          name="genres"
          id=""
        >
          <option className={filter.option}>Все</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={changeYearOption}
          className={filter.select}
          name="years"
          id=""
        >
          <option className={filter.option}>Годы</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className="container_grid">
        {movies.length > 0 || isAddPopular ? (
          movies.map((m) => <MovieCardContainer key={m.id} {...m} />)
        ) : (
          <div>По вашему запросу ничего не найдено</div>
        )}
      </div>

      {movies.length > 0 && currentPage < totalPages ? (
        <PagintationContainer />
      ) : null}
    </>
  );
};

export default Filter;
