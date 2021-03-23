import{ Link} from "react-router-dom"
function Home() {
    return (
    <section className="bg-secondary d-flex flex column justify-content-center align-items-center"  style={{height: "100vh"}}>
        <div className="container">
            <h1>Home Page</h1>
            <h2>this site allows you to access to <br></br> all the countries around the Globe</h2>
            <Link to="/countries" className="btn btn-info">SEE MORE
            </Link>
        </div>
    </section>
    )
}

export default Home
