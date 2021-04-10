import { useState, useEffect } from "react";

import { WishesContext } from "../../wishesContext";
import { useContext } from "react";
import { Route } from "react-router";

import "./Home.css";
import WishArticle from "../Wish/WishArticle";
import * as wishService from "../../services/wishService"

const regions = [
    "Банкя",
    "Витоша",
    "Връбница",
    "Възраждане",
    "Изгрев",
    "Илинден",
    "Искър",
    "Красна поляна",
    "Красно село",
    "Кремиковци",
    "Лозенец",
    "Люлин",
    "Младост",
    "Надежда",
    "Нови Искър",
    "Оборище",
    "Овча Купел",
    "Панчарево",
    "Подуяне",
    "Сердика",
    "Слатина",
    "Средец",
    "Студентски",
    "Триадица",
];



function Home() {

    const [region, setRegion] = useState({ value: "" });
    const [kindergartens, setKindergartens] = useState([]);
    const [kindergarten, setKindergarten] = useState("");
    const [born, setBorn] = useState("")
    const [options, setOptions] = useState({})


    const [wishes, setWishes] = useContext(WishesContext);
    console.log(wishes);

    // const [wishes, setWishes] = useState([]);

    useEffect(() => {

        wishService.getAll()
            .then(res => res.json())
            .then(returnedWishes => setWishes(returnedWishes.reverse()))
    }, []);


    let result = <p>Няма заявени желания</p>;

    if (wishes.length > 0) {
        result = wishes.map(x => <WishArticle key={x._id} wish={x}></WishArticle>);
    }



    useEffect(() => {
        console.log("useEffect");
        if (!region.value) { return }

        fetch(`http://localhost:5002/api/kindergartens/${region.value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            credentials: "include",
            // withCredentials: true
        })
            .then(res => res.json())
            .then(kindergartens => setKindergartens(kindergartens))
    }, [region]);




    function onChangeCurrentRegionHandler(e) {
        console.log(e.target.value);
        setRegion({ value: e.target.value });
    }
    function onChangeCurrentKindergrtenHandler(e) {
        setKindergarten(e.target.value);
    }
    function onChangeBorn(e) {
        setBorn(e.target.value);
    }

    function onSearchSubmit(e) {
        e.preventDefault();
        // console.log(region.value, kindergarten, born);
        // const searchedKindergarten = kindergarten;
        // const searchedBorn = born;


        wishService.getMany(kindergarten, born)
            .then(res => res.json())
            .then(returnedWishes => setWishes(returnedWishes))


        // let filteredWishes = wishes.filter(w => (w.desiredKindergarten === kindergarten && w.born === born));
        // console.log(filteredWishes);
        // setWishes(filteredWishes);
        
    }



    return (

        <div className="content">

            <form onSubmit={onSearchSubmit}>
                <fieldset>
                    <legend>Search</legend>

                    <h5>Попълнете данните за детската градина на Вашето дете и потърсете съвпадения:</h5>

                    <div>
                        <label htmlFor="current-region">Region:</label><br />
                        <select name="current-region" value={region.value} onChange={onChangeCurrentRegionHandler}>
                            <option value={region}>--Please choose an option--</option>
                            {regions.map(x => <option value={x} key={x}>{x}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="current-kindergarten">Kindergarten:</label><br />
                        <select name="current-kindergarten" value={kindergarten} onChange={onChangeCurrentKindergrtenHandler}>
                            <option value="">--Please choose an option--</option>
                            {kindergartens.map(x => <option value={x["Име на институцията"]} key={x._id}>{x["Име на институцията"]}</option>)}
                        </select>
                    </div>           

                    <div>
                        <label htmlFor="born">Born</label><br />
                        <select name="born" value={born} onChange={onChangeBorn}>
                            <option value="">--Please choose an option--</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>
                    
                    <p className="field submit">
                        <button className="btn submit" type="submit">Search</button>
                    </p>

                </fieldset>
            </form>




            <section className="wishes">

                <div className="articles">
                    {result}
                </div>
            </section>

        </div>
    );
}

export default Home;