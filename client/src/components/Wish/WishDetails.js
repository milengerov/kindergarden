import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./WishDetails.css";

import * as wishService from "../../services/wishService";
import * as authService from "../../services/authService";



function WishDetails({
    match
}) {

    const wishId = match.params.wishId;

    const [currentWish, setCurrentWish] = useState({});
    const [style, setStyle] = useState({ display: "none" });
    const [creator, setCreator] = useState({})

    useEffect(() => {
        wishService.getOne(wishId)
            .then(res => res.json())
            .then(wish => {
                console.log(wish);
                setCurrentWish(wish);
                authService.getUser(wish.creator)
                    .then(res => res.json())
                    .then(user => {
                        console.log(user);
                        setCreator(user)
                    })

            })
    }, []);

    // useEffect(() => {
    //     console.log(currentWish);
    //     authService.getUser(currentWish._id)
    //     .then(res => res.json())
    //     .then(user => {
    //         console.log(user);
    //         setCreator(user)
    //     })
    // }, [currentWish])


    function onClickHandler(e) {
        style.display == "block" ? setStyle({ display: "none" }) : setStyle({ display: "block" });
    }


    return (
        <div className="container details">
            <div className="details-content">

                <p>Желая да преместя {currentWish.firstName}, роден {currentWish.born} от {currentWish.currentKindergarten} в {currentWish.desiredKindergarten}</p>
                <div className="buttons">
                    <Link to="#" className="btn delete">Delete</Link>
                    <Link to="#" className="btn edit">Edit</Link>
                    <Link to="#" className="btn edit" onClick={onClickHandler}>Contact</Link>

                    <h2 style={style}>{creator.email}</h2>

                </div>
            </div>
        </div>
    )
}


export default WishDetails