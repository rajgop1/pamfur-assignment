import { useState } from "react"
import CalendarEvent from "./components/CalendarEvent"
import Card from "./components/Card"
import EventNew from "./components/EventNew"
import WeatherIcon from "./images/weather.png"
import VideoIcon from "./images/video.png"
import "./events.css"
export default function Events() {
    let [isSwiper, setIsSwiper] = useState(true)
    let [close, setClose] = useState(true)
    function closeBox() {

        setClose(true)
    }
    function openBox() {
        setClose(false)
    }
    function handleSwipe() {
        setIsSwiper(!isSwiper)
    }
    return (

        <div className="event" >
            <div className="calendar">
                <CalendarEvent />
            </div>

            <div className={`swipe ${isSwiper && "top"}`}>

                <div className="swipe-container">

                    <div onClick={handleSwipe} className="swipe-me"></div>
                </div>
                <div className="upcoming-events">
                    <div className="card">
                        <h2>Upcoming Events ( {3} )</h2>
                        <div className="cards-container">
                            <Card cardheading="Design Scrum" time="11:00AM" remaining="45 mins" borderColor="#FF9999" color="#FFE0E0" items={10} />
                            <Card cardheading="Q2 Planning" time="01:20PM" remaining="60 mins" borderColor="#FFC01F" color="#FFE8AC" items={8} />
                            <Card cardheading="Coldplay Concert" time="09:20PM" remaining="120 mins" borderColor="#97EFE0" color="#E5FFFA" items={20} />
                        </div>
                    </div>
                </div>
                <div className="today-events">
                    <div className="today-events-top">
                        <div className="today-event-left">
                            <h2>Today, </h2>
                            <div style={{ fontSize: "1.3rem" }}>Thursday 21</div>
                        </div>
                        <div className="today-event-right">
                            <img src={WeatherIcon} />
                            <div className="weather-degree-text">31&#xb0;/25&#xb0;</div>
                        </div>
                    </div>
                    <div className="today-event-main">
                        <div className="today-event-item">
                            <div className="today-main-left">
                                <div className="today-time">11:00am</div>
                                <div className="today-mins">45 mins</div>
                            </div>
                            <div className="today-main-right">
                                <Card cardheading="Design Scrum" phone={"456 676 7889"} VideoIcon={VideoIcon} borderColor="#FF9999" color="#FFE0E0" items={10} />
                            </div>

                        </div>
                        <div className="today-event-item" >

                            <div className="today-main-left">
                                <div className="today-time">01:20pm</div>
                                <div className="today-mins">60 mins</div>
                            </div>
                            <div className="today-main-right">
                              <Card cardheading="Q2 Planning" phone={"1234 5678 90"} VideoIcon={VideoIcon} borderColor="#FFC01F" color="#FFE8AC" items={8} />
                            </div>
                        </div>
                        <div className="today-event-item" >

                            <div className="today-main-left">
                                <div className="today-time">9:20pm</div>
                                <div className="today-mins">120 mins</div>
                            </div>
                            <div className="today-main-right">
                            <Card cardheading="Coldplay Concert"  VideoIcon={VideoIcon} borderColor="#97EFE0" color="#E5FFFA" items={20} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div onClick={openBox} className="add-event">
                <span className="plus">+</span>
            </div>
            <EventNew close={close} closeBox={closeBox} />
        </div>
    )
}