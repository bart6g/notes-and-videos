import React from "react";
import Video from "../atoms/Video";
import styles from "./notes.module.scss";
const Videos = ({ actualVideos, setVideos }) => {
  const showVideos = actualVideos.map((video) => (
    <Video
      key={video.title}
      name={video.name}
      surname={video.surname}
      link={video.link}
      title={video.title}
      actualVideos={actualVideos}
      setVideos={setVideos}
    />
  ));
  return <div className={styles.container}>{showVideos}</div>;
};

export default Videos;
