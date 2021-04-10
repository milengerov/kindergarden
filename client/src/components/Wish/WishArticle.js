import {Link } from "react-router-dom"

import { useContext } from "react";
import { UserContext } from "../../userContext";

function WishArticle({
    wish
}) {

    const [user, setUser] = useContext(UserContext); 

    let [year, month, date]  = wish.date.split("T")[0].split("-");
    let createDate = `${date}.${month}.${year}`;

    const detailsLink = <Link to={`/wish/details/${wish._id}`} className="btn details-btn">Details</Link>;

    return (
        <article>
            <p>Желая да преместя {wish.firstName}, година на раждане {wish.born} от {wish.currentKindergarten} в {wish.desiredKindergarten}</p>
            <h3>{createDate}</h3>
            {user.hasOwnProperty("user") &&
            (detailsLink)
            }
            
        </article>
    )
}

export default WishArticle;