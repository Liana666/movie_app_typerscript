import React from "react";

import sidebar from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
   return (
      <div className={sidebar.wrapper}>
         <Link to="/profile/all-movies">
            <div className={sidebar.item}>
               все фильмы
               <span>{props.favoriteMovies.length}</span>
            </div>
         </Link>

         <Link to="/profile/viewed-movies">
            <div className={sidebar.item}>
               посмотренно
               <span>{props.viewed.length}</span>
            </div>
         </Link>
         <Link to="/profile/viewed-movies">
            <div className={sidebar.item}>
               ждет оценки
               <span>{props.viewed.length}</span>
            </div>
         </Link>
         <Link to="/profile/assessed-movies">
            <div className={sidebar.item}>
               с оценкой
               <span>{props.assessed.length}</span>
            </div>
         </Link>
      </div>

   )
}

export default Sidebar;