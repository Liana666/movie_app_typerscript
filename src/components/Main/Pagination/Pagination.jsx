import React from "react";

import { searchMovies } from "../../../api/api";

const Pagination = (props) => {
   let pages = [];
   let pageNumber = props.totalPages;
   let name = props.name;

   searchMovies(name, props.currentPage)
      .then(response => {
         let totalPages = response.data.total_pages;
         props.setToTalPages(totalPages);
      });

   for (let i = 1; i <= pageNumber; i++) {
      pages.push(i);
   }


   const onChangePage = (e) => {
      let currentPage = e.target.innerHTML;

      props.setCurrentPage(currentPage);
   }

   return (
      <>
         {pages.map(p => <span onClick={onChangePage}>{p}</span>)}
      </>
   )
}


export default Pagination;