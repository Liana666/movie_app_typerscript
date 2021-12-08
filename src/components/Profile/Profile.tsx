import React, { FC } from "react";

import profile from "./Profile.module.css";
import back from "../../img/profile.png";

import MoviesContainer from "./Movies/MoviesContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";

type ProfileType = {}

const Profile: FC<ProfileType> = () => {
    return (
        <div className={profile.wrapper}>
            <img
                src={back}
                className={profile.back}
                alt=""
            />
            <div className={profile.container}>
                <SidebarContainer />
                <MoviesContainer />
            </div>
        </div>

    )
}


export default Profile;