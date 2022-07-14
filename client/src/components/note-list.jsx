import Note from "./note";
import NoNote from "./no-note";
import { useEffect, useState } from "react";
const axios = require("axios");

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/getNote/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card-container m-3">
      {notes.length === 0 ? (
        <NoNote />
      ) : (
        notes.map((note) => (
          <Note
            key={note._key}
            id={note._id}
            title={note.title}
            body={note.body}
            date={note.date}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
