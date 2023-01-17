import { MinorArcana } from "../models/card";
import { ReactComponent as AceCard } from "../svgs/w01.svg";
import { ReactComponent as TwoCard } from "../svgs/w02.svg";
import { ReactComponent as ThreeCard } from "../svgs/w03.svg";
import { ReactComponent as FourCard } from "../svgs/w04.svg";
import { ReactComponent as FiveCard } from "../svgs/w05.svg";
import { ReactComponent as SixCard } from "../svgs/w06.svg";
import { ReactComponent as SevenCard } from "../svgs/w07.svg";
import { ReactComponent as EightCard } from "../svgs/w08.svg";
import { ReactComponent as NineCard } from "../svgs/w09.svg";
import { ReactComponent as TenCard } from "../svgs/w10.svg";
import { ReactComponent as PageCard } from "../svgs/w11.svg";
import { ReactComponent as KnightCard } from "../svgs/w12.svg";
import { ReactComponent as QueenCard } from "../svgs/w13.svg";
import { ReactComponent as KingCard } from "../svgs/w14.svg";

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
