import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../atoms/Button";
import Modal from "./Modal";
import styles from "./navigation.module.scss";

const Navigation = ({
  pages,
  setPage,
  page,
  actualNotes,
  actualVideos,
  setNotes,
  setVideos,
}) => {
  const handlePageChange = (path) => {
    setPage(path);
    console.log(path);
    console.log(page);
  };

  const [isOpened, setOpened] = useState(false);

  const handleClick = (sth) => {
    console.log("works");
    console.log(sth);
    console.log(isOpened);
    setOpened(sth);
  };
  const close = true;
  return (
    <nav className={styles.container}>
      <Button
        page={page}
        handleClick={handleClick}
        isOpened={isOpened}
        close={close}
      >
        {page === pages.video ? "Add video" : "Add note"}
      </Button>
      <Modal
        opened={isOpened}
        handleClick={handleClick}
        pages={pages}
        page={page}
        actualNotes={actualNotes}
        setNotes={setNotes}
        actualVideos={actualVideos}
        setVideos={setVideos}
      />
      <ul>
        <li>
          <NavLink to="/" exact onClick={() => handlePageChange(pages.home)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/videos" onClick={() => handlePageChange(pages.video)}>
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes" onClick={() => handlePageChange(pages.note)}>
            Notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
