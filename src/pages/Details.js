import useCountries from "../hooks/useCountries";

function Details(match) {
    const name = match.params.name;
    const {error, isPending, countries} = useCountries(
        `https://restcountries.eu/rest/v2/name/${name}`
    )
    return (
        <div>
            <h1>Details page</h1>
        </div>
    )
}

export default Details
