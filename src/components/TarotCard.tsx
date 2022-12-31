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

  const minorAracanaTitle = (card: MinorArcana): string => {
    switch (card.rank) {
      case 1:
        return "A";
      case 11:
        return "P";
      case 12:
        return "J";
      case 13:
        return "Q";
      case 14:
        return "K";
      default:
        return String(card.rank);
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
              {"suit" in props.card ? (
                <>
                  <div className="poker top">
                    <p>{minorAracanaTitle(props.card)}</p>
                    <p>{props.card.icon}</p>
                  </div>
                  <MinorArcanaSvg card={props.card} />
                  <div className="poker bottom">
                    <p>{props.card.icon}</p>
                    <p>{minorAracanaTitle(props.card)}</p>
                  </div>
                  {/* <p>
                    {props.card.name} of {props.card.suit}
                  </p> */}
                </>
              ) : (
                <>
                  <p>{props.card.isReversed ? props.card.name : props.card.number}</p>
                  <MajorArcanaSvg card={props.card} />
                  <p><u>{props.card.isReversed ? props.card.number : props.card.name}
                    </u></p>
                </>
              )}
            </div>
          )}
        </div>
      </Draggable>
    </div>
  );
}
