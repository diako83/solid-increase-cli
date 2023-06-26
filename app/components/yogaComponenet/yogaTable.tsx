import Image from "next/image";
import delImage from "../../assets/icons/x-button.png";
import { IYogaMovement } from "@/app/interface/IYoga";
interface ChildFunction {
  parentFunction: Function;
}
const YogaComp = (props: IYogaMovement & ChildFunction) => {
  return (
    <tbody className="">
      <tr
        className=" border-b "
        onDoubleClick={() => props.parentFunction(props.id)}
      >
        <td className="px-6 py-4">{props.name}</td>
        <td className="px-6 py-4">{props.sets}</td>
        <td className="px-6 py-4">{props.reps}</td>
        <td className="px-6 py-4">
          {props.timer.hours}:{props.timer.minutes}:{props.timer.seconds}:
        </td>
      </tr>
    </tbody>
  );
};

export default YogaComp;
