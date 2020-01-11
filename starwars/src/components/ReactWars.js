import React, { useState, useEffect } from "react";
import axios from "axios";
import CharList from "./CharList";


function StarWarsChar(){
    const [charName, setCharName] = useState([]);


useEffect(() => {
    axios
    .get("https://swapi.co/api/people/")
    .then(res => {
       setCharName(res.data.results);
    })
    .catch(err => {
        console.log(err);
    })
}, [])


return(
    <div>
        {charName.map((character) => {
            return(
                <CharList
                    name = {character.name} 
                    gender = {character.gender}
                    height = {character.height}
                    key = {PaymentResponse.character}
                    hair_color = {character.hair_color}
                />
            )}
        )}
    </div>
    );

};
export default StarWarsChar;