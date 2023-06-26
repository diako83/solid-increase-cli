import Image from "next/image";
import delImage from "../../assets/icons/x-button.png";
interface ChildFunction {
  parentFunction: Function;
}
const TableComp = (props: IGymMovement & ChildFunction) => {
  return (
    <tbody className="">
      <tr
        className=" border-b "
        onDoubleClick={() => props.parentFunction(props.id)}
      >
        <td className="px-6 py-4">{props.name}</td>
        <td className="px-6 py-4">{props.sets}</td>
        <td className="px-6 py-4">{props.reps}</td>
        <td className="px-6 py-4">{props.weight}</td>
      </tr>
    </tbody>
  );
};

export default TableComp;
