import React, { useState } from "react";
import favoriteCard from "./FavoriteCard.module.css";

import cross from "../../../../img/cross2.png";
import eyeActive from "../../../../img/eyeactive.png";
import eye from "../../../../img/eye.png";
import star from "../../../../img/Star.png";
import starActive from "../../../../img/Star 4.png";
// import starVote from "../../../../img/Star4.png";

const FavoriteCard = (props) => {

    const moviesVoteandPath = {
        img: '',
        vote: ''
    };

    const addViewed = () => {
        props.addViewed(props.movie);
    }

    const changeVote = (vote) => {
        moviesVoteandPath.img = props.movie;
        moviesVoteandPath.vote = vote;
        props.addRated(moviesVoteandPath);
    }

    console.log(props.currentVote)


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
                {/* {props.vote.map(vote => {
                    <div className={favoriteCard.vote}>

                        {props.rated.length > 0 ?

                            props.currentVote.map(current => {

                                props.assessed.includes(props.movie) && current >= vote ?
                                    <img className={favoriteCard.star_icon} onClick={() => changeVote(vote)} src={starActive} />
                                    : <img className={favoriteCard.star_icon} onClick={() => changeVote(vote)} src={star} />

                            })

                            : <img className={favoriteCard.star_icon} onClick={() => changeVote(vote)} src={star} />
                        }
                        <span className={favoriteCard.star_vote}>{vote}/5</span>
                    </div>
                })
                } */}

                {props.vote.map(vote => <div className={favoriteCard.vote}>
                    {props.rated.length > 0 ?

                        props.assessed.includes(props.movie) ?
                            <img className={favoriteCard.star_icon} onClick={() => changeVote(vote)} src={starActive} />
                            : <img className={favoriteCard.star_icon} onClick={() => changeVote(vote)} src={star} />
                        : <img className={favoriteCard.star_icon} onClick={() => changeVote(vote)} src={star} />
                    }
                    <span className={favoriteCard.star_vote}>{vote}/5</span>
                </div>
                )}

            </div>


        </div>
    )
}

export default FavoriteCard;

