import React from "react";

import profile from "./Profile.module.css";
import back from "../../img/profile.png";

import Sidebar from "./Sidebar/Sidebar";
import Movies from "./Movies/Movies";
import MoviesContainer from "./Movies/MoviesContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Profile = () => {
    return (
        <div className={profile.wrapper}>
            <img src={back} className={profile.back} />
            <div className={profile.container}>
                <SidebarContainer />
                <MoviesContainer />
            </div>
        </div>

    )
}


export default Profile;