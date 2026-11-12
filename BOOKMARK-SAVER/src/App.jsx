import React from "react";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState(() => { try { return JSON.parse(localStorage.getItem("bookmarks") || "[]"); } catch { return []; } });
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  function addBookmark(event) {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanUrl = url.trim();
    try { const parsed = new URL(cleanUrl); if (!cleanName || !["http:", "https:"].includes(parsed.protocol)) throw new Error(); }
    catch { alert("Enter a name and a valid http:// or https:// URL."); return; }
    const next = [...bookmarks, { id: Date.now(), name: cleanName, url: cleanUrl }];
    setBookmarks(next); localStorage.setItem("bookmarks", JSON.stringify(next)); setName(""); setUrl("");
  }
  function removeBookmark(id) { const next = bookmarks.filter((item) => item.id !== id); setBookmarks(next); localStorage.setItem("bookmarks", JSON.stringify(next)); }
  return <div className="app-container"><h1>Bookmark Saver</h1><form className="input-container" onSubmit={addBookmark}><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Bookmark Name" aria-label="Bookmark name" /><input type="url" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Bookmark URL" aria-label="Bookmark URL" /><button type="submit">Add Bookmark</button></form><ul id="bookmark-list">{bookmarks.map((item) => <li key={item.id}><a href={item.url} target="_blank" rel="noreferrer">{item.name}</a><button type="button" onClick={() => removeBookmark(item.id)}>Remove</button></li>)}</ul></div>;
}
export default App;
