import React, { useState } from "react";
import styles from "./modal.module.scss";
import Button from "../atoms/Button";

const Modal = ({
  opened,
  handleClick,
  pages,
  page,
  actualNotes,
  actualVideos,
  setNotes,
  setVideos,
}) => {
  const close = false;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  const handleAdd = (event, page) => {
    event.preventDefault();
    if (page === pages.note) {
      const notes = [...actualNotes];
      const newNote = {
        name: name,
        surname: surname,
        title: title,
        desc: desc,
      };
      notes.push(newNote);
      setNotes(notes);
    } else if (page === pages.video) {
      const videos = [...actualVideos];
      const newVideo = {
        name: name,
        surname: surname,
        title: title,
        link: link,
      };
      videos.push(newVideo);
      setVideos(videos);
    }
  };
  return (
    <div
      className={opened ? styles.modal : styles.closed}
      style={page === pages.video ? { height: "560px" } : {}}
    >
      <Button opened close={close} handleClick={handleClick} secondary>
        X
      </Button>

      <div className={styles.container}>
        <div className={styles.item}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {page === pages.video ? (
          <div className={styles.item}>
            <label htmlFor="link">Link</label>
            <input
              type="text"
              id="link"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        ) : (
          <div className={styles.item}>
            <label htmlFor="description">Description</label>
            <textarea
              rows="10"
              cols="30"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        )}

        <div className={styles.item}>
          <button
            className={styles.btn}
            onClick={(event) => handleAdd(event, page)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
