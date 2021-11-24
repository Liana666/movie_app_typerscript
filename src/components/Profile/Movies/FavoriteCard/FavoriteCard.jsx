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

const FavoriteCard = (props) => {
    const [currentVote, setVote] = useState(false);
    const dispatch = useDispatch();

    const moviesVoteandPath = {
        img: '',
        vote: ''
    };

    const removeMovie = (e) => {
        dispatch(removeFavoriteMoviesAC(props.movie));
    }

    const addViewed = () => { props.addViewed(props.movie) }

    const changeVote = (vote) => {
        moviesVoteandPath.img = props.movie;
        moviesVoteandPath.vote = vote;
        props.addRated(moviesVoteandPath);
        setVote(vote);
    }

    return (
        <div className={favoriteCard.item}>
            <img className={favoriteCard.img} src={props.movie} />
            <img onClick={removeMovie} className={favoriteCard.cross} src={cross} alt="" />

            <div onClick={addViewed} className={favoriteCard.box}>
                {props.viewed.includes(props.movie) ?
                    <img className={favoriteCard.eye_icon} src={eyeActive} />
                    : <img className={favoriteCard.eye_icon} src={eye} />
                }
            </div>

            <div className={favoriteCard.box2}>
                {props.vote.map(vote => props.rated.length > 0 ?
                    props.assessed.includes(props.movie) && currentVote >= vote ?
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

                {props.assessed.includes(props.movie) ?
                    <img src={starGr} className={favoriteCard.active_change_icon} />
                    : null
                }
            </div>
        </div>
    )
}

export default FavoriteCard;

