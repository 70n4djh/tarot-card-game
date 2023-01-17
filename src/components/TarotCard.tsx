import React from "react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { MajorArcana, MinorArcana } from "../models/card";
import MajorArcanaSvg from "./MajorArcanaSvg";
import MinorArcanaSvg from "./MinorArcanaSvg";

export const TarotCard = forwardRef(function (props: {
  card: MinorArcana | MajorArcana;
  offset: number;
  isFlipped: boolean;
  pos: { x: number, y:number }
}, ref) {
    const nodeRef = React.useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isBack, setIsBack] = useState(true);
  const flip = () => {
    if (!isDragging) setIsBack(!isBack);
  };
  const [controlledPosition, setControlledPosition] = useState({x: 0-0.5*props.offset, y: 0-0.5*props.offset});

  useImperativeHandle(ref, () => ({
    setBackState: () => flip()
  }));

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

  const onControlledDrag = (e: DraggableEvent, position: DraggableData) => {
    const {x, y} = position;
    setControlledPosition({x, y});
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
    <Draggable
      position={controlledPosition}
      onDrag={(e: DraggableEvent, data: DraggableData) => onControlledDrag(e, data)}
      onStop={eventControl}
      grid={[25, 25]}
      scale={0.4}
      nodeRef={nodeRef}
    >
      <div className={"tarot-card"} onClick={flip} ref={nodeRef}>
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
              </>
            ) : (
              <>
                <p>
                  {props.card.isReversed ? props.card.name : props.card.number}
                </p>
                <MajorArcanaSvg card={props.card} />
                <p>
                  <u>
                    {props.card.isReversed
                      ? props.card.number
                      : props.card.name}
                  </u>
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </Draggable>
  );
});
