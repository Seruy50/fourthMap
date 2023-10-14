import { React, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { VillagesPoints } from "./villagespoints";
import { villages } from "./villages";
import "./App.css";
import legend from './legend.gif'

export default function App() {
  const [currentId, setCurrentId] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>
        {"Карта 2. Рефлекси *о в закритому наголошеному складі в слові батіг"}
      </h1>
      <div className="main">
        <div className="mapField">
          <VillagesPoints
            setShow={setShow}
            setCurrentId={setCurrentId}
            show={show}
            currentId={currentId}
          />
        </div>
        <div className="infoLegendField">
          <div >
            <img className="legendImage" src={legend} alt='' style={{width: '350px'}}/>
          </div>
          <div className="info">
            {show ? (
              <Information
                villages={villages}
                id={currentId}
                show={show}
                setShow={setShow}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="madeBy">
              <p><span>By:</span> Universal S., Druzhuk I.</p>
      </div>
    </div>
  );
}

function Information({ villages, id, setShow }) {
  let village = villages.filter((item) => item["id"] === id);
  village = village[0];
  return (
    <div className="information">
      <div className="infoClose" onClick={() => setShow(false)}>
        <span></span>
        <span></span>
      </div>
      <div className="infoTextBlock">
        {village.name}
        {village.transcription ? village.transcription : ""}
        {village.note ? village.note : ""}
        {village.plus ? village.plus : ""}
        <div className="audio">
          {village.audio ? (
            <ReactAudioPlayer src={village.audio} controls />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
