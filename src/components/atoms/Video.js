import React from "react";
import styles from "./note.module.scss";
import Iframe from "react-iframe";

const Video = (props) => {
  const { name, surname, link, title, actualVideos, setVideos } = props;
  const handleDelete = (event, clicked) => {
    event.preventDefault();
    const videos = [...actualVideos];
    const index = videos.findIndex((note) => note.title === clicked);
    videos.splice(index, 1);
    console.log(videos);
    setVideos(videos);
  };

  return (
    <div key={title} className={styles.container}>
      <h1>{title}</h1>
      <h3>
        {name} {surname}
      </h3>

      <iframe
        src={link}
        width="320px"
        height="200px"
        title={title}
        X-frame="origin"
      ></iframe>

      <button
        className={styles.btn}
        onClick={(event) => {
          handleDelete(event, title);
          console.log(link);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Video;
