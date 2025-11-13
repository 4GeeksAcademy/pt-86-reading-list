export async function getPeople(dispatch, payload) {
    const response = await fetch("https://www.swapi.tech/api/people");
	const data = await response.json()
    
    dispatch({
        type: "setPeople", 
        payload: { people: data.results }
    })
}