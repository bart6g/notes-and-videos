import React from "react";
import styles from "./note.module.scss";
const Note = (props) => {
  const { name, surname, desc, title, actualNotes, setNotes } = props;
  const handleDelete = (event, clicked) => {
    event.preventDefault();
    const notes = [...actualNotes];
    const index = notes.findIndex((note) => note.title === clicked);
    notes.splice(index, 1);
    console.log(notes);
    setNotes(notes);
  };
  return (
    <div key={title} className={styles.container}>
      <h1>{title}</h1>
      <h3>
        {name} {surname}
      </h3>
      <p>{desc}</p>
      <button
        className={styles.btn}
        onClick={(event) => handleDelete(event, title)}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
