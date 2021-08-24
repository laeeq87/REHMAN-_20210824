import React from 'react'
import { Card } from 'react-bootstrap'
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const VideoCard = (props) => {
    const thumbnailPath = `http://localhost:5000/thumbnails/${props.thumbnail}`;
    return (
        <div onClick={props.onClick} className="mt-3">
        <OverlayTrigger overlay={ <Tooltip className="" id="tooltip-top">{props.title}</Tooltip>} placement={"top"}>
            <Card style={{ width: 350, height: 300, borderRadius: 10 }}>
            <Card.Img style={{ width: 350, height: 200, borderRadius: 10 }} variant="top" src={thumbnailPath} />
            <Card.Body>
                <Card.Title data-testid="tst-title"><strong>{props.title}</strong></Card.Title>
                <Card.Text data-testid="tst-category"><strong>Category: </strong>{props.category}</Card.Text>
            </Card.Body>
            </Card>
        </OverlayTrigger>
    </div>
    )
  };