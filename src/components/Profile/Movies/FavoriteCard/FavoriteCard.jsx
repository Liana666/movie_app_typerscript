import React, { useState } from "react";
import { useDispatch } from "react-redux";

import favoriteCard from "./FavoriteCard.module.css";

import { removeFavoriteMoviesAC } from "../../../../redux/reducers/profileReducer";

import cross from "../../../../img/cross2.png";
import eyeActive from "../../../../img/eyeactive.png";
import eye from "../../../../img/eye.png";
import star from "../../../../img/Star.png";
import starGr from "../../../../img/Star2.png";
import starActive from "../../../../img/Star 4.png";

const FavoriteCard = ({ movie, addViewed, addRated, viewed, vote, rated, assessed }) => {
    const [currentVote, setVote] = useState(false);
    const dispatch = useDispatch();

    const moviesVoteandPath = {
        img: '',
        vote: ''
    };

    const removeMovie = (e) => {
        dispatch(removeFavoriteMoviesAC(movie));
    }

    const addNewViewed = () => { addViewed(movie) }

    const changeVote = (vote) => {
        moviesVoteandPath.img = movie;
        moviesVoteandPath.vote = vote;
        addRated(moviesVoteandPath);
        setVote(vote);
    }

    return (
        <div className={favoriteCard.item}>
            <img className={favoriteCard.img} src={movie} />
            <img onClick={removeMovie} className={favoriteCard.cross} src={cross} alt="" />

            <div onClick={addNewViewed} className={favoriteCard.box}>
                {viewed.includes(movie) ?
                    <img className={favoriteCard.eye_icon} src={eyeActive} />
                    : <img className={favoriteCard.eye_icon} src={eye} />
                }
            </div>

            <div className={favoriteCard.box2}>
                {vote.map(vote => rated.length > 0 ?
                    assessed.includes(movie) && currentVote >= vote ?
                        <div className={favoriteCard.vote_wrapper}>
                            <img className={favoriteCard.star_icon} src={starActive} onClick={() => changeVote(vote)} />
                            <span className={favoriteCard.star_vote}>{vote}/5</span>
                        </div>
                        : <div className={favoriteCard.vote_wrapper}>
                            <img className={favoriteCard.star_icon} src={star} onClick={() => changeVote(vote)} />
                            <span className={favoriteCard.star_vote}>{vote}/5</span>
                        </div>

                    : <div className={favoriteCard.vote_wrapper}>
                        <img className={favoriteCard.star_icon} src={star} onClick={() => changeVote(vote)} />
                        <span className={favoriteCard.star_vote}>{vote}/5</span>
                    </div>
                )}

                {assessed.includes(movie) ?
                    <img src={starGr} className={favoriteCard.active_change_icon} />
                    : null
                }
            </div>
        </div>
    )
}

export default FavoriteCard;

