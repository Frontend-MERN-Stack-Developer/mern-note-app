import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      await axios
        .get("http://localhost:2100/api/notes")
        .then((response) => {
          setNotes(response.data);
        })
        .catch((error) => {
          console.log("Error while fetching note.", error);
        });
    };
    fetchNote();
  }, []);

  const deleteNote = (noteID) => {
    try {
      axios.delete(`http://localhost:2100/api/delete/note/${noteID}`);
      const delNote = notes.filter((note) => note._id !== noteID);
      setNotes(delNote);
    } catch (error) {
      console.log("Delete error:", error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {notes.map((note, index) => (
          <div key={index} className="col">
            <div className="notes-card">
              <div className="title">{note.title}</div>
              <div className="content">
                <div>{note.content}</div>
                <div className="d-flex">
                  <Link>Edit</Link>
                  <Link onClick={() => deleteNote(note._id)}>Delete</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
