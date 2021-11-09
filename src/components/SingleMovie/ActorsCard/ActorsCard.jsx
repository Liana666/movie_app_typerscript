import React from "react";

import card from "./ActorsCard.module.css";

const ActorsCard = (props) => {
    const imgSrc = 'https://image.tmdb.org/t/p/original/';

    return (
        <>
            {props.profile_path ?
                <div className={card.card}>
                    <img className={card.img} src={imgSrc + props.profile_path} alt="" />
                    <div className={card.name}>{props.name}</div>
                    <div className={card.character}>{props.character}</div>
                </div>
                : null
            }

        </>
    )
}

export default ActorsCard;