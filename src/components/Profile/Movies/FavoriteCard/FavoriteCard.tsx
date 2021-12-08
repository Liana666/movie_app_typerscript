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
import { FavoriteType, RatedType } from "../../../../types/type";

const FavoriteCard: React.FC<FavoriteType> = ({
    favoriteMovie,
    viewedMovie,
    assessedMovie,
    addViewed,
    addRated,
    viewed,
    vote,
    rated,
    assessed
}) => {


    const [currentVote, setVote] = useState<number>(0);
    const dispatch = useDispatch();

    const moviesVoteandPath: RatedType = {
        img: '',
        vote: 0
    };

    const removeMovie = () => {
        dispatch(removeFavoriteMoviesAC(favoriteMovie));
    }

    const addNewViewed = () => { addViewed(viewedMovie) }

    const changeVote = (addVote: number) => {
        moviesVoteandPath.img = favoriteMovie;
        moviesVoteandPath.vote = viewedMovie;
        addRated(moviesVoteandPath);
        setVote(addVote);
    }

    return (
        <div className={favoriteCard.item}>
            <img
                className={favoriteCard.img}
                src={favoriteMovie}
                alt=""
            />
            <img onClick={removeMovie} className={favoriteCard.cross} src={cross} alt="" />

            <div onClick={addNewViewed} className={favoriteCard.box}>
                {viewed.includes(viewedMovie) ?
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
                {vote.map(vote => rated.length > 0 ?
                    assessed.includes(favoriteMovie) && currentVote >= vote ?
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

                {assessed.includes(favoriteMovie) ?
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

