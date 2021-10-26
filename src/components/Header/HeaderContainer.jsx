import React from "react";

import Header from "./Header";

const mapStatetoProps = (state) => {
    return {
        moviesName: state.HeaderPage.moviesName
    }
}


const HeaderContainer = connect(mapStatetoProps, mapDispatchtoProps)(Header);




export default HeaderContainer;