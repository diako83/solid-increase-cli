import Image from "next/image";
import hiitImg from "../../assets/img/pull.png";
import runningImg from "../../assets/img/swim.png";
import yogaImg from "../../assets/img/yogachill.png";
import gymImg from "../../assets/img/curl.png";
import gymKb from "../../assets/img/kb32.png";

interface ILinkes {
  hiit: string;
  cardio: string;
  gym: string;
  yoga: string;
  kb: string;
}

const StatsNavImageGallery = (props: ILinkes) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 max-w-xl ">
      <div
        onClick={() => console.log("Hiit")}
        className="col-span-2 aspect-w-6 aspect-h-2
         bg-orange/[.40]   
         expand 
      "
      >
        <Image
          priority
          alt=""
          src={hiitImg}
          className="
          object-cover 
          shadow-lg 
          rounded-md 
          mix-blend-overlay
          "
        />
        <h1 className="h1-in-img left-1/3 top-6">HIIT</h1>
      </div>

      <div
        onClick={() => console.log("cardio")}
        className="aspect-w-6 aspect-h-2  bg-yellow/[.40] expand  col-span-2"
      >
        <Image
          priority
          alt=""
          src={runningImg}
          className="object-cover shadow-lg rounded-md  mix-blend-overlay"
        />
        <h1 className="h1-in-img left-60 top-20">CARDIO</h1>
      </div>
      <div
        onClick={() => console.log(console.log("gym"))}
        className=" aspect-w-6 aspect-h-2 col-span-2  bg-blue/[.40] expand "
      >
        <Image
          alt=""
          src={gymImg}
          className="object-cover shadow-lg rounded-md  mix-blend-overlay"
        />
        <h1 className="h1-in-img top-1">GYM</h1>
      </div>

      <div
        onClick={() => console.log("yoga")}
        className="  col-span-2 aspect-w-6 aspect-h-2 bg-turquoise/[.40]  expand "
      >
        <Image
          alt=""
          className="object-cover shadow-lg rounded-md  mix-blend-overlay"
          src={yogaImg}
        />
        <h1 className="h1-in-img  top-8">YOGA</h1>
      </div>
      <div
        onClick={() => console.log("KettleBell")}
        className="col-span-2 aspect-w-6 aspect-h-2
         bg-green/[.15]   
         expand 
      "
      >
        <Image
          alt=""
          src={gymKb}
          className="
          object-cover 
          shadow-lg 
          rounded-md 
          mix-blend-overlay
          "
        />
        <span>
          <h1 className="h1-in-img  left-1/3 mt-2 ml-44">KETTLEBELLS</h1>
        </span>
      </div>
    </div>
  );
};
export default StatsNavImageGallery;
