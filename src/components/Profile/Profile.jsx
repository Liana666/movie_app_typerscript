import React from "react";

import styled from "styled-components";
import profile from "./Profile.module.css";

import Sidebar from "./Sidebar/Sidebar";
import Movies from "./Movies/Movies";

const Profile = () => {
    return (
        <div className={profile.container}>
            <Sidebar />
            <Movies />
        </div>
    )
}

const ProfileWrapper = styled.div`
    display: flex;
`

export default Profile;