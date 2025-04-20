import React from "react";
import BotCard from "./BotCard";
import { Row, Col } from "react-bootstrap";

function BotCollection({ bots, onAdd }) {
  return (
    <div className="mt-4">
      <h2 className="text-center">Bot Collection</h2>
      <Row className="gx-0 gy-1"> 
        {bots.map((bot) => (
          <Col key={bot.id} xs={6} sm={6} md={3} lg={3}> 
            <BotCard bot={bot} onClick={() => onAdd(bot)} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BotCollection;