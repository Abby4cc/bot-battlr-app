import React from "react";
import { Button, Card } from "react-bootstrap";

function BotCard({ bot, onClick, onDelete }) {
  const binary1 = bot.binary1 || bot.catchphrase?.substring(0, 20) || "";
  const binary2 = bot.binary2 || bot.catchphrase?.substring(20, 40) || "";

  return (
    <Card
      className="shadow"
      style={{
        ...{
          width: "22rem", 
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "6px",
          border: "1px solid #ccc",
          position: "relative" 
        },
        ...{
          marginRight: "2px",
          marginBottom: "2px"
        }
      }}
      onClick={onClick}
    >
      <Card.Img
        variant="top"
        src={bot.avatar_url}
        style={{
          ...{
            padding: "8px",
          },
          ...{
            height: "200px", 
            objectFit: "contain",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: "6px",
            backgroundColor: "#f8f9fa"
          }
        }}
      />
      <Card.Body style={{
        ...{
          paddingTop: "0.4rem",
          paddingBottom: "0.6rem"
        },
        ...{
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          textAlign: "center",
          color: "black",
          fontSize: "0.8rem"
        }
      }}>
        <Card.Title style={{
          ...{
            marginBottom: "0.2rem"
          },
          ...{
            textAlign: "center",
            color: "black",
            fontSize: "1.9rem"
          }
        }}>
          {bot.name}
          {bot.bot_class && <span className="text-muted" style={{ fontSize: "1.7rem" }}> ({bot.bot_class})</span>}
        </Card.Title>

        <div style={{
          ...{
            fontSize: "1.7rem",
            marginBottom: "0.05rem",
            fontFamily: "Times New Roman"
          },
          ...{
            textAlign: "center",
            color: "black"
          }
        }}>
          {binary1}
        </div>

        <div style={{
          ...{
            fontSize: "1.7rem",
            marginBottom: "0.3rem",
            fontFamily: "Times New Roman"
          },
          ...{
            textAlign: "center",
            color: "black",
            paddingBottom: "1.2rem",
            borderBottom: "1px solid #ccc"
          }
        }}>
          {binary2}
        </div>

        <div style={{
          ...{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "1.6rem"
          },
          ...{
            marginTop: "1.2rem",
            color: "black"
          }
        }}>
          <span className="me-1 text-secondary">❤️ {bot.health}</span>
          <span className="me-1 text-secondary">⚡ {bot.damage}</span>
          <span className="text-secondary">🛡️ {bot.armor}</span>
        </div>

        
          {onDelete && (
            <Button
              variant="danger"
              size="sm"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                padding: "0px",
                fontSize: "0.8rem"
              }}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(bot);
              }}
            >
              X
            </Button>
        
        )}
      </Card.Body>
    </Card>
  );
}

export default BotCard;