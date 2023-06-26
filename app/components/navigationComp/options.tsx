import Image from "next/image";
import libaray from "../../assets/img/inspired-horizons-digital-marketing-XqxnqyqDU0k-unsplash.jpg";
import newEx from "../../assets/img/haley.png";

interface ChildFunction {
  parentFunctionOne: Function;
  parentFunctionTwo: Function;
}

const Options = (props: ChildFunction) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 max-w-xl ">
      <div
        onClick={() => props.parentFunctionTwo()}
        className="col-span-2 aspect-w-5 aspect-h-2
         bg-blue/[.30]   
         expand 
      "
      >
        <Image
          priority
          alt=""
          src={libaray}
          className="
          object-cover 
          shadow-lg 
          rounded-md 
          mix-blend-overlay
          "
        />
        <h1 className="h1-in-img left-1/3 top-">LIBRARY</h1>
      </div>

      <div
        onClick={() => props.parentFunctionOne()}
        className="aspect-w-2 aspect-h-1 bg-turquoise/[.30] expand  col-span-2"
      >
        <Image
          alt=""
          src={newEx}
          className="object-cover shadow-lg rounded-md  mix-blend-overlay"
        />
        <h1 className="h1-in-img">CREATE WORKOUT</h1>
      </div>
    </div>
  );
};
export default Options;
