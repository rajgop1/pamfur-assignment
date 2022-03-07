import "./cards.css"
import Cardeventphoto from "./Cardeventsphoto"
export default function Card(props) {
    const cardphotos = []
    let start = 0
    for (let index = 0; index < props.items; index++) {

        if (index <= 3) {

            cardphotos.push(<Cardeventphoto left={start} key={index} />)
            start += 15
        }
        else{
            cardphotos.push(<Cardeventphoto key={index} remaining={props.items-index} left={start}/>)
            break
        }
    }
    return (
        <div  className="card-data" style={{background:props.color, borderLeftColor:props.borderColor}} >
            <div className="card-heading" >{props.cardheading}</div>


            <div className="card-photo-container">

                {
                    cardphotos
                }
            </div>
            <div>
                {props.time} {props.remaining&&(<span style={{color:"#898989"}}>{props.remaining}</span>)}
                {props.VideoIcon&&<img src={props.VideoIcon}/>}
                {props.phone&&<span style={{color:"gray", fontSize:"0.8rem"}}>{props.phone}</span>}

            </div>
        </div>
    )
}