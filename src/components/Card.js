import {Link } from "react-router-dom"
function Card(name, img, population) {
    return (
        <div>
           <img src={img} alt="" className="card-img-top" style={{height: "10rem", width: "18rem"}} />
        <div className="card-body">
            <Link to={ `/details/${name}`}></Link>
            <h4>{name}</h4>
            <h5>{population}</h5>
        </div>
        </div>
    )
}

export default Card
