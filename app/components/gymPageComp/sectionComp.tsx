import Image from "next/image";
import delImage from "../../assets/icons/x-button.png";

const SectionComp = (props: IGymMovement) => {
  return (
    <tbody className="">
      <tr className="bg-white border-b ">
        <td className="px-6 py-4">{props.name}</td>
        <td className="px-6 py-4">{props.sets}</td>
        <td className="px-6 py-4">{props.reps}</td>
        <td className="px-6 py-4">{props.weight}</td>
      </tr>
    </tbody>
  );
};

export default SectionComp;
