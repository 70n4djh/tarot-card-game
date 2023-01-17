import { MinorArcana } from "../models/card";
import { ReactComponent as AceCard } from "../svgs/p01.svg";
import { ReactComponent as TwoCard } from "../svgs/p02.svg";
import { ReactComponent as ThreeCard } from "../svgs/p03.svg";
import { ReactComponent as FourCard } from "../svgs/p04.svg";
import { ReactComponent as FiveCard } from "../svgs/p05.svg";
import { ReactComponent as SixCard } from "../svgs/p06.svg";
import { ReactComponent as SevenCard } from "../svgs/p07.svg";
import { ReactComponent as EightCard } from "../svgs/p08.svg";
import { ReactComponent as NineCard } from "../svgs/p09.svg";
import { ReactComponent as TenCard } from "../svgs/p10.svg";
import { ReactComponent as PageCard } from "../svgs/p11.svg";
import { ReactComponent as KnightCard } from "../svgs/p12.svg";
import { ReactComponent as QueenCard } from "../svgs/p13.svg";
import { ReactComponent as KingCard } from "../svgs/p14.svg";

export default function CupSvg(props: { card: MinorArcana }) {
  const Switch = (props: { card: MinorArcana }) => {
    switch (props.card.rank) {
      case 1:
        return <AceCard></AceCard>;
      case 2:
        return <TwoCard></TwoCard>;
      case 3:
        return <ThreeCard></ThreeCard>;
      case 4:
        return <FourCard></FourCard>;
      case 5:
        return <FiveCard></FiveCard>;
      case 6:
        return <SixCard></SixCard>;
      case 7:
        return <SevenCard></SevenCard>;
      case 8:
        return <EightCard></EightCard>;
      case 9:
        return <NineCard></NineCard>;
      case 10:
        return <TenCard></TenCard>;
      case 11:
        return <PageCard></PageCard>;
      case 12:
        return <KnightCard></KnightCard>;
      case 13:
        return <QueenCard></QueenCard>;
      case 14:
        return <KingCard></KingCard>;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Switch card={props.card}></Switch>
    </>
  );
}
