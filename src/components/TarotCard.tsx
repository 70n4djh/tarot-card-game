import React, { DragEventHandler, useState } from "react";
import Draggable from "react-draggable";
import { MajorArcana, MinorArcana } from "../models/card";
import MajorArcanaSvg from "./MajorArcanaSvg";
import MinorArcanaSvg from "./MinorArcanaSvg";

export default function TarotCard(props: {
  card: MinorArcana | MajorArcana;
  offset: number;
}) {
  const [isBack, setIsBack] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const flip = () => {
    if (!isDragging) setIsBack(!isBack);
  };

  const eventControl = (event: { type: any }, info: any) => {
    if (event.type === "mousemove" || event.type === "touchmove") {
      setIsDragging(true);
    }

    if (event.type === "mouseup" || event.type === "touchend") {
      setTimeout(() => {
        setIsDragging(false);
      }, 100);
    }
  };

  return (
    <div
      style={{
        transform: `translate(-${0.015625 * props.offset}em, -${
          0.015625 * props.offset
        }em)`,
      }}
    >
      <Draggable onDrag={eventControl} onStop={eventControl}>
        <div className={"tarot-card"} onClick={flip}>
          {isBack ? (
            <div className={"card-back"}></div>
          ) : (
            <div className={"card-front"}>
              {/*<span>{props.isReversed ? "⏬" : "⏫"}</span>*/}
              {"suit" in props.card ? (
                <>
                  <p>{props.card.icon}</p>
                  <MinorArcanaSvg card={props.card} />
                  <p>
                    {props.card.name} of {props.card.suit}
                  </p>
                </>
              ) : (
                <>
                  <p>{props.card.number}</p>
                  <MajorArcanaSvg card={props.card} />
                  <p>{props.card.name}</p>
                </>
              )}
            </div>
          )}
        </div>
      </Draggable>
    </div>
  );
}
