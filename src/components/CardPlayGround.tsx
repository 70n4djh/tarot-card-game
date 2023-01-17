import { useRef, useState } from "react";
import { Deck, MajorArcana, MinorArcana } from "../models/card";
import { LotterPickGenerator } from "../models/lottery";
import { Spreads } from "../models/spread";
import { TarotCard } from "./TarotCard";

export default function CardPlayGround() {
  const ref = useRef(TarotCard);
  const deck = new Deck();
  const spreads = new Spreads();
  const grid: number[][] = Array(5)
    .fill(0)
    .map((row) => Array(5).fill(0));
  const cards = deck.cards.map((card, index) => {
    // console.log(spreads)
    return {
      tarotCard: card,
      position: { x: -index, y: -index },
      isFlipped: true,
    };
  });
  const [keyState, setKeyState] = useState(0);
  const powerballGenerator = new LotterPickGenerator(69, 26, 5, 1);
  const megaMillionGenerator = new LotterPickGenerator(70, 25, 5, 1);

  const shuffle = () => {
    setKeyState(keyState + 1);
    deck.shuffle();
  };

  const lotteryGen = () => {
    const pb = powerballGenerator.generateLottery();
    const mm = megaMillionGenerator.generateLottery();

    alert(`Powerball: ${pb}\nMegamillion: ${mm}`);
  };

  return (
    <>
      <div className="menu">
        <button className="menu-item" onClick={shuffle}>
          Shuffle
        </button>
        <button className="menu-item" onClick={lotteryGen}>
          Feeling Lucky?
        </button>
      </div>
      <div
        className={"stage"}
        style={{ transform: "translate(0rem, 0rem) scale(40%, 40%)" }}
      >
        <div className="spreads">
          {grid.map((row, indexRow) =>
            row.map(
              (cell, indexCell) =>
                spreads.spreads[0].layout.legends[indexRow][indexCell] !== undefined && (
                  <div
                    className="slot"
                    key={indexCell}
                    style={{
                      transform: `translate(${indexCell * 25 + indexCell * 5}em, ${indexRow * 36}em`,
                    }}
                  >
                    <p className="spread-meaning">{spreads.spreads[0].layout.legends[indexRow][indexCell].meaning}</p>
                    <p className="spread-index">{spreads.spreads[0].layout.legends[indexRow][indexCell].index}</p>
                  </div>
                )
            )
          )}
        </div>
        <div className="cards" style={{ transform: "translate(0rem, 0rem)" }} >
          {cards.map((card, index) => {
            let { tarotCard, position, isFlipped } = card;
            if ("suit" in card) {
              return (
                <TarotCard
                  card={tarotCard as MinorArcana}
                  key={tarotCard.id + keyState}
                  offset={index}
                  pos={position}
                  isFlipped={isFlipped}
                  ref={ref}
                />
              );
            } else {
              return (
                <TarotCard
                  card={tarotCard as MajorArcana}
                  key={tarotCard.id + keyState}
                  offset={index}
                  pos={position}
                  isFlipped={isFlipped}
                  ref={ref}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
