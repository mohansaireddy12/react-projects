import React from "react";
import { useState } from "react";
const initial = [{ id: "list1", title: "To Do", cards: [{ id: "card1", text: "Wash Dishes" }, { id: "card2", text: "Buy Groceries" }, { id: "card3", text: "Complete pending works" }] }, { id: "list2", title: "In Progress", cards: [{ id: "card4", text: "Learn to code" }] }, { id: "list3", title: "Done", cards: [{ id: "card5", text: "Learn rubics cube" }] }];
function App() {
  const [lists, setLists] = useState(initial); const [dragged, setDragged] = useState(null);
  function drop(targetId) { if (!dragged) return; let moved; const next = lists.map((list) => ({ ...list, cards: list.cards.filter((card) => { if (card.id === dragged) { moved = card; return false; } return true; }) })); if (moved) setLists(next.map((list) => list.id === targetId ? { ...list, cards: [...list.cards, moved] } : list)); setDragged(null); }
  return <div className="container"><h1>Simple Kanban Board</h1><div className="board">{lists.map((list) => <section className="list" id={list.id} key={list.id} onDragOver={(event) => event.preventDefault()} onDragEnter={(event) => event.currentTarget.classList.add("over")} onDragLeave={(event) => event.currentTarget.classList.remove("over")} onDrop={(event) => { event.currentTarget.classList.remove("over"); drop(list.id); }}><h2>{list.title}</h2>{list.cards.map((card) => <div className="card" key={card.id} id={card.id} draggable onDragStart={() => setDragged(card.id)} onDragEnd={() => setDragged(null)}>{card.text}</div>)}</section>)}</div></div>;
}
export default App;
