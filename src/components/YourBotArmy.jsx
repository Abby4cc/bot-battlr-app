import React from "react";
import BotCard from "./BotCard";
import { Row, Col } from "react-bootstrap";

function YourBotArmy({ army = [], onRemove, onDelete }) {
  return (
    <div className="mt-4 p-4 rounded bg-success ">
      <h2 className="text-center text-dark">Your Bot Army</h2>

      <Row className="gx-1 gy-1"> 
        {army.map((bot) => (
          <Col key={bot.id} sm={6} md={4} lg={3}>
            <BotCard
              bot={bot}
              onClick={() => onRemove(bot)}
              onDelete={() => onDelete(bot)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default YourBotArmy;