import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../molecules/Navigation";
import Home from "./Home";
import Videos from "./Videos";
import Notes from "./Notes";

const pageTypes = {
  home: "home",
  note: "note",
  video: "video",
};

const initialNotes = [
  {
    id: 1,
    name: "Adam",
    surname: "Kowalski",
    title: "My first note",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur illum hic iste obcaecati, dolore est.m, ipsum dolor sit amet consectetur adipisicing elit. Adipisci Cum doloremque voluptas repellat.",
  },
  {
    id: 2,
    name: "Adam",
    surname: "Nowak",
    title: "My second note",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur illum hic iste obcaecati, dolore est. Cum doloremque voluptas repellat.",
  },
  {
    id: 1,
    name: "Adam",
    surname: "Kowalski",
    title: "My first note",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci m, ipsum dolor sit amet consectetur adipisicing elit. Adipiscim, ipsum dolor sit amet consectetur adipisicing elit. Adipiscim, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur illum hic iste obcaecati, dolore est. Cum doloremque voluptas repellat.",
  },
  {
    id: 2,
    name: "Adam",
    surname: "Nowak",
    title: "My second note",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur illum hic iste obcaecati, dolore est.m, ipsum dolor sit amet consectetur adipisicing elit. Adipisci Cum doloremque voluptas repellat.",
  },
  {
    id: 1,
    name: "Adam",
    surname: "Kowalski",
    title: "My first note",
    desc:
      "Lorem, ipsum dolor sit amet consem, ipsum dolor sit amet consectetur adipisicing elit. Adipiscictetur adipisicing elit. Adipisci aspernatur illum hic iste obcaecati, dolore est. Cum doloremque voluptas repellat.",
  },
  {
    id: 2,
    name: "Adam",
    surname: "Nowak",
    title: "My second note",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur illum hic iste obcaecati, dolore est. Cum doloremque voluptas repellat.",
  },
];

const initialVideos = [
  {
    id: 1,
    name: "Adam",
    surname: "Kowalski",
    title: "My second video",
    link: "link1",
  },
  {
    id: 2,
    name: "Paweł",
    surname: "Klski",
    title: "My first video",
    link: "link1",
  },
];

function Root() {
  const [page, setPage] = useState(pageTypes.home);
  const [notes, setNotes] = useState(initialNotes);
  const [videos, setVideos] = useState(initialVideos);

  return (
    <BrowserRouter>
      <div className="root">
        <Navigation
          pages={pageTypes}
          setPage={setPage}
          page={page}
          actualNotes={notes}
          setNotes={setNotes}
          actualVideos={videos}
          setVideos={setVideos}
        />
        <Switch>
          <Route path="/" exact component={() => <Home page={page} />} />
          <Route
            path="/videos"
            component={() => (
              <Videos
                page={page}
                videos={videos}
                actualVideos={videos}
                setVideos={setVideos}
              />
            )}
          />
          <Route
            path="/notes"
            component={() => (
              <Notes
                page={page}
                notes={notes}
                actualNotes={notes}
                setNotes={setNotes}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Root;
