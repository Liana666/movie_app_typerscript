import React from "react";

import profile from "./Profile.module.css";

import Sidebar from "./Sidebar/Sidebar";
import Movies from "./Movies/Movies";
import MoviesContainer from "./Movies/MoviesContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Profile = () => {
    return (
        <div className={profile.wrapper}>
            <div className={profile.container}>
                <SidebarContainer />
                <MoviesContainer />
            </div>
        </div>

    )
}


export default Profile;