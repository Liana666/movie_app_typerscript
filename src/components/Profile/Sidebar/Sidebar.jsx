import React from "react";

import sidebar from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = ({ favoriteMovies, viewed, assessed }) => {
   return (
      <div className={sidebar.wrapper}>
         <Link to="/profile/all-movies">
            <div className={sidebar.item}>
               все фильмы
               <span>{favoriteMovies.length}</span>
            </div>
         </Link>

         <Link to="/profile/viewed-movies">
            <div className={sidebar.item}>
               посмотренно
               <span>{viewed.length}</span>
            </div>
         </Link>
         <Link to="/profile/viewed-movies">
            <div className={sidebar.item}>
               ждет оценки
               <span>{viewed.length}</span>
            </div>
         </Link>
         <Link to="/profile/assessed-movies">
            <div className={sidebar.item}>
               с оценкой
               <span>{assessed.length}</span>
            </div>
         </Link>
      </div>

   )
}

export default Sidebar;