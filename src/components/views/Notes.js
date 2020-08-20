import React from "react";
import Note from "../atoms/Note";
import styles from "./notes.module.scss";

const Notes = ({ actualNotes, setNotes }) => {
  const showNotes = actualNotes.map((note) => (
    <Note
      key={note.title}
      name={note.name}
      surname={note.surname}
      desc={note.desc}
      title={note.title}
      actualNotes={actualNotes}
      setNotes={setNotes}
    />
  ));
  return <div className={styles.container}>{showNotes}</div>;
};

export default Notes;
