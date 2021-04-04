import { useState, useEffect } from "react";
import { Route } from "react-router";

import "./Wish.css"

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


function Wish() {

    const [currentRegion, setCurrentRegion] = useState({});
    const [currentKindergartens, setCurrentKindergartens] = useState([]);
    const [currentKindergarten, setCurrentkindergarten] = useState("");


    const [desiredRegion, setDesiredRegion] = useState({});
    const [desiredKindergartens, setdesiredKindergartens] = useState([]);
    const [desiredKindergarten, setdesiredKindergarten] = useState("");




    useEffect(() => {
        console.log("useEffect");
        if (!currentRegion.value) { return }
        fetch(`http://localhost:5002/api/kindergartens/${currentRegion.value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            credentials: "include",
            withCredentials: true
        })
            .then(res => res.json())
            .then(kindergartens => setCurrentKindergartens(kindergartens))
    }, [currentRegion]);


    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:5002/api/kindergartens/${desiredRegion.value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            credentials: "include",
            withCredentials: true
        })
            .then(res => res.json())
            .then(kindergartens => setdesiredKindergartens(kindergartens))
    }, [desiredRegion]);



    function onChangeCurrentRegionHandler(e) {
        console.log(e.target.value);
        setCurrentRegion({ value: e.target.value });
    }

    function onChangeDesiredRegionHandler(e) {
        console.log(e.target.value);
        setDesiredRegion({ value: e.target.value });
    }

    function onChangeCurrentKindergrtenHandler(e) {
        setCurrentkindergarten(e.target.value);
    }

    function onChangeDesiredKindergartenHandler(e) {
        setdesiredKindergarten(e.target.value);
    }



    function onSubmitHandler(e) {
        e.preventDefault();
        const born = e.target.born.value;
        const firstName = e.target.firstName.value;
        const wishData = {
            currentKindergarten,
            desiredKindergarten,
            born,
            firstName
        };

        wishService.create(wishData)

    }

    return (
        <div className="container">
            <form onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>Create a desire</legend>

                    <div>
                        <label htmlFor="current-region">Current region:</label><br />
                        <select name="current-region" value={currentRegion.value} onChange={onChangeCurrentRegionHandler}>
                            <option value={currentRegion}>--Please choose an option--</option>
                            {regions.map(x => <option value={x} key={x}>{x}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="current-kindergarten">Current kindergarten:</label><br />
                        <select name="current-kindergarten" value={currentKindergarten} onChange={onChangeCurrentKindergrtenHandler}>
                            <option value="">--Please choose an option--</option>
                            {currentKindergartens.map(x => <option value={x["Име на институцията"]} key={x._id}>{x["Име на институцията"]}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="desired-region">Desired region:</label><br />
                        <select name="desired-region" value={desiredRegion.value} onChange={onChangeDesiredRegionHandler}>
                            <option value={desiredRegion}>--Please choose an option--</option>
                            {regions.map(x => <option value={x} key={x}>{x}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="desired-kindergarten">Desired kindergarten:</label><br />
                        <select name="desired-kindergarten" value={desiredKindergarten} onChange={onChangeDesiredKindergartenHandler}>
                            <option value="">--Please choose an option--</option>
                            {desiredKindergartens.map(x => <option value={x["Име на институцията"]} key={x._id}>{x["Име на институцията"]}</option>)}
                        </select>
                    </div>


                    <div>
                        <label htmlFor="born">Born</label><br />
                        <select name="born">
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
                    <p className="field category">
                        <input type="text" id="firstName" name="firstName" placeholder="Enter the first name of the child" />
                        <label htmlFor="category">First name</label>
                    </p>
                    <p className="field submit">
                        <button className="btn submit" type="submit">Create</button>
                    </p>

                </fieldset>
            </form>
        </div>
    )

}

export default Wish;

