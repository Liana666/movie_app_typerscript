import React, { useState } from "react";
import { useDispatch } from "react-redux";

import favoriteCard from "./FavoriteCard.module.css";

import { removeFavoriteMoviesAC, removeRatedAC, removeVieweddAC } from "../../../../redux/reducers/profileReducer";

import cross from "../../../../img/cross2.png";
import eyeActive from "../../../../img/eyeactive.png";
import eye from "../../../../img/eye.png";
import star from "../../../../img/Star.png";
import starGr from "../../../../img/Star2.png";
import starActive from "../../../../img/Star 4.png";
import { FavoriteType, RatedType } from "../../../../types/type";


const FavoriteCard: React.FC<FavoriteType> = ({
    movie,
    addViewed,
    addRated,
    viewed,
    voteArray,
    rated,
    assessed
}) => {


    const [currentVote, setVote] = useState<number>(0);
    const dispatch = useDispatch();

    const moviesVoteandPath: RatedType = {
        vote: 0,
        img: ''

    };

    const removeMovie = () => {
        dispatch(removeFavoriteMoviesAC(movie));
        dispatch(removeVieweddAC(movie));
        dispatch(removeRatedAC(movie));
    }

    const addNewViewed = () => { addViewed(movie) }

    const changeVote = (addVote: number) => {
        moviesVoteandPath.img = movie;
        moviesVoteandPath.vote = addVote;
        addRated(moviesVoteandPath);
        setVote(addVote);
    }

    return (
        <div className={favoriteCard.item}>
            <img
                className={favoriteCard.img}
                src={movie}
                alt=""
            />
            <img onClick={removeMovie} className={favoriteCard.cross} src={cross} alt="" />

            <div onClick={addNewViewed} className={favoriteCard.box}>
                {viewed.includes(movie) ?
                    <img
                        className={favoriteCard.eye_icon}
                        src={eyeActive}
                        alt=""
                    />
                    : <img
                        className={favoriteCard.eye_icon}
                        src={eye}
                        alt=""
                    />
                }
            </div>

            <div className={favoriteCard.box2}>
                {voteArray.map((vote: number) => rated.length > 0 ?
                    assessed.includes(movie) && currentVote >= vote ?
                        <div className={favoriteCard.vote_wrapper}>
                            <img
                                className={favoriteCard.star_icon}
                                src={starActive}
                                onClick={() => changeVote(vote)}
                                alt=""
                            />
                            <span className={favoriteCard.star_vote}>{vote}/5</span>
                        </div>
                        : <div className={favoriteCard.vote_wrapper}>
                            <img
                                className={favoriteCard.star_icon}
                                src={star}
                                onClick={() => changeVote(vote)}
                                alt=""
                            />
                            <span className={favoriteCard.star_vote}>{vote}/5</span>
                        </div>

                    : <div className={favoriteCard.vote_wrapper}>
                        <img
                            className={favoriteCard.star_icon}
                            src={star}
                            onClick={() => changeVote(vote)}
                            alt=""
                        />
                        <span className={favoriteCard.star_vote}>{vote}/5</span>
                    </div>
                )}

                {assessed.includes(movie) ?
                    <img
                        src={starGr}
                        className={favoriteCard.active_change_icon}
                        alt=""
                    />
                    : null
                }
            </div>
        </div>
    )
}

export default FavoriteCard;

