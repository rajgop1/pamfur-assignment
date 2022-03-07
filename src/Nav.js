import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  
    return (

        <div  className="navbar">
            <Link   to={"/"}>
                <div className="navitems" >Home</div>
            </Link>

            <Link to={"/about"} >
                <div className="navitems" >About Us</div>
            </Link>
            <Link to={"/event"}>
                <div className="navitems">Events</div>
            </Link>
        </div>
    )
}