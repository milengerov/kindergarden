import { useState, useEffect } from "react";

import "./Home.css";
import WishArticle from "../Wish/WishArticle";
import * as wishService from "../../services/wishService"






function Home() {

    const [wishes, setWishes] = useState([]);

    useEffect(() => {

        wishService.getAll()
            .then(res => res.json())
            .then(returnedWishes => setWishes(returnedWishes))
    }, []);

    let result = <p>Няма заявени желания</p>;

    if(wishes.length > 0) {
        result = wishes.map(x => <WishArticle key={x._id} wish={x}></WishArticle>);
    }



    return (
        <div class="content">
            <section class="wishes">

                <div class="articles">
                    {result}

                </div>
            </section>

        </div>
    );
}

export default Home;