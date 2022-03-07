import "./eventnew.css"
import people from "../images/people-icon-group.png"
import watch from "../images/watch.png"
import locationIcon from "../images/location-icon.png"
import agendaIcon from "../images/assignment.png"
import attachmentIcon from "../images/clip.png"
import { useState } from "react"
import EventInsideComponent from "./EventInsideComponent"
export default function EventNew({ close, closeBox }) {

    let [toggleSwitch, setToggleSwitch] = useState(false)
    function handleToggle() {
        setToggleSwitch(prev => !prev)
    }

    return (

        <div className={`event-new-container ${close && "hide"}`} >

            <div className="overflow">


            
            </div>

            <div className="event-new">

                <div className="event-top">
                    <div className="cross" onClick={closeBox}>&#10006;</div><div className="new-event-heading">New Event</div>
                </div>

                <div className="event-main-box">
                    <input className="event-input-box" placeholder="Add Text"></input>
                </div>
                <EventInsideComponent img={people} text="Invite People"/>
                <div className="all-day-container">
                    <div className="all-day-icon-heading">
                        <div className="all-day-left">
                            <img src={watch} /> <span className="all-day-heading">All Day</span>
                        </div>
                        <div className="all-day-right">
                            <div className={`toggle ${toggleSwitch && "bg-color-toggle"}`}>
                                <div onClick={handleToggle} className={`toggle-switch ${toggleSwitch && "right"}`}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="all-day-list">
                        <li>Thursday</li>
                        <li>Thursday</li>
                    </ul>
                </div>
                <EventInsideComponent img={locationIcon} text="Location"/>
                <EventInsideComponent img={agendaIcon} text="Agenda"/>
                <EventInsideComponent img={attachmentIcon} text="Attachement"/>
            </div>
        </div>
    )
}