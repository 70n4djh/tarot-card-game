import { MinorArcana } from "../models/card";
import { ReactComponent as AceCard } from "../svgs/s01.svg";
import { ReactComponent as TwoCard } from "../svgs/s02.svg";
import { ReactComponent as ThreeCard } from "../svgs/s03.svg";
import { ReactComponent as FourCard } from "../svgs/s04.svg";
import { ReactComponent as FiveCard } from "../svgs/s05.svg";
import { ReactComponent as SixCard } from "../svgs/s06.svg";
import { ReactComponent as SevenCard } from "../svgs/s07.svg";
import { ReactComponent as EightCard } from "../svgs/s08.svg";
import { ReactComponent as NineCard } from "../svgs/s09.svg";
import { ReactComponent as TenCard } from "../svgs/s10.svg";
import { ReactComponent as PageCard } from "../svgs/s11.svg";
import { ReactComponent as KnightCard } from "../svgs/s12.svg";
import { ReactComponent as QueenCard } from "../svgs/s13.svg";
import { ReactComponent as KingCard } from "../svgs/s14.svg";

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
