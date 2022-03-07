import React from 'react'

export default function EventInsideComponent(props) {
    return (
        <div className="invite-people-container">
            <div className="icon-text">
                <img src={props.img} />
                <span className="invite-text">{props.text}</span>
            </div>
            <div className="right-arrow">&gt;</div>
        </div>
    )
}
