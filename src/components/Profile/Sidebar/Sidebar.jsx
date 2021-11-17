import React from "react";

import sidebar from "./Sidebar.module.css";

const Sidebar = (props) => {
   return (
      <div className={sidebar.wrapper}>
         <div className={sidebar.item}>
            все фильмы
            <span>{props.favoriteMovies.length}</span>
         </div>
         <div className={sidebar.item}>
            хочу посмотреть
            <span>2</span>
         </div>
         <div className={sidebar.item}>
            посмотренно
            <span>2</span>
         </div>
         <div className={sidebar.item}>
            ждет оценки
            <span>2</span>
         </div>
         <div className={sidebar.item}>
            с оценкой
            <span>2</span>
         </div>
      </div>

   )
}

export default Sidebar;