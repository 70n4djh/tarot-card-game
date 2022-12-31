import React, {useEffect, useState} from 'react';
import {Deck, MajorArcana, MinorArcana} from "../models/card";
import { LotterPickGenerator } from './lottery';
import TarotCard from './TarotCard';

export default function CardPlayGround() {
    const [deck, setDeck] = useState(new Deck());
    const [cards, setCards] = useState(deck.cards);
    const powerballGenerator = new LotterPickGenerator(69, 26 ,5 ,1);
    const megaMillionGenerator = new LotterPickGenerator(70, 25 ,5 ,1);

    const shuffle = () => {
        deck.shuffle();
        setCards([...deck.cards]);
    }

    const lotteryGen = () => {
        const pb = powerballGenerator.generateLottery();
        const mm = megaMillionGenerator.generateLottery();

        alert(`Powerball: ${pb}\nMegamillion: ${mm}`);
    }

    return (<>
        <div className='menu'>
            <button className='menu-item' onClick={shuffle}>Shuffle</button>
            <button className='menu-item' onClick={lotteryGen}>Feeling Lucky?</button>
        </div>
        <div className={"stage"} style={{transform: 'translate(0px, 0px) scale(40%, 40%)'
        }}>
            <div className="cards">
                {cards.map((card, index) => {
                    if ("suit" in card) {
                        return <TarotCard card={card as MinorArcana} key={index} offset={index}/>;
                    } else {
                        return <TarotCard card={card as MajorArcana} key={index} offset={index}/>;
                    }
                })}
            </div>

        </div>

    </>);
}
