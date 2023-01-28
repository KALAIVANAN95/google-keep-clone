import React, { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  console.log(notes);

  const deleteNote = (id) => {
    setNotes((preNote) => {
      return preNote.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteNote={deleteNote}
            id={index}
          />
        );
      })}
    </div>
  );
}

export default App;
