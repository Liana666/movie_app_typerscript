import React from "react";
import { connect } from "react-redux";

import Pagination from "./Pagination";
import { getTotalPagesAC, getNewPageAC } from "../../../redux/reducers/paginationReducer";

const mapStatetoProps = (state) => {
   return {
      totalPages: state.PaginationPage.totalPages,
      currentPage: state.PaginationPage.currentPage
   }

}

const mapDispatchtoProps = (dispatch) => {
   return {
      // setToTalPages: (totalPages) => {
      //    dispatch(getTotalPagesAC(totalPages));
      // },

      setCurrentPage: (currentPage) => {
         dispatch(getNewPageAC(currentPage));
      }
   }

}


const PaginationContainer = connect(mapStatetoProps, mapDispatchtoProps)(Pagination);


export default PaginationContainer;