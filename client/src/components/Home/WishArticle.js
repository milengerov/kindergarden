function WishArticle({
    wish
}) {

    let [year, month, date]  = wish.date.split("T")[0].split("-");
    let createDate = `${date}.${month}.${year}`;
    return (
        <article>
            <p>Желая да преместя {wish.firstName}, роден {wish.born} от {wish.currentKindergarten} в {wish.desiredKindergarten}</p>
            <h3>{createDate}</h3>
            <a href="#" class="btn details-btn">Details</a>
        </article>
    )
}

export default WishArticle;