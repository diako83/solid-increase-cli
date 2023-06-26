import Image from "next/image";
import delImage from "../../assets/icons/x-button.png";
import { IHiitMovement } from "@/app/interface/IHiit";
interface ChildFunction {
  parentFunction: Function;
}
const TableHiitComp = (props: IHiitMovement & ChildFunction) => {
  return (
    <tbody onDoubleClick={() => props.parentFunction(props.id)} className="">
      <tr className="">
        <td className="px-6 py-4">{props.name}</td>
        <td className="px-6 py-4">{props.sets}</td>
        <td className="px-6 py-4">{props.reps}</td>
        <td className="px-6 py-4">{props.weight}</td>
      </tr>
      <tr className="border-b ">
        <td className="px-6 py-4">
          Timer: {props.timer.hours}:{props.timer.minutes}:{props.timer.seconds}
        </td>
        <td className="px-6 py-4">
          Distance: {props.distance.km}:{props.distance.meter}
        </td>
      </tr>
    </tbody>
  );
};

export default TableHiitComp;
