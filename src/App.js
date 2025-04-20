import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sortOption, setSortOption] = useState(""); 

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const deleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      setArmy(army.filter((b) => b.id !== bot.id));
    });
  };

  const sortedBots = [...bots].sort((a, b) => {
    if (!sortOption) return 0;
    return b[sortOption] - a[sortOption];
  }); 

  return (
    <Container>
      <h1 className="text-center my-4 "> Bot Battlr</h1>
      <YourBotArmy army={army} onRemove={removeFromArmy} onDelete={deleteBot} />
      <SortBar onSortChange={setSortOption} /> 
      <BotCollection bots={sortedBots} onAdd={addToArmy} />
    </Container>
  );
}

export default App;

