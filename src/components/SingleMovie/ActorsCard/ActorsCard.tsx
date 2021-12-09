import React from "react";
import { ActorsCardType } from "../../../types/type";

import card from "./ActorsCard.module.css";

const ActorsCard: React.FC<ActorsCardType> = ({
    profile_path,
    name,
    character
}) => {

    const imgSrc = 'https://image.tmdb.org/t/p/original/';
    return (
        <>
            {profile_path ?
                <div className={card.card}>
                    <img className={card.img} src={imgSrc + profile_path} alt="" />
                    <div className={card.name}>{name}</div>
                    <div className={card.character}>{character}</div>
                </div>
                : null
            }
        </>
    )
}

export default ActorsCard;