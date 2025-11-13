import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useState, useEffect} from "react";
import { Card } from "../components/card.jsx";

export const Home = () => {
	const [people, setPeople] = useState([]);
	const { store, dispatch, getPeople } = useGlobalReducer()

	useEffect(() => {
		if(store.people.length == 0) {
			getPeople()
		}
	}, [])

	useEffect(()=>{
		setPeople(store.people)
	}, [store.people])

	return (
		<div className="text-center mt-5">
			<div className="d-flex col-10 overflow-auto mt-5 mx-auto">
				{people?.map((person, index)=>{
					return <Card key={index} uid={person.uid} name={person.name}/>
				})}
			</div>
			
		</div>
	);
}; 