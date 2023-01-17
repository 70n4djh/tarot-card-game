import { MinorArcana, TarotSuit } from "../models/card";
import CupSvg from "./CupSvg";
import PentacleSvg from "./PentacleSvg";
import SwordSvg from "./SwordSvg";
import WandSvg from "./WandSvg";


export default function MinorArcanaSvg(props: { card: MinorArcana }) {
  const Switch = (props: { card: MinorArcana }) => {
    switch (props.card.suit) {
      case TarotSuit.CUP:
        return <CupSvg card={props.card}></CupSvg>;
      case TarotSuit.WAND:
        return <WandSvg card={props.card}></WandSvg>;
      case TarotSuit.SWORD:
        return <SwordSvg card={props.card}></SwordSvg>;
      case TarotSuit.PENTACLE:
        return <PentacleSvg card={props.card}></PentacleSvg>
      default:
        return <></>;
    }
  };

  return (
    <>
      <svg
        viewBox="0 0 350 600"
        width="120"
        height="220"
        preserveAspectRatio="none"
        transform={props.card.isReversed ? "rotate(180)" : ""}
      >
        <Switch card={props.card}></Switch>
      </svg>
    </>
  );
}
