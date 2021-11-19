import React from "react";
import favoriteCard from "./FavoriteCard.module.css";

import cross from "../../../../img/cross2.png";
import eyeActive from "../../../../img/eyeactive.png";
import eye from "../../../../img/eye.png";
import star from "../../../../img/Star.png";
import starActive from "../../../../img/Star2.png";
import starVote from "../../../../img/Star3.png";

const FavoriteCard = (props) => {

    const addViewed = () => {
        props.addViewed(props.movie)
    }

    const changeVote = (vote) => {
        props.addRated(props.movie, vote)
    }


    return (
        <div className={favoriteCard.item}>
            <img className={favoriteCard.img} src={props.movie} />

            <img className={favoriteCard.cross} src={cross} alt="" />

            <div onClick={addViewed} className={favoriteCard.box}>
                {props.viewed.includes(props.movie) ?
                    <img className={favoriteCard.eye_icon} src={eyeActive} />
                    : <img className={favoriteCard.eye_icon} src={eye} />
                }
            </div>

            <div className={favoriteCard.box2}>
                <img className={favoriteCard.star_icon} src={star} />
                <div className={favoriteCard.vote_wrapper}>
                    {props.vote.map(vote => <img onClick={() => changeVote(vote)} src={starVote} key={vote} />)}
                </div>
            </div>

        </div>
    )
}

export default FavoriteCard;