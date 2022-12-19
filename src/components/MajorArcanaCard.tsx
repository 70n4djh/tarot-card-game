import React from "react";
import TarotCard from "./TarotCard";
import {MajorArcana} from "../models/card";
import FoolCard from "../svgs/Fool";

export default function MajorArcanaCard(props: { card: MajorArcana }) {
    const {card} = props;
    return (
        <TarotCard isReversed={card.isReversed}>
            <p>{card.number}</p>
            <svg viewBox="0 0 90 120" width="100" height="120"></svg>
            <p>{card.name}</p>
            {/*{(card.name === 'The Fool') && <FoolCard/>}*/}
        </TarotCard>
    )
}