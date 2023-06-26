import Image from "next/image";
import delImage from "../../assets/icons/x-button.png";
import { ICardioMovement } from "@/app/interface/IRunning";

const SectionCardioComp = (props: ICardioMovement) => {
  return (
    <tbody className="">
      <tr className="bg-white border-b ">
        <td className="px-6 py-4">{props.name}</td>
        <td className="px-6 py-4">
          {props.timer.hours}:{props.timer.minutes}:{props.timer.seconds}
        </td>
        <td className="px-6 py-4">
          {props.distance.km}:{props.distance.meter}
        </td>
      </tr>
    </tbody>
  );
};

export default SectionCardioComp;
