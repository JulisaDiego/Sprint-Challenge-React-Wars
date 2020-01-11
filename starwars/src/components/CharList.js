import React from "react";
import { Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';



function CharList (props){
    return(
        <Col sm="12" md={{ size: 6, offset: 3 }}>
         <Card>
            <CardBody key = {props.character}>
                <CardTitle>Name: {props.name}</CardTitle>
                <CardText>Sex: {props.gender}</CardText>
                <CardText>Height: {props.height} cm</CardText>
                <CardText>Hair Color: {props.hair_color}</CardText>
            </CardBody>
         </Card>
        </Col>
    );
};

export default CharList;