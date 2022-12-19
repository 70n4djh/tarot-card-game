import React, {useEffect, useState} from 'react';
import {Deck, MajorArcana, MinorArcana} from "../models/card";
import MinorArcanaCard from "./MinorArcanaCard";
import MajorArcanaCard from "./MajorArcanaCard";

export default function CardPlayGround() {
    const [deck, setDeck] = useState(new Deck());
    const [cards, setCards] = useState(deck.cards);

    const shuffle = () => {
        deck.shuffle();
        setCards([...deck.cards]);
    }

    return (<>
        <div>
            <button onClick={shuffle}>Shuffle</button>
        </div>
        <div className={"stage"} style={{transform: 'translate(0px, 0px) scale(40%, 40%)'
        }}>
            <div className="cards">
                {cards.map((card, index) => {
                    if ("suit" in card) {
                        return <MinorArcanaCard card={card as MinorArcana} key={index}/>;
                    } else {
                        return <MajorArcanaCard card={card as MajorArcana} key={index}/>;
                    }
                })}
            </div>

        </div>

    </>);
}