import React, { useEffect, useState } from "react";
import favoriteCard from "./FavoriteCard.module.css";

import cross from "../../../../img/cross2.png";
import eyeActive from "../../../../img/eyeactive.png";
import eye from "../../../../img/eye.png";
import star from "../../../../img/Star.png";
import starActive from "../../../../img/Star 4.png";
// import starVote from "../../../../img/Star4.png";

const FavoriteCard = (props) => {
    const [currentClass, setClass] = useState('box2');
    // const [isTrue, setTrue] = useState(false);
    const [currentVote, setVote] = useState(false);


    const moviesVoteandPath = {
        img: '',
        vote: ''
    };

    const addViewed = () => {
        props.addViewed(props.movie);
    }

    const changeClass = () => {
        setClass('box2_active');
        props.setIsTrue(true);
    }


    const changeVote = (vote) => {
        moviesVoteandPath.img = props.movie;
        moviesVoteandPath.vote = vote;
        props.addRated(moviesVoteandPath);
        setClass('box2');
        setVote(vote);
    }

    const changeVoteActive = (vote) => {
        moviesVoteandPath.img = props.movie;
        moviesVoteandPath.vote = vote;
        props.addRated(moviesVoteandPath);
        setClass('box2');
        setVote(vote);
        props.setIsTrue(false);
    }

    console.log(props.isTrue)


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

            <div className={currentClass}>

                {props.isTrue ?

                    props.vote.map(vote =>
                        props.rated.length > 0 ?
                            props.rated.map(rate => rate.img === props.movie && rate.vote >= vote ?
                                <img className={favoriteCard.star_icon} onClick={() => changeVote(vote)} src={starActive} />
                                : <img className={favoriteCard.star_icon} onClick={() => changeVoteActive(vote)} src={star} />
                            )
                            : <img className={favoriteCard.star_icon} onClick={() => changeVote(vote)} src={star} />
                    )

                    : <img className={favoriteCard.star_icon} onClick={changeClass} src={star} />
                }


            </div>

        </div>
    )
}

export default FavoriteCard;

