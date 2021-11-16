import React from "react";
import Profile from "./Profile";

import profile from "./Profile.module.css";

const ProfileContainer = () => {
    return (
        <div className={profile.wrapper}>
            <Profile />
        </div>
    )
}

export default ProfileContainer;