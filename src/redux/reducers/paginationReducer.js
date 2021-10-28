let initialState = {
   currentPage: 1
}

const paginationReducer = (state = initialState, action) => {

   if (action.type === 'GET_TOTAL_PAGES') {
      state.totalPages = action.totalPages;

      let newState = { ...state };
      newState.totalPages = state.totalPages;

      return newState;
   }

   // else if (action.type === 'GET_CURRENT_PAGE') {
   //    state.currentPage = action.currentPage;

   //    let newState = { ...state };
   //    newState.currentPage = state.currentPage;

   //    return newState;
   // }


   return state;


}


export const getNewPageAC = (currentPage) => ({ type: 'GET_CURRENT_PAGE', currentPage });

export default paginationReducer;