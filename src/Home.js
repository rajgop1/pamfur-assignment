import img from "./images/Group1.png"
import {Link} from "react-router-dom"
export default function Home() {
    return (
        <div className="home">
            <div className="back" >
                <h1 style={{ margin:"0px", padding: "10px", color: "white" }}><span style={{ color: "gray" }}>Calendar</span> 2021</h1>
                <div className="image-place">
                    <img className="img" src={img} />
                </div>
            </div>
            <div className="bottom">


                <h2 className="greeting">Hi Aman,</h2>
                <p className="message">

                    Welcome to your daily event calendar. Be more engaging & personalised than ever before. <strong>We’ll help you in Tracking Upcoming Events, Scheduling Meetings & Creating New Event!</strong>
                </p>
                <Link to={"/event"}>
                    <div className="arrow">
                        &rarr;

                    </div>
                </Link>
            </div>
        </div>
    )
}