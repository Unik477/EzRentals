import { Button, Card } from "react-bootstrap";
import "./OfferCard.css"
import * as Icon from 'react-bootstrap-icons';

export default function OfferCard(props){

  function copyToClipboard(copytext) {
    navigator.clipboard.writeText(copytext).then(() => {
        
        alert("Copied to clipboard");
    })}

    return(
        <div className=" container col "  >
        <Card className="bg-dark offercard " style={{ width: '18rem' }}>
        <Card.Img className="offercard" variant="top" src={process.env.PUBLIC_URL + `${props.url}`} />
        <Card.Body >
      <h5>   Copy Code  <br/></h5>
          <Card.Text>
            
          </Card.Text>
          <h3 onClick={() => copyToClipboard(`${props.code}`)} className="code badge">{props.code} <Icon.Link45deg  className=" text-primary"/>  </h3>
        </Card.Body>
      </Card>
      </div>
    )
}