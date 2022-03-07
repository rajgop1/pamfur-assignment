import React, { useState } from "react"
import { Link } from "react-router-dom"
import profile from "../images/profile.png"
import "./calendar.css"
export default function CalendarEvent() {
    let date = new Date()
    let month = date.getMonth()
    // console.log(month)
    let year = date.getFullYear()
    // console.log(year)
    let daysInMonth = new Date(year, month + 1, 0).getDate()
    // console.log(daysInMonth)

    let monthinText = date.toLocaleDateString("en-us", { month: "long" })
    let nextMonth = new Date(year, month + 1, 1)
    let nextMonthinText = nextMonth.toLocaleDateString("en-us", { month: "long" })
    let firstDayOfMonth = new Date(year, month, 1)
    let firstDayWeekday = firstDayOfMonth.toLocaleDateString("en-us", { weekday: "long" })
    // console.log(firstDayWeekday)
    let lastDayOfMonth = new Date(year, month + 1, 0)
    let lastDayWeekday = lastDayOfMonth.toLocaleDateString("en-us", { weekday: "long" })
    let weekdays = ["Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let beforePaddingDays = 0

    for (let i = 0; i < weekdays.length; i++) {

        if (firstDayWeekday.toString() == weekdays[i]) {
            break
        }
        beforePaddingDays++
    }
    let afterPaddingDays = 0
    for (let i = 0; i < weekdays.length; i++) {

        if (lastDayWeekday.toString() == weekdays[i]) {
            break
        }
        afterPaddingDays++
    }
    let padbefore = []
    let beforeMonthDays = new Date(year, month, 0).getDate()
    let beforeMonthDaysH = beforeMonthDays - beforePaddingDays
    for (let i = 1; i <= beforePaddingDays; i++) {
        padbefore.push(beforeMonthDaysH + 1)
    }
    let padafter = []

    for (let i = 1; i <= afterPaddingDays; i++) {
        padafter.push(i)
        beforeMonthDaysH++
    }
    let regularDays = []
    for (let i = 1; i <= daysInMonth; i++) {
        regularDays.push(i)
    }
    return (

        <div className="calendar-container">
            <div className="calendar-top">
                <div className="calendar-left">
                    <Link to={"/"} style={{color:"white", textDecoration:"none"}}>
                        <div className="left-arrow" > &lt; </div>
                    </Link>
                    <span className="year">{2021}</span>
                    <span className="month">{monthinText}<span className="down-arrow">&#8964;</span></span>
                </div>
                <div className="calendar-right">
                    <img src={profile} className="profile" />
                </div>
            </div>
            <div className="dates">
                <div className="month-days">
                    <div className="weekday-heading">Mo</div>
                    <div className="weekday-heading">Tu</div>
                    <div className="weekday-heading">We</div>
                    <div className="weekday-heading">Th</div>
                    <div className="weekday-heading">Fr</div>
                    <div className="weekday-heading">Sa</div>
                    <div className="weekday-heading">Su</div>
                    {
                        padbefore.map((val) => {
                            return (
                                <div className="before-pad pad-day">{val}</div>
                            )
                        })
                    }
                    {
                        regularDays.map(val => {

                            return (
                                <div className={`regular-day ${val == 21 && "event-day"}`}>{val} </div>
                            )
                        })
                    }

                    {
                        padafter.map((val) => {
                            return (
                                <div className="after-pad pad-day">{val}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="next-month">
                <div className="heading">{nextMonthinText}</div>
                <div className="month-days">
                    {
                        padbefore.map((val) => {
                            return (
                                <div className="before-pad pad-day">{val}</div>
                            )
                        })
                    }
                    {
                        regularDays.map(val => {

                            return (
                                <div className={`regular-day ${val == 21 && "event-day"}`}>{val} </div>
                            )
                        })
                    }

                    {
                        padafter.map((val) => {
                            return (
                                <div className="after-pad pad-day">{val}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}