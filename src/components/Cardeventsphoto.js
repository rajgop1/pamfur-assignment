export default function Cardeventphoto(props)
{
    return(
        <div className={`card-event-photo ${props.remaining && "remaining"}`} style={{left:`-${props.left}px`}}>
            { props.remaining===undefined? <img src/> : "+" + props.remaining}
        </div>
    )
    
}