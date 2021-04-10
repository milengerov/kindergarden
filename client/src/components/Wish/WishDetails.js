import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../userContext";
import { Link } from "react-router-dom";

import "./WishDetails.css";

import * as wishService from "../../services/wishService";
import * as authService from "../../services/authService";



function WishDetails({
    match,
    history
}) {

    const wishId = match.params.wishId;
    // console.log(wishId);

    const [currentWish, setCurrentWish] = useState({});
    const [style, setStyle] = useState({ display: "none" });
    const [creator, setCreator] = useState({})

    const [user, setUser] = useContext(UserContext);
    // console.log("user ++++>", user);

    const isOwnWish = user._id == creator._id;

    useEffect(() => {
        wishService.getOne(wishId)
            .then(res => res.json())
            .then(wish => {
                console.log(wish);
                setCurrentWish(wish);
                authService.getUser(wish.creator)
                    .then(res => res.json())
                    .then(creator => {
                        // console.log("creator ++>>", creator);
                        setCreator(creator)
                    })

            })
    }, []);


    function onClickHandler(e) {
        style.display == "block" ? setStyle({ display: "none" }) : setStyle({ display: "block" });
    }

    function onDeleteHandler(e) {
        wishService.deleteOne(wishId)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                history.push("/");
            })
            .catch(err => console.log(err.message));
    }


    return (
        <div className="container details">
            <div className="details-content">

                <p>Желая да преместя {currentWish.firstName}, година на раждане - {currentWish.born} от район {currentWish.currentRegion}, {currentWish.currentKindergarten} в район {currentWish.desiredRegion}, {currentWish.desiredKindergarten}.</p>
                <div className="buttons">
                    {isOwnWish
                        ? <div>
                            <Link to="#" className="btn delete" onClick={onDeleteHandler}>Delete</Link>
                            <Link to={`/wish/details/${wishId}/edit`} className="btn edit">Edit</Link>
                        </div>
                        : <Link to="#" className="btn edit" onClick={onClickHandler}>Contact</Link>
                    }



                    <h2 style={style}>{creator.email}</h2>

                </div>
            </div>
        </div>
    )
}


export default WishDetails