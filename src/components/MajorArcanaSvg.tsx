import { MajorArcana } from "../models/card";
import { ReactComponent as FoolCard } from "../svgs/m00.svg";
import { ReactComponent as MagicianCard } from "../svgs/m01.svg";
import { ReactComponent as HighPriestessCard } from "../svgs/m02.svg";
import { ReactComponent as EmpressCard } from "../svgs/m03.svg";
import { ReactComponent as EmperorCard } from "../svgs/m04.svg";
import { ReactComponent as HierophantCard } from "../svgs/m05.svg";
import { ReactComponent as LoversCard } from "../svgs/m06.svg";
import { ReactComponent as ChariotCard } from "../svgs/m07.svg";
import { ReactComponent as StrengthCard } from "../svgs/m08.svg";
import { ReactComponent as HermitCard } from "../svgs/m09.svg";
import { ReactComponent as WheelofFortuneCard } from "../svgs/m10.svg";
import { ReactComponent as JusticeCard } from "../svgs/m11.svg";
import { ReactComponent as HangedManCard } from "../svgs/m12.svg";
import { ReactComponent as DeathCard } from "../svgs/m13.svg";
import { ReactComponent as TemperanceCard } from "../svgs/m14.svg";
import { ReactComponent as DevilCard } from "../svgs/m15.svg";
import { ReactComponent as TowerCard } from "../svgs/m16.svg";
import { ReactComponent as StarCard } from "../svgs/m17.svg";
import { ReactComponent as MoonCard } from "../svgs/m18.svg";
import { ReactComponent as SunCard } from "../svgs/m19.svg";
import { ReactComponent as JudgementCard } from "../svgs/m20.svg";
import { ReactComponent as WorldCard } from "../svgs/m21.svg";

export default function MajorArcanaSvg(props: { card: MajorArcana }) {
  const Switch = (props: { card: MajorArcana }) => {
    switch (props.card.number) {
      case 0:
        return <FoolCard></FoolCard>;
      case 1:
        return <MagicianCard></MagicianCard>;
      case 2:
        return <HighPriestessCard></HighPriestessCard>;
      case 3:
        return <EmpressCard></EmpressCard>;
      case 4:
        return <EmperorCard></EmperorCard>;
      case 5:
        return <HierophantCard></HierophantCard>;
      case 6:
        return <LoversCard></LoversCard>;
      case 7:
        return <ChariotCard></ChariotCard>;
      case 8:
        return <StrengthCard></StrengthCard>;
      case 9:
        return <HermitCard></HermitCard>;
      case 10:
        return <WheelofFortuneCard></WheelofFortuneCard>;
      case 11:
        return <JusticeCard></JusticeCard>;
      case 12:
        return <HangedManCard></HangedManCard>;
      case 13:
        return <DeathCard></DeathCard>;
      case 14:
        return <TemperanceCard></TemperanceCard>;
      case 15:
        return <DevilCard></DevilCard>;
      case 16:
        return <TowerCard></TowerCard>;
      case 17:
        return <StarCard></StarCard>;
      case 18:
        return <MoonCard></MoonCard>;
      case 19:
        return <SunCard></SunCard>;
      case 20:
        return <JudgementCard></JudgementCard>;
      case 21:
        return <WorldCard></WorldCard>;
      default:
        return <></>;
    }
  };

  return (
    <>
      <svg
        viewBox="0 0 350 550"
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
