import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const PersonPage = () => {
    const { uid } = useParams()
    const [person, setPerson] = useState({});
    useEffect(() => {
        getPerson()
    }, [])
    const getPerson = async () => {
        let response = await fetch("https://www.swapi.tech/api/people/" + uid)
        let data = await response.json()
        setPerson(data.result.properties)
    }
    return (
        <>
            <div>
                <h3>Name:</h3>
                <h5>{person.name}</h5>
            </div>
             <div>
                <h3>Mass:</h3>
                <h5>{person.mass}</h5>
            </div>
             <div>
                <h3>Eye Color:</h3>
                <h5>{person.eye_color}</h5>
            </div>
             <div>
                <h3>Birth Year:</h3>
                <h5>{person.birth_year}</h5>
            </div>
        </>
    );
};