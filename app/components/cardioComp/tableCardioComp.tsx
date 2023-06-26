import Image from "next/image";
import delImage from "../../assets/icons/x-button.png";
import { ICardioMovement } from "@/app/interface/IRunning";
interface ChildFunction {
  parentFunction: Function;
}
const TableCardioComp = (props: ICardioMovement & ChildFunction) => {
  return (
    <tbody className="">
      <tr
        className=" border-b "
        onDoubleClick={() => props.parentFunction(props.id)}
      >
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

export default TableCardioComp;
