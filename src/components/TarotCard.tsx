import React, {DragEventHandler, useState} from 'react';
import Draggable from 'react-draggable';


export default function TarotCard(props: { isReversed: boolean, children: any }) {
    const [isBack, setIsBack] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const flip = () => {
        if (!isDragging) setIsBack(!isBack);
    }

    const eventControl = (event: { type: any; }, info: any) => {
        if (event.type === 'mousemove' || event.type === 'touchmove') {
            setIsDragging(true)
        }

        if (event.type === 'mouseup' || event.type === 'touchend') {
            setTimeout(() => {
                setIsDragging(false);
            }, 100);

        }
    }


    return (
        <Draggable onDrag={eventControl}
                   onStop={eventControl}>
            <div className={"tarot-card"} onClick={flip}>
                {isBack
                    ? <div className={"card-back"}></div>
                    : <div className={"card-front"}>
                        {/*<span>{props.isReversed ? "⏬" : "⏫"}</span>*/}
                        {props.children}
                    </div>
                }

            </div>
        </Draggable>

    )
}